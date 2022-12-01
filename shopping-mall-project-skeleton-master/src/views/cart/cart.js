import * as Api from "../api.js"
import { convertToNumber } from "../useful-functions.js"

async function insertProductsfromCart(){
    const cartProductsContainer = document.querySelector("#cartProductsContainer");
    const localLength = localStorage.length;
    const orders = []
    const orderTotal = document.querySelector('#orderTotal')

    for(let i=1; i<localLength+1; i++){
        if(localStorage.getItem(String(i))){
            orders.push(JSON.parse(localStorage.getItem(String(i))))
        }
    }

    const orderPrice = []
    for(let i=0; i<localLength ;i++){
            orderPrice.push((orders[i].price*orders[i].amount))
    }
    const total = (orderPrice.reduce((n1, n2) => n1 + n2))
    orderTotal.innerHTML = total.toLocaleString('ko-KR')

    orders.forEach(async (product) => {
        const {  _id, productName, amount, price, image } = product

        cartProductsContainer.insertAdjacentHTML("beforeend", 
        `<div class="cart-product" id="productItem-${_id}">
            <label class="checkbox select-btn" >
                <input checked="true" type="checkbox" class="checkbox" id="checkbox-${_id}" />
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
                <div class="count-number" id="amount-${_id}">
                    ${amount}
                </div>
                <button 
                    type="button" 
                    class="plus-btn"
                    id="plus-btn-${_id}"
                >
                    <i class="fa-solid fa-circle-plus"></i>
                </button>
            </div>
            
            <p class="product-price" id="product-price-${_id}">${(price*amount).toLocaleString('ko-KR')}</p>
            <button type="button" class="deleteBtn" id="delete-btn-${_id}"><i class="fa-solid fa-x"></i></button>
            </div>`
        )

        const productItem = document.querySelector(`#productItem-${_id}`)
        const plusBtn = document.querySelector(`#plus-btn-${_id}`)
        const minusBtn = document.querySelector(`#minus-btn-${_id}`)
        const amountValue = document.querySelector(`#amount-${_id}`)
        const productPrice = document.querySelector(`#product-price-${_id}`)
        const deleteBtn = document.querySelector(`#delete-btn-${_id}`)

        plusBtn.addEventListener('click',()=>{
            amountValue.innerHTML = Number(amountValue.innerHTML)+1;
            productPrice.innerHTML = (price * Number(amountValue.innerHTML)).toLocaleString('ko-KR')
            orderTotal.innerHTML = (convertToNumber(orderTotal.innerHTML) + price).toLocaleString('ko-KR')
            
        });

        minusBtn.addEventListener('click',()=>{
            if(amountValue.innerHTML == 1){
                minusBtn.disabled = true;
                alert('최소 수량은 1개 입니다.')
            }else{
                amountValue.innerHTML = Number(amountValue.innerHTML)-1;
                productPrice.innerHTML = (price * Number(amountValue.innerHTML)).toLocaleString('ko-KR')
                orderTotal.innerHTML = (convertToNumber(orderTotal.innerHTML) - price).toLocaleString('ko-KR')
            }
        });

        deleteBtn.addEventListener('click', () => {
            const key = localStorage.key(_id)
            localStorage.removeItem(key);
            productItem.remove();
            orderTotal.innerHTML = (convertToNumber(orderTotal.innerHTML) - (price * Number(amountValue.innerHTML))).toLocaleString('ko-KR')
        })

        const checkbox = document.querySelector(`#checkbox-${_id}`)

        checkbox.addEventListener("click", () => {
            if(checkbox.checked == true){
                orderTotal.innerHTML = (convertToNumber(orderTotal.innerHTML) + (price * Number(amountValue.innerHTML))).toLocaleString('ko-KR')
            }else if(checkbox.checked == false){
                orderTotal.innerHTML = (convertToNumber(orderTotal.innerHTML) - (price * Number(amountValue.innerHTML))).toLocaleString('ko-KR')
            }
        })

        

    }); //forEach end

    const allSelectCheckbox = document.querySelector("#allSelectCheckbox");
    const allDeleteBtn = document.querySelector("#allDeleteBtn");
    const selectDeleteBtn = document.querySelector("#selectDeleteBtn");
    const checkboxes = document.querySelectorAll('.checkbox');
    const checkedboxes = document.querySelectorAll('input[type="checkbox"]:checked')
  
    allSelectCheckbox.checked = true;

    allSelectCheckbox.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = allSelectCheckbox.checked
        })
    });

    const id = []
    for(let i=0; i<localLength ;i++){
        id.push(orders[i]._id)
    }

    const purchaseButton = document.querySelector("#purchaseButton");

    purchaseButton.addEventListener("click", () => {
        id.forEach((id) => {
            const amountValue = document.querySelector(`#amount-${id}`)
            const productPrice = document.querySelector(`#product-price-${id}`)
            for(let i=0; i<orders.length ;i++){
                if(orders[i]._id == id){
                    // orders[i].price = convertToNumber(productPrice.innerHTML);
                    orders[i].amount = convertToNumber(amountValue.innerHTML);
                    localStorage.setItem(i+1, JSON.stringify(orders[i]));
                }
            }
        })
        return location.href = "/order/order.html";
    });

    
    allDeleteBtn.addEventListener("click", () => {

    });

    selectDeleteBtn.addEventListener("click", () => {

    });
  
}

insertProductsfromCart();

