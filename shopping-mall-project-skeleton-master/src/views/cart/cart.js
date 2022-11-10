import * as Api from "../api.js"
import { orders } from "./cart-data.js";


const allSelectCheckbox = document.querySelector("#allSelectCheckbox");
const partialDeleteLabel = document.querySelector("#partialDeleteLabel");
const orderTotalElem = document.querySelector("#orderTotal");

async function insertProductsfromCart(){
  // const products = await getFromDb("cart");
  // const { selectedIds } = await getFromDb("order", "summary");
  const product = localStorage.getItem('value') 
  
  const cartProductsContainer = document.querySelector("#cartProductsContainer");
  const purchaseButton = document.querySelector("#purchaseButton");

  orders.forEach(async (product) => {
      const {
        _id,
        productName,
        quantity,
        totalPrice,
        img,
      } = product

      cartProductsContainer.innerHTML += 
        `<div class="cart-product" id="productItem-${_id}">
          <label class="checkbox select-btn" >
              <input type="checkbox" id="checkbox-${_id}" />
          </label>
          <figure class="product-img">
              <img id="image-${_id}" src=${img} alt="product-image"/>
          </figure>
          <p class="product-name" id="title-${_id}">${productName}</p>
  
          <div class="count-box">
              <button 
                  type="button" 
                  class="minus-btn"  
                  id="minus-btn" 
              >
                  <i class="fa-solid fa-circle-minus"></i>
              </button>
              <input
                  class="count-number"
                  id="amount"
                  value="${quantity}"
              />
              <button 
                  type="button" 
                  class="plus-btn"
                  id="plus-btn"
              >
                  <i class="fa-solid fa-circle-plus"></i>
              </button>
          </div>
          
          <p class="product-price" id="product-price"></p>
          <button type="button" class="deleteBtn" id="delete-btn"><i class="fa-solid fa-x"></i></button>
          </div>`

  const cartBtn = document.querySelector('.cart-btn')
  const plusBtn = document.querySelector('#plus-btn')
  const minusBtn = document.querySelector('#minus-btn')
  const amount = document.querySelector('#amount')
  const productPrice = document.querySelector('#product-price')

  
  plusBtn.addEventListener('click',()=>{
      amount.innerHTML = Number(amount.innerHTML)+1;
      productPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString('ko-KR')
  });

  minusBtn.addEventListener('click',()=>{
      amount.innerHTML = Number(amount.innerHTML)-1;
      productPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString('ko-KR')
  });
  cartBtn.addEventListener('click',()=>cartIn(selectItem,amount.innerHTML))
});

  purchaseButton.addEventListener("click", () => {
    return location.href = "/order/order.html";
  });
  
}

insertProductsfromCart();

