// $(document).ready(function(){

//     document.getElementById("footer").innerHTML='<object type="text/html" data="footer.html"></object>';

// })

import React from "react";
import style from "./footer.module.css"

function Footer(){
    return(
        <footer id={style.footer}>
        <div className={style.footerContainer}>
            
            <div className={style.footerBox}>
                <div className={style.footerCopyBox}>
                    <p>
                        서울특별시 강남구 선릉로 433, 신관 6층<br />
                         team K1ng의 모든 컨텐츠는 저작권의 보호를 받고 있습니다.<br />
                        Copyright © 2022 team K1ng all rights Reserved.
                    </p>
                </div>
    
                <div className={style.footerSnsBox}>
                    <a href="#"><i className="fa-brands fa-square-youtube"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                </div>
            </div>
            
        </div>
    </footer>
    )
}

export default Footer;