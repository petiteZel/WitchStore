function logout(){
  const logoutBtn = document.querySelector("#logoutBtn")
  logoutBtn.addEventListener('click',()=>{
    sessionStorage.clear()
    alert(`로그아웃 되었습니다.`)
    window.location.reload()
  });
}

async function header(callback) {
  const token = sessionStorage.getItem("token");
  const admin = sessionStorage.getItem("admin");

  if (token) {
    const email = sessionStorage.getItem("email");
    const userId = email.split('@')[0]

    setTimeout(() => {
      const header = document.querySelector("#selectNav");
      if(!admin){
        header.innerHTML = `<div class="user-info-box">    
          <div class="user-info">
            <div class="user-name-container">
              <label for="user-name" class="user-name en">${userId}</label>
              <button id='user-name' class="user-info-btn"><i class="fa-solid fa-caret-down"></i></button>  
            </div>
            <div class="user-menu-box">
              <ul class="user-menu">
                  <li><a href="/order-detail/order-detail.html">주문내역</a></li>
                  <li><a href="/changing-info/changing-info.html">계정관리</a></li>
                  <li><a href='/' id="logoutBtn">로그아웃</a></li>
              </ul>
            </div>
        </div>
              
              </div>
              <a href="../cart/cart.html" class="user-cart-btn"><i class="fa-solid fa-cart-shopping"></i></a>`;
              callback();
            }else{
              header.innerHTML = `<div class="user-info-box"> 
                <div class="user-info">
                        <div class="user-name-container">
                          <label for="user-name" class="user-name en">Admin</label>
                          <button id='user-name' class="user-info-btn"><i class="fa-solid fa-caret-down"></i></button>  
                        </div>
                        <div class="user-menu-box">
                          <ul class="user-menu">
                              <li><a href="/admin-main/admin-webservice.html">페이지 관리</a></li>
                              <li><a href="/changing-info/changing-info.html">계정관리</a></li>
                              <li><a href='/' id ="logoutBtn">로그아웃</a></li>
                          </ul>
                        </div>
                    </div>
                    
                    </div>
                    <a href="../cart/cart.html" class="user-cart-btn"><i class="fa-solid fa-cart-shopping"></i></a>`;
                    callback()
            }
            
          },200);
        } else {
    setTimeout(() => {
      const header = document.querySelector("#selectNav");
      header.innerHTML = `<div class="login-signup-box"> 
      <button class="login-btn en"><a href="/login">login</a></button>
      <button class="signup-btn en"><a href="/register">sign up</a></button>
    </div>
    <a href="../cart/cart.html" class="user-cart-btn"><i class="fa-solid fa-cart-shopping"></i></a>`;
    },200);
  }
}


header(logout);