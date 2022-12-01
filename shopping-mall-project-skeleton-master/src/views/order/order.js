import * as Api from "../api.js"
import { convertToNumber } from "../useful-functions.js"

const name = document.querySelector('#receiverName');
const phone= document.querySelector('#receiverPhoneNumber');
const address = document.querySelector('#address');
const productsTitle = document.querySelector("#productsTitle")
const productsTotal = document.querySelector("#productsTotal")
const orderTotal = document.querySelector("#total")
const paymentButton = document.querySelector('#paymentButton');

const userData = await Api.get("/api/user");
const { fullName, email, address1,  phoneNumber } = userData;

const localLength = localStorage.length;
const orders = []
for(let i=1;i<localLength+1;i++){
  if(localStorage.getItem(String(i))){
      orders.push(JSON.parse(localStorage.getItem(String(i))))
  }
}

addAllElements()
addAllEvents()

function addAllElements() {
  insertProductsfromOder();
  insertUserData();
}

function addAllEvents() {
  paymentButton.addEventListener("click", orderInfoSubmit);
};

async function insertProductsfromOder(){

  const orderPrice = []
  for(let i=0; i<localLength ;i++){
          orderPrice.push((orders[i].price*orders[i].amount))
  }

  const total = (orderPrice.reduce((n1, n2) => n1 + n2))
  productsTotal.innerHTML = total.toLocaleString("ko-KR");
  orderTotal.innerHTML = (total+3000).toLocaleString("ko-KR");
  
  orders.forEach(async (product) => {
    const {  _id, productName, amount, price, image } = product;

    productsTitle.insertAdjacentHTML("beforeend", `<p class="product" >${productName} / ${amount}</p>`);
  });
};

async function insertUserData() {
  name.value = fullName || "";
  phone.value = phoneNumber || "";
  address.value = address1 || "";
};

async function orderInfoSubmit(){
  //submit order
  const userId = userData._id
  const receiverName = name.value;
  const receiverPhoneNumber = phone.value;
  const receiverAddress = address.value;
  const totalPrice = convertToNumber(orderTotal.innerHTML)

  const data1 = { 
    userId, 
    totalPrice, 
    address: {
      receiverName,
      receiverPhoneNumber,
      receiverAddress
    }
  }

  try {
    const orderId1 = await Api.post("/api/order", data1);
    sessionStorage.setItem("orderId1", orderId1._id)
    alert(`정상적으로 주문이 완료되었습니다.`);

  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }

  orders.forEach(async (e)=>{
    try{
      const orderId = sessionStorage.getItem("orderId1")
      const productId = e._id;
      const quantity = e.amount;
      const totalPrice = e.amount * e.price;
      const data2 = {
        orderId,
        productId,
        quantity,
        totalPrice
      }
      const orderId2 = await Api.post("/api/orderitem", data2);
    }catch (err) {
      console.error(err.stack);
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
  })
      window.location.href = "/finish-shopping/finish-shopping.html";

};

