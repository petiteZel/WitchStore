import React from "react";
import style from "./home.module.css"
import witchImage from "../image/witch.gif";

function Home() {
  return (
    <div className={style.divContainer}>
    <div className={style.background}>
      <div className={style.welcomeBox}>
        <div className={style.homeTitleFirst}>
          <div className={`${style.homeTitleFirstText} ${style.en}`}>
            <h1>Hello,<br />Welcome To</h1>
          </div>
          <div className={style.welcomeImg}>
            <img id={style.witchImg} src={witchImage} alt="witch"/>
          </div>
        </div>
        <div className={`${style.homeTitleSecond} ${style.en}`}>
          <h1>The Witch Store</h1>
        </div>
      </div>
      <div className={style.btnBox}>
        <button className={style.btn} id={style.testBtn} onClick={()=>window.location.href='/type-test'}>최고의 위로 받기</button>
        <button className={style.btn} id={style.shopBtn} onClick={()=>window.location.href='/product-list'}>바로 쇼핑하기</button>
      </div>
    </div>
  </div>
  )
}

export default Home;
