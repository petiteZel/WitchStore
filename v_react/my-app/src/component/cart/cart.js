import * as Api from "../api.js";
import React from "react";
import  style from "./cart.module.css"

function Cart(){
    return (
        <div className={style.center}>

            <div className={style.container}>
                <h3 className={style.cartTitle}>장바구니</h3>
                
                <div className={style.cartListBox} id="cartProductsContainer">
                     {/* 장바구니에 담긴 상품들의 html 요소(카드 형태)가 주입되는 곳 */}
                     <insertProductsfromCart />
                </div>

                <div className={style.cartEditBox}>
                    <div className={style.editBtns}>
                        <input type="checkbox" className={style.allCheck} id="allSelectCheckbox" />
                        <button type="button" className={style.allDeleteBtn} id="allDeleteBtn" >전체 삭제</button>
                        <button type="button" className={style.selectDeleteBtn} id="selectDeleteBtn">선택 삭제</button>
                    </div>
    
                    <div className={style.priceBox}>
                        <span className={style.priceTitle}>합계</span>
                        <span id="orderTotal"></span>
                    </div>
                </div>

            </div>
        <div className={style.orderBtnBox}>
            <button type="button" className={style.orderBtn} id="purchaseButton">주문하기</button>
        </div>
        
    </div>

    )
};

export default Cart;

localStorage.setItem('1', JSON.stringify({ image: "없음", productName: "인형", amount: 1, price: 18000})) ;

async function insertProductsfromCart(){

    const localLength = localStorage.length;
    const orders = []

    for(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
    }
  
    orders.forEach(async (product) => {
        const {  _id, productName, amount, price, image } = product

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
            // return location.href = "/order/order.html"; 지금 주석한거임.
        });

        return (
            <div className={style.cartProduct} id="productItem-${_id}">
                <div className={`${style.checkbox} ${style.selectBtn}`} >
                    <input type="checkbox" id="checkbox-${_id}" />
                </div>
                <div className={style.productImg}>
                    <img id="image-${_id}" /* src=${image} */ alt="product-image"/>
                </div>
                <p className={style.productName} id="title-${_id}">${productName}</p>
        
                <div className={style.countBox}>
                    <button 
                        className={style.minusBtn}
                        id="minus-btn-${_id}" 
                    >
                        <i className="fa-solid fa-circle-minus"></i>
                    </button>
                    <input
                        className={style.countNumber}
                        id="amount-${_id}"
                        value="${amount}"
                    />
                    <button 
                        type="button" 
                        className={style.plusBtn}
                        id="plus-btn-${_id}"
                    >
                        <i className="fa-solid fa-circle-plus"></i>
                    </button>
                </div>
                
                <p className={style.productPrice} id="product-price-${_id}">${(price*amount)}</p>
                <button type="button" className={style.deleteBtn} id="delete-btn-${_id}"><i className="fa-solid fa-x"></i></button>
            </div>
        )
    });   

    /*
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
    */
}


    


insertProductsfromCart();

