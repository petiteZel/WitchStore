import React from "react";
import style from "./finish-shopping.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasket } from "@fortawesome/free-solid-svg-icons";


// import { checkAdmin, createNavbar } from "../useful-functions.js";

// checkAdmin();
// createNavbar();

function finishShopping() {
    return(
        <div className={style.main}> 
         <div className={style.title}>
             <div className={style.finishText}>
                <h1> 주문이 정상적으로 완료되었습니다!</h1>
            </div>
         <i class="fa-solid fa-basket-shopping fa-11x" ></i>
         {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping" /> */}
       
         <div className={style.btnBox}>
       <button className={`${style.checkBtn} ${style.btnSecond}`} id={style.checkBtn} onclick="location.href='/order-detail/order-detail.html'">주문 조회 바로가기</button>
       <button className={`${style.mainBtn} ${style.btnSecond}`} id={style.homeBtn} onclick="location.href='/product-list/product.html'">메인 홈으로 이동</button>
   </div>
       
        </div>

   </div>



    )
}

export default finishShopping;