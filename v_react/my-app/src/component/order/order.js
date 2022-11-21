// import * as Api from "../api.js";
import React from "react";
import  style from "./order.module.css"

function Order() {
  return (
    <div className={style.Order}>

        <div className={style.container}>
            <h3 className={style.title}>배송 정보</h3>

            <div className={style.ListBox}>
                <div className={style.infoList}>
                  <div className={style.DeliveryInfoBox}>
                      <label htmlFor="order-name" >이름</label>
                      <input className="order-name" id="receiverName" type="text" placeholder="이름을 입력해 주세요." autocomplete="on" />
                  </div>

                  <div className={style.DeliveryInfoBox}>
                      <label htmlFor="order-phon-number" >전화번호</label>
                      <input className="order-phon-number"  id="receiverPhoneNumber" type="text" placeholder="010-0000-0000" autocomplete="on" />
                  </div>
                  
                  <div className={style.DeliveryInfoBox}>
                      <label htmlFor="order-adress" >주소</label>
                      <input className="order-adress" id="address" type="text" placeholder="주소를 입력해 주세요." autocomplete="on" />
                  </div>
                </div>
            </div>
        </div>{ /* info end */ }

        <div className={style.container}>
            <h3 className={style.title}>결제 정보</h3>

            <div className={style.ListBox} id="pay-product-container">
                <div className={style.payInfoBox}>
                    <p>주문 상품</p>
                    <div className={style.productList} id="productsTitle">
                        { /* 상품명 들어가는 곳  */ }
                    </div>
                </div>
                <div className={style.payInfoBox} id="productsTotal">
                    <p>상품 금액</p>
                    { /* 상품 금액 들어가는 곳  */ }
                </div>
                <div className={style.payInfoBox}>
                    <p>배송비</p>
                    <p id="deliveryFee">3,000</p>
                </div>

                <div className={`${style.payInfoBox} ${style.total}`} id="orderTotal">
                    <p >총 결제금액</p>
                    { /* 총 결제  */ }
                </div>
            </div>

            <div className={style.payBtnBox}>
                <button type="button" className={style.payBtn} id="checkoutButton"><a href="../finish-shopping/finish-shopping.html">결제하기</a></button>
            </div>
        </div>

    </div>
  )
};

export default Order;

{/* async function insertProductsfromOder(){
  const localLength = localStorage.length;
  const orders = []

  htmlFor(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
  }
  
  const productsTitle = document.querySelector("#productsTitle")
  const productsTotal = document.querySelector("#productsTotal")
  const orderTotal = document.querySelector("#orderTotal")
  
  orders.htmlForEach(async (product) => {
    const {  _id, productName, amount, price, image } = product

    productsTitle.insertAdjacentHTML("behtmlForeend", `<p className="product" >${productName} / ${amount}</p>`);
    productsTotal.insertAdjacentHTML("behtmlForeend", `<p>${price}</p>`);
  orderTotal.insertAdjacentHTML("behtmlForeend", `<p className="total-price" >${Number(price)+3000}</p>`);
  });

  

  
}

insertProductsfromOder(); */}