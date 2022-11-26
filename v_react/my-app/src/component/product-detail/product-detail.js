import * as Api from "../api.js";

import React from "react";
import style from "./product-detail.module.css";
import SideBar from "../side-bar/side-bar";

function ProductDetail() {

  return (
    <div className={style.containerBox}>
      <div className={`${style.brandTitle} ${style.en}`}>
        <a className={style.brandLogo} href="../home/home.html">
          THE WITCH STORE
        </a>
      </div>

      <div className={style.container}>
        <SideBar />

        <div className={style.productList}>
          <div className={style.detailItemContainer}>
            <div className={style.detailItemImg}>
                {/* {image db 불러오기} */}
              <img src="" alt="productImage" />
            </div>
            <div className={style.detailItemInfo}>
              <div className={style.store}>
                <h3>brand</h3>
              </div>

              <div className={style.itemInfo}>
                <div className={style.infoBox} id={style.itemName}>
                  <div className={style.infoTitle}>상품명</div>
                  <div className={style.infoContent}>productName</div>
                </div>

                <div className={style.infoBox} id={style.itemInfoDetail}>
                  <div className={style.infoTitle}>한 줄 소개</div>
                  <div className={style.infoContent}>shortDescription</div>
                </div>
                <div className={style.infoBox}>
                  <div className={style.infoTitle}>상세 설명</div>
                  <div className={style.infoContent}>detailDescription</div>
                </div>
              </div>

              <div className={style.itemInfo}>
                <div className={style.infoBox} id={style.itemPrice}>
                  <div className={style.infoTitle}>가격</div>
                  <div className={style.infoContent}>price</div>

                  <div className={style.count}>
                    <button className={style.minusBtn}>
                      <i className="fa-solid fa-circle-minus"></i>
                    </button>
                    <div id={style.countNumber}> 0 </div>
                    <button className={style.plusBtn}>
                      <i className="fa-solid fa-circle-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className={style.itemInfo}>
                <div className={style.infoBox} id={style.totalPrice}>
                  <div className={style.infoTitle}>합계</div>
                  <div className={`${style.infoContent} ${style.totalPrice}`}>
                    {" "}
                    0{" "}
                  </div>
                </div>
              </div>

              <div className={style.cartBtnBox}>
                <button className={style.cartBtn}>장바구니 담기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

async function rendingDetail() {
  const products = await Api.get("/api/product");
  const detailContainer = document.querySelector(".detailItemContainer");
  const urlSearch = new URLSearchParams(window.location.search);
  const itemId = urlSearch.get("productId");

  function findData(it, itemId) {
    return it._id == itemId;
  }

  const selectItem = products.find((e) => findData(e, itemId));

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
  } = selectItem;

  detailContainer.innerHTML = `<div className={style.detailItemImg}>
    <img src="${image}" />
  </div>
  <div className={style.detailItemInfo}>
    <div className={style.store}><h3>${brand}</h3></div>
    
    <div className={style.itemInfo}>
        <div className={style.infoBox} id={style.itemName}>
            <div className={style.infoTitle}>상품명</div>
            <div className={style.infoContent}>${productName}</div>
        </div>

        <div className={style.infoBox} id={style.itemInfoDetail}>
            <div className={style.infoTitle}>한 줄 소개</div>
            <div className={style.infoContent}>
                ${shortDescription}
            </div>
        </div>
        <div className={style.infoBox}>
            <div className={style.infoTitle}>상세 설명</div>
            <div className={style.infoContent}>
                ${detailDescription}
            </div>
        </div>
    </div>
    
    <div className={style.itemInfo}>
        <div className={style.infoBox} id={style.itemPrice}>
            <div className={style.infoTitle}>가격</div>
            <div className={style.infoContent}>${price.toLocaleString(
              "ko-KR"
            )}</div>
        
            <div className={style.count}>
                <button className={style.minusBtn}>
                    <i className="fa-solid faCircle-minus"></i>
                </button>
                <div id={style.countNumber}> 0 </div>
                <button className="plusBtn">
                    <i className="fa-solid faCirclePlus"></i>
                </button>
            </div>
        </div>
    </div>
    
    <div className={style.itemInfo}>
        <div className={style.infoBox} id={style.totalPrice}>
            <div className={style.infoTitle}>합계</div>
            <div className={${style.infoContent} ${style.totalPrice}}> 0 </div>
        </div>
    </div>
    
    <div className={style.cartBtnBox}>
        <button className={style.cartBtn}>장바구니 담기</button>
    </div>`;

  const cartBtn = document.querySelector(".cartBtn");
  const plusBtn = document.querySelector(".plusBtn");
  const minusBtn = document.querySelector(".minusBtn");
  const amount = document.querySelector("#countNumber");
  const totalPrice = document.querySelector(".totalPrice");

  if (amount.innerHTML == 0) {
    minusBtn.disabled = true;
    // cartBtn.disabled = true;
  }

  plusBtn.addEventListener("click", () => {
    if (amount.innerHTML == 0) {
      minusBtn.disabled = false;
      // cartBtn.disabled=false;
    }
    amount.innerHTML = Number(amount.innerHTML) + 1;
    totalPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString(
      "ko-KR"
    );
  });
  minusBtn.addEventListener("click", () => {
    if (amount.innerHTML == 1) {
      minusBtn.disabled = true;
      // cartBtn.disabled = true;
    }
    amount.innerHTML = Number(amount.innerHTML) - 1;
    totalPrice.innerHTML = (price * Number(amount.innerHTML)).toLocaleString(
      "ko-KR"
    );
  });
  cartBtn.addEventListener("click", () => cartIn(selectItem, amount.innerHTML));
}

function cartIn(selectItem, amountText) {
  const {
    _id,
    category,
    brand,
    productName,
    image,
    price,
    description,
    personType,
  } = selectItem;

  const amount = Number(amountText);

  let index = 0;
  let isSame = false;
  let localCount = 0;
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (Number(index) < Number(localStorage.key(i))) {
        index = localStorage.key(i);
        const cartItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (JSON.stringify(cartItem._id) == JSON.stringify(_id)) {
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

  if (amount === 0) {
    alert(`물건을 수량을 선택해주세요`);
  } else {
    localStorage.setItem(index, JSON.stringify(value));
    if (window.confirm("장바구니로 이동하시겠습니까?")) {
      window.location.href = "/cart/cart.html";
    }
  }
}

async function sidBar() {
  const api = await Api.get("/api/category/categories");
  api.forEach((e) => {
    const categories = document.querySelector("#submenu1");
    categories.innerHTML += `<li><a href="/product-list/product.html?category=${e.categoryName}">${e.categoryName}</a></li>`;
  });
}

// rendingDetail();
// sidBar();
