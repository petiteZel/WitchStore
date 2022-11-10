import * as Api from "../api.js"

const allSelectCheckbox = document.querySelector("#allSelectCheckbox");
const partialDeleteLabel = document.querySelector("#partialDeleteLabel");
const orderTotalElem = document.querySelector("#orderTotal");

async function insertProductsfromCart(){
  const localLength = localStorage.length;
  const orders = []
  for(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
  }
  
  const cartProductsContainer = document.querySelector("#cartProductsContainer");
  orders.forEach(async (product) => {
      const {
        _id,
        productName,
        amount,
        price,
        image,
      } = product

      cartProductsContainer.innerHTML += 
        `<div class="cart-product" id="productItem-${_id}">
          <label class="checkbox select-btn" >
              <input type="checkbox" id="checkbox-${_id}" />
          </label>
          <figure class="product-img">
              <img id="image-${_id}" src=${image} alt="product-image"/>
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
                  value="${amount}"
              />
              <button 
                  type="button" 
                  class="plus-btn"
                  id="plus-btn"
              >
                  <i class="fa-solid fa-circle-plus"></i>
              </button>
          </div>
          
          <p class="product-price" id="product-price">${(price*amount).toLocaleString('ko-KR')}</p>
          <button type="button" class="deleteBtn" id="delete-btn"><i class="fa-solid fa-x"></i></button>
          </div>`

    const plusBtn = document.querySelector('#plus-btn')
    const minusBtn = document.querySelector('#minus-btn')
    const amountTxt = document.querySelector('#amount')
    const productPrice = document.querySelector('#product-price')
    const orderTotal = document.querySelector('#orderTotal')

  
    plusBtn.addEventListener('click',()=>{
        amountTxt.value = Number(amountTxt.value)+1;
        productPrice.innerHTML = (price * Number(amountTxt.value)).toLocaleString('ko-KR')
    });

    minusBtn.addEventListener('click',()=>{
        amountTxt.value = Number(amountTxt.value)-1;
        productPrice.innerHTML = (price * Number(amountTxt.value)).toLocaleString('ko-KR')
    });
  });

  const purchaseButton = document.querySelector("#purchaseButton");
  purchaseButton.addEventListener("click", () => {
    return location.href = "/order/order.html";
  });
  
}

insertProductsfromCart();

