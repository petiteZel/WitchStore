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
  const localLength = localStorage.length;
  const orders = []

  for(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
  }

  const orderPrice = []
  for(let i=0; i<localLength ;i++){
          orderPrice.push(orders[i].price)
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

  // const data2 = {
  //   orderId,
  //   productId,
  //   quantity,
  //   totalPrice,
  // }

  try {
    await Api.post("/api/order", data1);
    alert(`정상적으로 주문이 완료되었습니다.`);

    window.location.href = "/finish-shopping/finish-shopping.html";
  } catch (err) {
    console.error(err.stack);
    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
};

