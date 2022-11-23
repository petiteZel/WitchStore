// import { checkAdmin, createNavbar } from "../useful-functions.js";

// checkAdmin();
// createNavbar();

import React from "react";
import style from "./admin-webservice.module.css"

function AdminMain() {
    return(

        <div className={style.main}> 
            <div className={style.adminWebservice}>
                <h3> 웹 서비스 관리 </h3>
            </div>
            <div className={style.menuContainer}>
                {/* <!-- 주문관리 --> */}
                <a className={style.menuCard} href="/admin-order-management/admin-order-management.html">
                    <div className={style.menuIcon}>
                        <span className={style.icon}>
                            <i className="fa-solid fa-credit-card"></i>
                        </span>
                    </div>
                    <div className={style.menuBody}>
                        <p className={style.title}>주문관리</p>
                        <p className={style.subtitle}>
                            모든 주문 내역을 확인 및 관리할 수 있습니다.
                        </p>
                    </div>
                </a>

                {/* <!-- 회원관리 --> */}
                <a className={style.menuCard} href="/admin-users/admin-users.html">
                    <div className={style.menuIcon}>
                        <span className={style.icon}>
                            <i className="fa-solid fa-address-book"></i>
                        </span>
                    </div>
                    <div className={style.menuBody}>
                        <p className={style.title}>회원관리</p>
                        <p className={style.subtitle}>
                            모든 회원 정보를 확인 및 관리할 수 있습니다.
                        </p>
                    </div>
                </a>

                {/* <!-- 카테고리 추가하기 --> */}
                <a className={style.menuCard} href="/add-category/add-category.html">
                    <div className={style.menuIcon}>
                        <span className={style.icon}>
                            <i className="fa-solid fa-table-list"></i>
                        </span>
                    </div>
                    <div className={style.menuBody}>
                        <p className={style.title}>카테고리 추가</p>
                        <p className={style.subtitle}>
                            제품이 속할 수 있는, 카테고리 정보를 추가할 수 있습니다.
                        </p>
                    </div>
                </a>

                {/* <!-- 제품 추가하기 --> */}
                <a className={style.menuCard} href="/add-product/add-product.html">
                    <div className={style.menuIcon}>
                        <span className={style.icon}>
                            <i className="fa-solid fa-gift"></i>
                        </span>
                    </div>
                    <div className={style.menuBody}>
                        <p className={style.title}>제품 추가</p>
                        <p className={style.subtitle}>제품 정보를 추가할 수 있습니다.</p>
                    </div>
                </a>
            </div>
        </div>

    )
}
export default AdminMain;