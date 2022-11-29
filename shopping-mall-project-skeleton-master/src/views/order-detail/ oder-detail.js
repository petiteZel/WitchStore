import * as Api from "../../api.js";

const ordersContainer = document.querySelector('#ordersContainer');
const sumPrice = document.querySelector('#sum-price');
const name = document.querySelector("#name");
const phoneNumber = document.querySelector("#phon-number");
const address = document.querySelector("#address");

const orderData = await Api.get("/api/orderlist/user");
console.log(orderData);
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