import * as Api from "../api.js";
import React from "react";
import  style from "./admin-order-check.module.css"

function AdminOrderCheck(){
    return (
      <div className={style.center}>
        <div className={style.container}>

          <div className={style.titleBox}>
            <h3>주문조회</h3>
          </div>

          <div className={style.orderInfoBox}>
              <div className={`${style.orderInfoRow} ${style.orderInfoTitle}`}>
                <div className={style.orderInfoColumn}><p>날짜</p></div>
                <div className={style.orderInfoColumn}><p>주문정보</p></div>
                <div className={style.orderInfoColumn}><p>상태</p></div>
                <div className={style.orderInfoColumn}><p>신청</p></div>
              </div>

              <div className={style.orderInfoRow}>
                <div className={style.orderInfoColumn}>2022-11-02</div>
                <div className={style.orderInfoColumn}>product Name / 1개</div>
                <div className={style.orderInfoColumn}>상품 준비중</div>
                <div className={style.orderInfoColumn}>
                  <button type="button" className={style.cancleBtn}>
                    주문취소
                  </button>
                </div>
              </div>
          </div>

        </div>
      </div>
    )
};

export default AdminOrderCheck;