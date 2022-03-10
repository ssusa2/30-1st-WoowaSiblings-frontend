import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SelectItem from './SelectItem/SelectItem';
import './Product.scss';

function Product() {
  const [item, setItem] = useState(null);
  const [amount, setAmount] = useState(0);
  const [goToBack, setGoToBack] = useState(0);
  const params = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.7.45:8000/products/${params.id}`)
      .then(res => res.json())
      .then(data => setItem(data.result));
  }, []);

  const goToBasket = () => {
    if (token) {
      fetch('http://10.58.7.45:8000/orders/carts', {
        method: 'POST',
        headers: { Authorization: token },
        body: JSON.stringify({
          quantity: goToBack,
          product_id: `${params.id}`,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (
            result.message === 'CREATE_CART' ||
            'ADD_QUANTITY_TO_EXISTED_CART'
          ) {
            window.confirm(
              '상품이 장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?'
            ) && navigate('/cart');
          } else {
            alert('다시 시도해주세요!');
          }
        });
    } else if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  const handleAmountValue = event => {
    setAmount(Number(event.target.value));
    setGoToBack(Number(event.target.value));
  };

  return (
    item !== null && (
      <div className="product">
        <div className="productContents" key={item.id}>
          <img
            className="productImage"
            src={item.thumbnail_image}
            alt="상세이미지"
          />
          <div className="productInfoBox">
            <h3 className="productTitle">{item.name}</h3>
            <div className="productList">
              <div className="productPrice">
                <div className="productPriceOne">정가</div>
                <span
                  className={`productPriceTwo ${
                    item.discount_rate ? 'productPriceThree' : ''
                  }`}
                >
                  {item.price.toLocaleString()}원
                </span>
              </div>
              <div className="disCountPrice">
                {item.discount_rate && (
                  <>
                    <div className="productDiscountPriceOne">할인가</div>
                    <span
                      className={`productDiscountPriceTwo ${
                        item.discount_rate ? 'productDiscountPriceThree' : ''
                      }`}
                    >
                      {item.discount_price
                        ? `${item.discount_price.toLocaleString()}원`
                        : ''}
                    </span>
                  </>
                )}
              </div>
              <div className="productDelivery">
                <div className="productDeliveryOne">배송정보</div>
                <span className="productDeliveryTwo">
                  배송이 힘들어요... 찾으러 오세요
                </span>
              </div>
            </div>
            <SelectItem content={item} onChange={handleAmountValue} />
            <div className="totalAmount">
              <div className="totalAmountOne">총 합계금액</div>
              <div className="totalPrice">
                <strong>
                  {item.discount_rate
                    ? `${(amount * item.discount_price).toLocaleString()}원`
                    : `${(amount * item.discount_price).toLocaleString()}원`}
                </strong>
              </div>
            </div>
            <div className="btnChoiceBox">
              <button type="button" className="btnAddCart" onClick={goToBasket}>
                장바구니
              </button>
              <button type="button" className="btnAddOrder">
                바로구매
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
