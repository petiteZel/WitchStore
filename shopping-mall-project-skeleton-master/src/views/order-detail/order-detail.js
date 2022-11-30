import * as Api from "../../api.js";

const orderInfo = document.querySelector('#orderInfo');
const orderItemInfo = document.querySelector('#ordersContainer');
const sumPrice = document.querySelector('#sum-price');
const cancleBtn = document.querySelector('#cancle_btn');


InsertOrderItemData();
InsertOrderData();

async function InsertOrderItemData(){
    const orderId1 = sessionStorage.getItem("orderId1")
    const orderitemData = await Api.get("/api/orderitemlist");

    const currOrderItem = orderitemData.filter((e)=>{
        return e.orderId == orderId1
    })
    console.log(currOrderItem)

    const products = await Api.get("/api/product");
    let realSum = 0;
    currOrderItem.forEach((e)=>{
        console.log(e.productId)
        const findItem = products.filter((item)=>{return item._id == e.productId})
        orderItemInfo.insertAdjacentHTML("beforeend", `
    <div class="order-product" id="productItem-{_id}">
    <figure class="product-img">
        <img id="image-{_id}" src="${findItem[0].image}"alt="product-image"/>
    </figure>

    <p class="product-name" id="title-{_id}">${findItem[0].productName}</p>
    <p class="count-number" id="quantityInput-{_id}">${e.quantity}</p>
    <p class="product-price" id="total-{_id}">${e.totalPrice}원</p>
    </div>   
    `);
        realSum += e.totalPrice
        sumPrice.innerHTML = realSum.toLocaleString("ko-KR");
    })
}

async function InsertOrderData(){
    const orderId1 = sessionStorage.getItem("orderId1")
    const orderData = await Api.get(`/api/orders/${orderId1}`);
    const { userId, totalPrice, address, createdAt, status, updateAt, __v, _id} = orderData;
    console.log(orderData)

    orderInfo.insertAdjacentHTML("beforeend", `
        <p class="name" id="name">${orderData.address.receiverName}</p>
        <p class="phon-number" id="phon-number">${orderData.address.receiverPhoneNumber}</p>
        <p class="adress" id="address">${orderData.address.receiverAddress}</p>`);
}

cancleBtn.addEventListener("click", () => {
    if(confirm("주문을 취소하시겠습니까?")){
        localStorage.clear();
        sessionStorage.removeItem('orderId1');
        sessionStorage.removeItem('orderId2');
        window.location.reload();
    }
})

