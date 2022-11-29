import * as Api from "../../api.js";


async function callOrderApi(){
    // // await Api.post('/api/orderitem/orderitem',data)
    // await Api.post('/api/order/order',data)
    try{
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
                <select id="${order._id}" class="orders-info__column shipment-select">
                    <option value="상품 준비중" ${order.status === "상품 준비중" ? "selected" : ""} >상품 준비중</option>
                    <option value="상품 배송중" ${order.status === "상품 배송중" ? "selected" : ""} >상품 배송중</option>
                    <option value="배송 완료" ${order.status === "배송 완료" ? "selected" : ""} >배송 완료</option>
                </select>
            </div>
            <div class="orders-info__column">
                <button type="button" class="order-cancel__btn" value="${order._id}">주문취소</button>
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

    }
    const statusBox = document.querySelectorAll(`.orders-info__column.shipment-select`)
    statusBox.forEach((select)=>{
        select.addEventListener("change", async () => {
            // const statusBox = document.querySelector(`#status_box_${order.orderId}`)
            const newStatus = select.value;
            const data = { status: newStatus };
    
            // api 요청
            await Api.patch(`/api/orderitem/orderitems`, select.id, data);
            alert(`배송정보가 변경되었습니다.`)
            location.reload()
        })  
    })
    const cancleBtn = document.querySelectorAll(`.order-cancel__btn`)
    cancleBtn.forEach(delBtn=>{
        delBtn.addEventListener('click',async ()=>{
            try{
                await Api.delete(`/api/orderitem/orderitems`,delBtn.value)
                alert(`상품정보가 삭제되었습니다.`)
                location.reload();
            }
            catch(err){
                alert(`err: ${err}`)
            }
        })
    })
}catch(err){
    alert(`error: ${err.message}`)
}

}
callOrderApi()