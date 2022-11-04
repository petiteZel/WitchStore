function includeHTML(){
  let z, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");
  
  for (let i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("common-include");
    
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("common-include");
          includeHTML();
        }//if
      }//onreadystatechange

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }//if - file
  }//for
}//includeHTML


/* ✨ 실행 */
window.addEventListener('DOMContentLoaded',()=>{
  includeHTML();
});



// 11.03 오피스아워
//코치님께서 적어주신 헤더 변경 방법. 응용해서 진행해보는걸로.

/*
const handleLoad = () => {
  const userInfo = localStorage.getItem("userInfo");
  // 있으면 객체, 없으면 null undefined

  if (userInfo) {
    const name = userInfo.name;
    const pEl = document.createElement("p");
    pEl.textContent = name;

    const headerEl = document.getElementById("header");
    headerEl.appendChild(pEl);
  }
};

const loginBtnEl = document.getElementById("btn");

loginBtnEl.addEventListener("click", async () => {
  try {
    const body = {
      email,
      password,
    };

    const res = await axios.post("/api/login", body);
    if (res.data) {
      const userInfo = {
        email: res.data.email,
        password: res.data.password,
      };
      //
      localStorage.setItem("userInfo", userInfo);
    }
  } catch (err) {
    console.log("err", err);
  }
});

handleLoad();

const popup = document.getElementById("popup");

popup.addEventListener("focus", () => {
  popup.style.display = "block";
});
popup.addEventListener("focus-within", () => {
  popup.style.display = "block";
});
popup.addEventListener("mouseenter", () => {
  popup.style.display = "block";
});
popup.addEventListener("click", () => {
  popup.style.display = "block";
});
popup.addEventListener("keydown", () => {
  popup.style.display = "block";
});
*/