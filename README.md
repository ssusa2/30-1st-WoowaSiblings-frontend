## 삼십 문방구
- 30기 가치를 알리다. 삼십문방구
- 짧은 프로젝트 기간, 적은 인원으로 개발에 집중해야 하므로, 디자인/기획 부분만 모티브 삼아 진행했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 진행하였습니다.

## 프로젝트 기간
2022.02.28.월 ~ 2022.03.11.금

## 프로젝트 참여 인원
프론트 엔드 : 정수인, 한영현<br>
백엔드 : 김동규, 김은지

## 필수 구현 사항
1. 로그인 / 회원가입 
2. 메인페이지
3. 상세페이지 
4. 장바구니
5. Nav

## 추가 구현 사항
1. 자주 묻는 질문 구현하기
2. 실제 결제 구현하기
3. 삼십세끼 (30기 식사 매칭서비스)
4. 결제 시스템
5. 상품 리뷰
6. 검색 기능
7. 상품 정렬 기능 ( 추천순, 좋아요 순 )

## 구현 파트
1. 정수인 : Login/SignIn/Nav/Cart
2. 한영현 : Footer/Main/Detail

## 데모 사진
### 회원가입
- 회원가입시 다양한 유효성 검사 (양식검사, 중복검사, 아이디/비밀번호 불일치 검사)
- 검사 통과하지 못할 경우 알림창 출력
- 양식 검사, 중복 검사 통과할 경우 사용 가능
![Screen Shot 2022-03-13 at 2 03 44 PM](https://user-images.githubusercontent.com/88773996/158045999-2f652f56-9ecd-45bf-ab42-a0596d143b35.png)

### 로그인
- 로그인 시 다양한 유효성 검사 (양식검사, 중복검사, 아이디/비밀번호 불일치 검사)
- 검사 통과하지 못할 경우 알림창 출력
- 양식 검사, 중복 검사 통과할 경우 사용 가능
- 로그인 성공 시, 메인 페이지로 이동
![Screen Shot 2022-03-13 at 2 04 11 PM](https://user-images.githubusercontent.com/88773996/158046001-eaf4bfad-0085-4ab1-91a4-a2dd0f4ca584.png)
![Screen Shot 2022-03-13 at 2 04 21 PM](https://user-images.githubusercontent.com/88773996/158046004-590c53c7-78c6-4c38-ad0b-563a7df88250.png)

### 메인
- 할인률에 따른 정가, 할인가 구분해서 스타일링 적용
- 쿼리스트링 활용해서 카테고리 페이지 구현
- 동적 라우팅 활용해 상세 페이지 이동 구현
![Screen Shot 2022-03-13 at 2 04 33 PM](https://user-images.githubusercontent.com/88773996/158046007-cd188b29-cf60-413e-871f-4b64eb45280a.png)

### 상세
- 로그인 상태일 때 장바구니 버튼 누르면 알림창이 출력되고 장바구니로 이동하면서 체크한 데이터를 백엔드로 보냄
- 비 로그인 상태일 때 장바구니 버튼 누르면 알림창 출력되고 로그인 페이지로 이동
- 수량 버튼에 클릭에 따른 수량 조절
![Screen Shot 2022-03-13 at 2 08 22 PM](https://user-images.githubusercontent.com/88773996/158046012-43161a8d-08f9-46dd-a060-21f003f83618.png)

### 장바구니
- 체크박스 체크 유무
- 수량 변경에 따른 가격 변경
- 구매버튼 누를 시 알림창 출력
- 장바구니 페이지 렌더링 시 fetch함수를 이용해서 백엔드로부터 장바구니 데이터 받아옴
![Screen Shot 2022-03-13 at 2 08 47 PM](https://user-images.githubusercontent.com/88773996/158046022-2fcae8a7-5f4b-49b7-aeff-988a2e62bd45.png)

## Nav
- Nav의 카테고리 요소를 클릭 시, 그에 맞는 URl주소로 이동하고, fetch()함수를 사용하여 쿼리스트링으로 URL를 전달

## 적용 기술
- Common<br>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white"><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">

- Frontend<br>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## 프로젝트 후기
<a href="https://velog.io/@audgns9207/woowaSiblings">프로젝트를 마치며</a>
## Reference
이 프로젝트는 배민 문방구 사이트를 참조하여 학습목적으로 만들었습니다.<br>
실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.<br>
이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
