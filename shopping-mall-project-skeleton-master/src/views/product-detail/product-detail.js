import * as Api from "../api.js"
import {products} from "../product-list/product-data.js"

// const user = require('../../db/models/user-model')
// console.log(user)

function cartIn(key, value){
    localStorage.setItem(key, value)
    if(confirm("장바구니로 이동하시겠습니까?")){
        location.href='/shopping-mall-project-skeleton-master/src/views/shopping-cart/shopping-cart.html'
    }
}

async function productDetail(){

    const detailContainer = document.querySelector('.detail-item-container');
    const urlSearch = new URLSearchParams(location.search);
    const itemId = urlSearch.get("id")
    
    // const products = await Api.get('url')
    
    function findData(it,itemId){
        return it.id==itemId;
    }
    
    const selectItem = products.find(e=>findData(e,itemId))
    const {
        id,
        category,
        brand,
        productName,
        image,
        price,
        description,
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
    <div class="info-title">설명</div>
    <div class="info-content">
    ${description}
    </div>
    </div>
    </div>
    
    <div class="item-info">
      <div class="info-box" id="item-price">
        <div class="info-title">가격</div>
        <div class="info-content">${price}</div>
        
        <div class="count">
        <button class="plus-btn">
            <i class="fa-solid fa-circle-plus"></i>
            </button>
            <div id="count-number">0</div>
            <button class="minus-btn">
            <i class="fa-solid fa-circle-minus"></i>
            </button>
        </div>
        </div>
    </div>
    
    <div class="item-info">
    <div class="info-box" id="total-price">
    <div class="info-title">합계</div>
    <div class="info-content">36,000</div>
    </div>
    </div>
    
    <div class="cart-btn-box">
    <button class="cart-btn" onclick="${()=>cartIn(id,selectItem)}">장바구니 담기</button>
    </div>
    </div>`
    
}

productDetail();
