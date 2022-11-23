import React, { useState } from "react";
import style from "./header.module.css";
import logo from "../image/logo.png";

function Header() {
  function logout() {
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", () => {
      sessionStorage.clear();
      alert(`로그아웃 되었습니다.`);
      window.location.reload();
    });
  }
  const [loginInfo, setLoginInfo] = useState("");

  async function callLogIn() {
    const token = sessionStorage.getItem("token");
    const admin = sessionStorage.getItem("admin");

    if (token) {
      const email = sessionStorage.getItem("email");
      const userId = email.split("@")[0];

      if (!admin) {
        setTimeout(()=>{setLoginInfo(
          <nav className={style.nav} id="selectNav">
            <div className={style.userInfoBox}>
              <div className={style.userInfo}>
                <div className={style.userNameContainer}>
                  <label for="userName" className={`${style.userName} ${style.en}`}>
                    ${userId}
                  </label>
                  <button id="userName" className={style.userInfoBtn}>
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <div className={style.userMenuBox}>
                  <ul className={style.userMenu}>
                    <li>
                      <a href="/order-detail">주문내역</a>
                    </li>
                    <li>
                      <a href="/changingInfo">계정관리</a>
                    </li>
                    <li>
                      <a href="/" id="logoutBtn">
                        로그아웃
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="../cart" className={style.userCartBtn}>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </nav>
        );},200)
        logout();
      } else {
        setTimeout(()=>{
          setLoginInfo(
          <nav className={style.nav} id="selectNav">
            <div className={style.userInfoBox}>
              <div className={style.userInfo}>
                <div className={style.userNameContainer}>
                  <label for="userName" className={`${style.userName} ${style.en}`}>
                    Admin
                  </label>
                  <button id="userName" className={style.userInfoBtn}>
                    <i className="fa-solid fa-caret-down"></i>
                  </button>
                </div>
                <div className={style.userMenuBox}>
                  <ul className={style.userMenu}>
                    <li>
                      <a href="/admin-main">페이지 관리</a>
                    </li>
                    <li>
                      <a href="/changingInfo">계정관리</a>
                    </li>
                    <li>
                      <a href="/" id="logoutBtn">
                        로그아웃
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="../cart" className={style.userCartBtn}>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </nav>
        );},200)
        logout();
      }
    } else {
      setTimeout(()=>{
        setLoginInfo(
          <nav className={style.nav} id="selectNav">
            <div className={style.loginSignupBox}>
              <button className={`${style.loginBtn} ${style.en}`}>
                <a href="/login">login</a>
              </button>
              <button className={`${style.signupBtn} ${style.en}`}>
                <a href="/register">sign up</a>
              </button>
            </div>
            <a href="../cart" className={style.userCartBtn}>
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </nav>
        );},200)
    }
  }

  callLogIn()
  
  const headerFirst = (
    <header className={style.center}>
      <div className={style.container}>
        <h1 className={style.logo}>
          <a href="/home">
            <img src={logo} alt="logo" />
          </a>
        </h1>
        {loginInfo}
      </div>
    </header>
  );

  return headerFirst;
}

// function logout(){
//   const logoutBtn = document.querySelector("#logoutBtn")
//   logoutBtn.addEventListener('click',()=>{
//     sessionStorage.clear()
//     alert(`로그아웃 되었습니다.`)
//     window.location.reload()
//   });
// }

// async function header(callback) {
//   const token = sessionStorage.getItem("token");
//   const admin = sessionStorage.getItem("admin");
//   let loginInfo;

//   if (token) {
//     const email = sessionStorage.getItem("email");
//     const userId = email.split('@')[0]

//     setTimeout(() => {
//       const header = document.querySelector("#selectNav");
//       if(!admin){
//         loginInfo = `<div className={style.userInfoBox}>
//           <div className={style.userInfo}>
//             <div className={style.userNameContainer}>
//               <label for="userName" className={`${style.userName} ${style.en}`}>${userId}</label>
//               <button id='userName' className="userInfoBtn"><i className="fa-solid fa-caret-down"></i></button>
//             </div>
//             <div className="userMenuBox">
//               <ul className="userMenu">
//                   <li><a href="/order-detail">주문내역</a></li>
//                   <li><a href="/changingInfo">계정관리</a></li>
//                   <li><a href='/' id="logoutBtn">로그아웃</a></li>
//               </ul>
//             </div>
//         </div>

//               </div>
//               <a href="../cart" className={style.userCartBtn}><i className="fa-solid fa-cart-shopping"></i></a>`;
//               callback();
//             }else{
//               loginInfo = `<div className={style.userInfoBox}>
//                 <div className={style.userInfo}>
//                         <div className={style.userNameContainer}>
//                           <label for="userName" className={`${style.userName} ${style.en}`}>Admin</label>
//                           <button id='userName' className="userInfoBtn"><i className="fa-solid fa-caret-down"></i></button>
//                         </div>
//                         <div className="userMenuBox">
//                           <ul className="userMenu">
//                               <li><a href="/admin-main">페이지 관리</a></li>
//                               <li><a href="/changingInfo">계정관리</a></li>
//                               <li><a href='/' id ="logoutBtn">로그아웃</a></li>
//                           </ul>
//                         </div>
//                     </div>

//                     </div>
//                     <a href="../cart" className={style.userCartBtn}><i className="fa-solid fa-cart-shopping"></i></a>`;
//                     callback()
//             }

//           },200);
//         } else {
//     setTimeout(() => {
//       loginInfo = `<div className="loginSignupBox">
//       <button className="loginBtn en"><a href="/login">login</a></button>
//       <button className="signupBtn en"><a href="/register">sign up</a></button>
//     </div>
//     <a href="../cart" className={style.userCartBtn}><i className="fa-solid fa-cart-shopping"></i></a>`;
//     },200);
//   }
//   return loginInfo;
// }

// header(logout);

export default Header;
