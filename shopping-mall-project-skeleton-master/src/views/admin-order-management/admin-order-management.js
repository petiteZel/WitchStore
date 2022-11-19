import * as Api from "../../api.js";


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
        
        
        
        
        
        ordersBox.innerHTML += `<div class="orders-info__row">
        <div class="orders-info__column">${i}</div>
        <div class="orders-info__column">${order.productName} / ${order.quantity}개</div>
        <div class="orders-info__column">${(Number(order.quantity)*Number(order.price)).toLocaleString('ko-KR')}</div>
        <div class="orders-info__column">
            <select id="status_box_${order.orderId}" class="orders-info__column shipment-select">
                <option value="상품 준비중" ${order.status === "상품 준비중" ? "selected" : ""} >상품 준비중</option>
                <option value="상품 배송중" ${order.status === "상품 배송중" ? "selected" : ""} >상품 배송중</option>
                <option value="배송 완료" ${order.status === "배송 완료" ? "selected" : ""} >배송 완료</option>
            </select>
        </div>
        <div class="orders-info__column">
            <button type="button" class="order-cancel__btn" id="order-cancel__btn_${order.orderId}">주문취소</button>
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