// import { orderService } from "../../services";
import * as Api from "../api.js"

async function insertProductsfromOder(){
  const localLength = localStorage.length;
  const orders = []

  for(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
  }
  
  const productsTitle = document.querySelector("#productsTitle")
  const productsTotal = document.querySelector("#productsTotal")
  const orderTotal = document.querySelector("#total")

  const orderPrice = []
  for(let i=0; i<localLength ;i++){
          orderPrice.push(orders[i].price)
  }
  const total = (orderPrice.reduce((n1, n2) => n1 + n2))
  productsTotal.innerHTML = total.toLocaleString("ko-KR");
  orderTotal.innerHTML = (total+3000).toLocaleString("ko-KR");
  
  orders.forEach(async (product) => {
    const {  _id, productName, amount, price, image } = product

    productsTitle.insertAdjacentHTML("beforeend", `<p class="product" >${productName} / ${amount}</p>`);

  });

  const checkoutButton = document.querySelector("#checkoutButton")

  checkoutButton.addEventListener('click', () => {

    try{
      orders.forEach((order) => {
        Api.post('/api/order/order', order);
        alert('성공')
      })
    }catch(err){
      alert(err);
    }
  });
  
}

insertProductsfromOder();