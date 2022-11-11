import * as Api from "../api.js"

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
    const {  _id, productName, amount, price, image } = product

    cartProductsContainer.insertAdjacentHTML("beforeend", 
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
              class="minus-btn"  
                  id="minus-btn-${_id}" 
              >
                  <i class="fa-solid fa-circle-minus"></i>
              </button>
              <input
                  class="count-number"
                  id="amount-${_id}"
                  value="${amount}"
              />
              <button 
                  type="button" 
                  class="plus-btn"
                  id="plus-btn-${_id}"
              >
                  <i class="fa-solid fa-circle-plus"></i>
              </button>
          </div>
          
          <p class="product-price" id="product-price-${_id}">${(price*amount)}</p>
          <button type="button" class="deleteBtn" id="delete-btn-${_id}"><i class="fa-solid fa-x"></i></button>
          </div>`
    )

    const plusBtn = document.querySelector(`#plus-btn-${_id}`)
    const minusBtn = document.querySelector(`#minus-btn-${_id}`)
    const amountValue = document.querySelector(`#amount-${_id}`)
    const productPrice = document.querySelector(`#product-price-${_id}`)
    const deleteBtn = document.querySelector(`#delete-btn-${_id}`)
    const productItem = document.querySelector(`#productItem-${_id}`)
    
    plusBtn.addEventListener('click',()=>{
        amountValue.value = Number(amountValue.value)+1;
        productPrice.innerHTML = (price * Number(amountValue.value))
    });

    minusBtn.addEventListener('click',()=>{
        amountValue.value = Number(amountValue.value)-1;
        productPrice.innerHTML = (price * Number(amountValue.value)).toLocaleString('ko-KR')
    });

    deleteBtn.addEventListener('click', () => {
        const key = localStorage.key(_id)
        localStorage.removeItem(key);
        productItem.remove();
        console.log(key)
    })

    const orderTotal = document.querySelector('#orderTotal')
    const purchaseButton = document.querySelector("#purchaseButton");
    purchaseButton.addEventListener("click", () => {
        for(let i = 1; i <= localStorage.length; i++){
            const data = JSON.parse(localStorage.getItem(String(i)));
            data.price = String(productPrice.innerHTML)
            data.amount = String(amountValue.value);
            console.log(data)
            
            localStorage.setItem(i, JSON.stringify(data))
        }
        return location.href = "/order/order.html";
    });

  });

    //const checkbox = document.querySelector(`checkbox-${_id}`)
    const allSelectCheckbox = document.querySelector("#allSelectCheckbox");
    const allDeleteBtn = document.querySelector("#allDeleteBtn");
    const selectDeleteBtn = document.querySelector("#selectDeleteBtn");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    
    allSelectCheckbox.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = allSelectCheckbox.checked
          });
    });

    // checkedboxes.addEventListener("click", () => {
    //     if(allSelectCheckbox.length === checkedboxes.length)  {
    //         allSelectCheckbox.checked = true;
    //       }else {
    //         allSelectCheckbox.checked = false;
    //       }
    // });

    allDeleteBtn.addEventListener("click", () => {

    });

    selectDeleteBtn.addEventListener("click", () => {

    });

    

     //    const data = JSON.parse(localStorage.getItem("1"));
    //    console.log(data.price)

        //
  
}

insertProductsfromCart();

