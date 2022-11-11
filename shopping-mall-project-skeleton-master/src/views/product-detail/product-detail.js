import * as Api from "../api.js"

async function productDetail(){
    const products = await Api.get('/api/product');
    const detailContainer = document.querySelector('.detail-item-container');
    const urlSearch = new URLSearchParams(location.search);
    const itemId = urlSearch.get("productId")
    
    function findData(it,itemId){
        return it._id==itemId;
    }
    
    const selectItem = products.find(e=>findData(e,itemId))

    const {
        _id,
        category,
        brand,
        productName,
        image,
        price,
        shortDescription,
        detailDescription,
        personType,
    } = selectItem
    
    detailContainer.innerHTML = `<div class="detail-item-img">
    <img src="${image}" />
  </div>
  <div class="detail-item-info">
    <div class="store"><h3>${brand}</h3></div>
    
    <div class="item-info">
        <div class="info-box" id="item-name">
            <div class="info-title">상품명</div>
            <div class="info-content">${productName}</div>
        </div>

        <div class="info-box" id="item-info-detail">
            <div class="info-title">한 줄 소개</div>
            <div class="info-content">
                ${shortDescription}
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">상세 설명</div>
            <div class="info-content">
                ${detailDescription}
            </div>
        </div>
    </div>
    
    <div class="item-info">
        <div class="info-box" id="item-price">
            <div class="info-title">가격</div>
            <div class="info-content">${price.toLocaleString('ko-KR')}</div>
        
            <div class="count">
                <button class="plus-btn">
                    <i class="fa-solid fa-circle-plus" id='plus'></i>
                    </button>
                    <div id="count-number"> 0 </div>
                    <button class="minus-btn">
                    <i class="fa-solid fa-circle-minus"></i>
                </button>
            </div>
        </div>
    </div>
    
    <div class="item-info">
        <div class="info-box" id="total-price">
            <div class="info-title">합계</div>
            <div class="info-content total-price"> 0 </div>
        </div>
    </div>
    
    <div class="cart-btn-box">
        <button class="cart-btn">장바구니 담기</button>
    </div>`

    const cartBtn = document.querySelector('.cart-btn')
    const plusBtn = document.querySelector('.plus-btn')
    const minusBtn = document.querySelector('.minus-btn')
    const amount = document.querySelector('#count-number')
    const totalPrice = document.querySelector('.total-price')

    if (amount.innerHTML == 0){
        minusBtn.disabled = true;
        // cartBtn.disabled = true;
    }
    
    plusBtn.addEventListener('click',()=>{
        if(amount.innerHTML==0){
            minusBtn.disabled=false;
            // cartBtn.disabled=false;
        }
        amount.innerHTML = Number(amount.innerHTML)+1;
        totalPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString('ko-KR')
    })
    minusBtn.addEventListener('click',()=>{
        if(amount.innerHTML==1){
            minusBtn.disabled = true;
            // cartBtn.disabled = true;
        }
        amount.innerHTML = Number(amount.innerHTML)-1;
        totalPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString('ko-KR')
    })
    cartBtn.addEventListener('click',()=>cartIn(selectItem,amount.innerHTML))
    
}



function cartIn(selectItem,amountText){

    const {
        _id,
        category,
        brand,
        productName,
        image,
        price,
        description,
        personType,
    } = selectItem

    const amount = Number(amountText);
    
    
    let index = 0;
    let isSame = false;
    let localCount = 0;
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            if (Number(index) < Number(localStorage.key(i))) {
                index = localStorage.key(i);
                const cartItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (
                    JSON.stringify(cartItem._id) == JSON.stringify(_id)) {
                isSame = true;
                localCount = cartItem.amount;
                break;
            }
            }
        }
    }
    if (isSame == true) {
    var value = {
        _id: _id,
        image: image,
        productName: productName,
        amount: localCount + amount,
        price: price,
    };
} else {
    index = Number(index) + 1;
    value = {
        _id: _id,
        image: image,
        productName: productName,
        amount: amount,
        price: price,
    };
}

if (amount ===0){

        alert(`물건을 수량을 선택해주세요`)
    }else{
        localStorage.setItem(index, JSON.stringify(value)); 
        if(confirm("장바구니로 이동하시겠습니까?")){
            location.href='/cart/cart.html'
        }
    }
}

async function sidBar(){
    const api = await Api.get('/api/category/categories')
    api.forEach((e)=>{
        const categories = document.querySelector('#submenu1')
        categories.innerHTML += `<li><a href="/product-list/product.html?category=${e.categoryName}">${e.categoryName}</a></li>`
    })
    
};



productDetail();
sidBar();