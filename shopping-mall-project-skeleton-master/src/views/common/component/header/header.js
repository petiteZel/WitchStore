// 아래는 현재 home.html 페이지에서 쓰이는 코드는 아닙니다.
// 다만, 앞으로 ~.js 파일을 작성할 때 아래의 코드 구조를 참조할 수 있도록,
// 코드 예시를 남겨 두었습니다.

// 헤더 고정
const header = document.querySelector(".navbar");
const headerContain = document.querySelector(".navbar-container");
const headerHeight = header.offsetHeight;

window.onscroll = ()=>{
  let windowTop = window.scrollY;

  if(windowTop >= headerHeight){
    header.classList.add("drop");
    headerContain.classList.add("drop");
  }
  else{
    header.classList.remove("drop");
    headerContain.classList.remove("drop");
  }
}

// //쇼핑으로 이동
// const shopBtn = document.querySelector("#shop-btn")
// shopBtn.addEventListener('click',()=>{
//   //이동
//   console.log("이동")
// })

// import * as Api from "/api.js";
// import { randomId } from "/useful-functions.js";

// // 요소(element), input 혹은 상수
// const landingDiv = document.querySelector("#landingDiv");
// const greetingDiv = document.querySelector("#greetingDiv");

// header 위치 고정


// addAllElements();
// addAllEvents();

// // html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// async function addAllElements() {
//   insertTextToLanding();
//   insertTextToGreeting();
// }

// // 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// function addAllEvents() {
//   landingDiv.addEventListener("click", alertLandingText);
//   greetingDiv.addEventListener("click", alertGreetingText);
// }

// function insertTextToLanding() {
//   landingDiv.insertAdjacentHTML(
//     "beforeend",
//     `
//       <h2>n팀 쇼핑몰의 랜딩 페이지입니다. 자바스크립트 파일에서 삽입되었습니다.</h2>
//     `
//   );
// }

// function insertTextToGreeting() {
//   greetingDiv.insertAdjacentHTML(
//     "beforeend",
//     `
//       <h1>반갑습니다! 자바스크립트 파일에서 삽입되었습니다.</h1>
//     `
//   );
// }

// function alertLandingText() {
//   alert("n팀 쇼핑몰입니다. 안녕하세요.");
// }

// function alertGreetingText() {
//   alert("n팀 쇼핑몰에 오신 것을 환영합니다");
// }

// async function getDataFromApi() {
//   // 예시 URI입니다. 현재 주어진 프로젝트 코드에는 없는 URI입니다.
//   const data = await Api.get("/api/user/data");
//   const random = randomId();

//   console.log({ data });
//   console.log({ random });
// }
