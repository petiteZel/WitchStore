import * as Api from "../api.js";
import React from "react";
import style from "./admin-order-management.module.css"

function AdminOrderManagement(){
    return (
        <div className={style.center}>
            <div className={style.container}>

                <div className={style.titleBox}>
                    <h3>주문관리</h3>
                </div>

                <div className={style.orderManagementBox}>
                    <div className={style.totalList}>
                        <div className={style.totalBox}>
                            <p className={style.totalTitle}>총 주문수</p>
                            <p className={style.totalCount} id="total-count">0</p>
                        </div>
                        <div className={style.totalBox}>
                            <p className={style.totalTitle}>상품 준비중</p>
                            <p className={style.totalCount} id="ready-count">0</p>
                        </div>
                        <div className={style.totalBox}>
                            <p className={style.totalTitle}>상품 배송중</p>
                            <p className={style.totalCount} id="delivery-count">0</p>
                        </div>
                        <div className={style.totalBox}>
                            <p className={style.totalTitle}>배송완료</p>
                            <p className={style.totalCount} id="end-count">0</p>
                        </div>
                    </div>
                    
                    <div className={style.ordersInfo}>
                        <div className={`${style.ordersInfoRow} ${style.ordersInfoTitle}`}>
                            <div className={style.ordersInfoColumn}><p>날짜</p></div>
                            <div className={style.ordersInfoColumn}><p>주문정보</p></div>
                            <div className={style.ordersInfoColumn}><p>주문총액</p></div>
                            <div className={style.ordersInfoColumn}><p>상태관리</p></div>
                            <div className={style.ordersInfoColumn}><p>취소</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default AdminOrderManagement;

async function callOrderApi(){
    // const data = {
    //     orderId: '1',
    //     productId: '33',
    //     quantity: 2,
    //     totalPrice: 15000
    // }
    // const data = {
    //     userId : "636c7ad0efac70dd96963f78",
    //     summaryTitle : '소제목',
    //     totalPrice : 15000,
    //     address : {
    //         postalCode: '우편번호',
    //         address1: '주소1',
    //         address2: '주소2',
    //         receiverName: '사람이름',
    //         receiverPhoneNumber: '전화번호',
    //     },
    //     request : '얜뭥미'
    // }
    // // await Api.post('/api/orderitem/orderitem',data)
    // await Api.post('/api/order/order',data)
    const orderApi = await Api.get("/api/orderitem/orderitemlist/all")
    const ordersBox = document.querySelector('.orders-info')
    const totalCount = document.querySelector(`#total-count`)
    const readyCount = document.querySelector(`#ready-count`)
    const deliveryCount = document.querySelector(`#delivery-count`)
    const endCount = document.querySelector(`#end-count`)

    for(let i=1;i<orderApi.length;i++){
        const order = orderApi[i]
        
        
        
        
        
        ordersBox.innerHTML += `<div className="orders-info__row">
        <div className={style.ordersInfoColumn}>${i}</div>
        <div className={style.ordersInfoColumn}>${order.productName} / ${order.quantity}개</div>
        <div className={style.ordersInfoColumn}>${(Number(order.quantity)*Number(order.price)).toLocaleString('ko-KR')}</div>
        <div className={style.ordersInfoColumn}>
            <select id="status_box_${order.orderId}" className="orders-info__column shipment-select">
                <option value="상품 준비중" ${order.status === "상품 준비중" ? "selected" : ""} >상품 준비중</option>
                <option value="상품 배송중" ${order.status === "상품 배송중" ? "selected" : ""} >상품 배송중</option>
                <option value="배송 완료" ${order.status === "배송 완료" ? "selected" : ""} >배송 완료</option>
            </select>
        </div>
        <div className={style.ordersInfoColumn}>
            <button type="button" className="order-cancel__btn" id="order-cancel__btn_${order.orderId}">주문취소</button>
        </div>
    </div>`

    if(order.status==='상품 준비중'){
        readyCount.innerHTML = Number(readyCount.innerHTML) + 1;
    }
    else if(order.status==='상품 배송중'){
        deliveryCount.innerHTML = Number(deliveryCount.innerHTML) + 1;
    }
    else if(order.status==='배송 완료'){
        endCount.innerHTML = Number(endCount.innerHTML) + 1;
    }
    totalCount.innerHTML = Number(totalCount.innerHTML) + 1;

    const statusBox = document.querySelector(`#status_box_${order.orderId}`)
    statusBox.addEventListener("change", async () => {
        // const statusBox = document.querySelector(`#status_box_${order.orderId}`)
        const newStatus = statusBox.value;
        const data = { status: newStatus };
  
        // api 요청
        await Api.patch(`/api/orderitem/orderitems/${order.orderId}`, order.orderId, data);
      })
    const cancleBtn = document.querySelector(`#order-cancel__btn_${order.orderId}`)
    cancleBtn.addEventListener('click', async ()=>await Api.delete(`/api/orderitem/orderitems/${order.orderId}`,order.orderId))
    }


}
callOrderApi()