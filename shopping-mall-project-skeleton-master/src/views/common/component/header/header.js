import * as Api from "../../../api.js";

async function header() {
  const header = document.querySelector(".nav");
  const token = sessionStorage.getItem("token");
  const admin = sessionStorage.getItem("admin");

  if (token) {
    const email = sessionStorage.getItem("email");
    let userId = "";
    if (admin) {
      userId += "admin";
    } else {
      userId += email.split("@")[0];
    }
    setTimeout(() => {
      header.innerHTML = `<div class="user-info-box"> 
            <div class="user-info">
                <label for="user-name" class="user-name en">${userId}</label>
                <button class="user-info-btn"><i class="fa-solid fa-caret-down"></i></button>
            </div>
            
            <div class="user-menu-box">
                <ul class="user-menu">
                    <li><a href="#">주문내역</a></li>
                    <li><a href="#">계정관리</a></li>
                    <li><a href="#">로그아웃</a></li>
                </ul>
            </div>
        </div>`;
    }, 1000);
  } else {
    setTimeout(() => {
      header.innerHTML = `<div class="login-signup-box"> 
        <button class="login-btn en"><a href="/login">login</a></button>
        <button class="signup-btn en"><a href="/register">sign up</a></button>
    </div>`;
    });
  }
}
header();
