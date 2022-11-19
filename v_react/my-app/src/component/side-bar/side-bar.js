import React from "react";
import style from "./side-bar.module.css"

function SideBar(){
    return(
<ul className={style.menu}>
  <li>
    <input type="checkbox" className={style.menuBtn} id={style.menuBtn1} />
    <label for={style.menuBtn1} className={style.labelBtn} onclick=""><i className="fa-solid fa-caret-right"></i> 제품별</label>
    <ul className={style.submenu} id={style.submenu1}>
      <li><a href="/product-list/product.html">All</a></li>
    </ul>
  </li>
  <li>
    <input type="{checkbox}" className={style.menuBtn} id={style.menuBtn2} />
    <label for={style.menuBtn2} className={style.labelBtn} onclick=""><i className="fa-solid fa-caret-right"></i> 유형별</label>
    <ul className={style.submenu} id={style.submenu2}>
      <li><a href="/product-list/product.html?personType=1유형">1유형</a></li>
      <li><a href="/product-list/product.html?personType=2유형">2유형</a></li>
      <li><a href="/product-list/product.html?personType=3유형">3유형</a></li>
      <li><a href="/product-list/product.html?personType=4유형">4유형</a></li>
    </ul>
  </li>
</ul>
    )
}
export default SideBar;