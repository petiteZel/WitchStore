import * as Api from "../../api.js";

const ordersContainer = document.querySelector('#ordersContainer');
const sumPrice = document.querySelector('#sum-price');
const orderInfo = document.querySelector('#orderInfo')

InsertOrderData();

const orderData = await Api.get("/api/order/orderlist/user");
const { userId, totalPrice, address, createdAt, status, updateAt, __v, _id} = orderData;

console.log(orderData)

async function InsertOrderData(){

    orderInfo.insertAdjacentHTML("beforeend", `
        <p class="name" id="name">${receiverName}</p>
        <p class="phon-number" id="phon-number">${receiverPhoneNumber}</p>
        <p class="adress" id="address">${receiverAddress}</p>
    `);
}





// const { } = orderData;

// async function insertProductsfromOder(){
//   const localLength = localStorage.length;
//   const orders = []

//   for(let i=1;i<localLength+1;i++){
//     if(localStorage.getItem(String(i))){
//         orders.push(JSON.parse(localStorage.getItem(String(i))))
//     }
//   }

//   const orderPrice = []
//   for(let i=0; i<localLength ;i++){
//           orderPrice.push(orders[i].price)
//   }

//   const total = (orderPrice.reduce((n1, n2) => n1 + n2))
//   productsTotal.innerHTML = total.toLocaleString("ko-KR");
//   orderTotal.innerHTML = (total+3000).toLocaleString("ko-KR");
  
//   orders.forEach(async (product) => {
//     const {  _id, productName, amount, price, image } = product;

//     productsTitle.insertAdjacentHTML("beforeend", `<p class="product" >${productName} / ${amount}</p>`);
//   });
// };