# 프로그램 실행 
cd mini  
yarn start

# 패키지 설치 목록 
리덕스 설치 : yarn add react-redux  
툴킷 (리덕스) 설치 : yarn add @reduxjs/toolkitthunk   
(미들웨어) 설치 : yarn add redux-thunk  
axios(통신) 설치 : yarn add axios  
라우터 (페이지 이동) 설치 : yarn add react-router-dom  
logger (개발 편하게 도와줌) 설치 : yarn add redux-loger  
styled-components (스타일 적용) 설치 : yarn add styled-components  
유효성 검사(폼 사용자 입력 안내 적용) : yarn add react-hook-form  
observer (무한스크롤) 설치 : yarn add react-intersection-observer  
material ui 설치 : yarn add @material-ui/core

# 기능구현 목록  
실시간 날씨정보 구현(Open Weather Api사용)  
실시간 시간(moment.js 사용)


# 트러블 슈팅 
1.api 없이 mock api를 구현하면서 crud의 경우 mock api를 이용해 기능 구현이 가능하지만 
로그인 / 회원가입의 경우 토큰을 사용하여 기능구현을 하기 때문에 mock api만으로는 구현이 힘들어서
백엔드분에게 부탁하여 가짜 서버를 만들어 달라고 부탁하였다. 

2.리덕스 툴킷을 사용하여 개발하던 중 slice의 extraReducers에서 initialState 값에 map , filter를
활용하여 구현하니 map,filter not a function 이라는 에러메시지만 출력되었다. store의 state의
type을 검사해보니 object타입이고 , 리덕스 툴킷의 immer라는 내장 함수 때문에 store의 state를
콘솔에 찍어보면 immer에서 지원해주는 proxy라는 키 값을 가진 객체형태로 출력되는것을 알게되었다.
첫번째 생각했던 방식은 object를 array로 바꿔주는 방식을 생각했었는데 이 방식의 문제로는 어차피
array로 바꿔줘봤자 immer를 내장하고 있는 slice 때문에 의미가 없다.. 

2.두번째로 생각했던 방식은 state값만 저장해두고 내부 로직을 컴포넌트단에서 처리하는 방식으로
생각해봤다. 어차피 axios로 통신한 response에서 해당 data만 리덕스 스토에 배열 형태로 저장을
해두고 컴포넌트 단에서 받은 데이터를 기준으로 map , filter로 정제하는 방식을 생각했다. 


3.컴포넌트가 렌더링을 하고 난 후에야 상태가 바뀐다. 예를 들어서 수정,삭제 버튼을 누르거나 
업로드 버튼을 눌렀을 때에 컴포넌트가 새로고침이 일어나고 나서 즉 렌더링을 한번 하고 나서 상태가
변경되는 이슈가 발생했다. 이 부분은 컴포넌트 내부에서 state 정보를 알지 못해서 발생했었다.

4.vercel로 배포 후 서버와 axios로 통신하는 부분에서 mixed-content 에러가 발생했다. 이 부분은
index.html 태그에 meta태그로 설정 하나만 변경해주면 해결되었다. 하지만 이후에 또다른 ssl 에러가
발생하였는데 이 부분은 아직 해결하지 못하고 있다. ㅜㅜ   

5.백엔드와 처음으로 협업을 했는데 api 문서의 중요성을 깨닫게 되었다. 임의로 mock api로 짠 부분과
서버와 함께 맞춘 api로 작업을 하나하나 맞춰보는게 여간 쉬운일이 아니였다. 어쨌든 결과적으로
로그인과 메인페이지 / 댓글 crud 기능을 구현해서 만족스럽긴 하지만 아직 고쳐야 할 부분이 투성이고
목표로 했었던 이미지 업로드기능 , 무한 스크롤등은 시간관계상 구현하지 못해서 매우 아쉽다. 

