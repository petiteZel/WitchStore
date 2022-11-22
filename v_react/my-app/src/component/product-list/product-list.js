import * as Api from "../api.js";

import React from "react";
import style from "./product-list.module.css"
import SideBar from '../side-bar/side-bar';

function ProductList() {
  return(
    <div className={style.containerBox}>
      <div className={`${style.brandTitle} ${style.en}`}><a className={style.brandLogo} href='/'>THE WITCH STORE</a></div>

      <div className={style.container}>
        <SideBar />
        
        {/* <!-- db 받아와야함 --> */}
        <div className={style.productList}>

          <div className={style.category}></div>
          
          <div className={style.productItemContainer}>


            {/*  */}
            <div className={style.productItem}>
              <a href="/product-detail/?id=productName">
                <div className={style.productItemImg}><img src='https://witchstore-item.s3.ap-northeast-2.amazonaws.com/defuser/defuser_1.png' alt='productImage' /></div>
                <div className={style.productItemInfo}>
                  <div className={style.productItemName}>productName</div>
                  <div className={style.productItemPrice}>price</div>
                </div>
              </a>
            </div>
            <div className={style.productItem}>
              <a href="/product-detail/?id=productName">
                <div className={style.productItemImg}><img src='https://witchstore-item.s3.ap-northeast-2.amazonaws.com/defuser/defuser_1.png' alt='productImage'/></div>
                <div className={style.productItemInfo}>
                  <div className={style.productItemName}>productName</div>
                  <div className={style.productItemPrice}>price</div>
                </div>
              </a>
            </div>
            <div className={style.productItem}>
              <a href="/product-detail/?id=productName">
                <div className={style.productItemImg}><img src='https://witchstore-item.s3.ap-northeast-2.amazonaws.com/defuser/defuser_1.png' alt='productImage'/></div>
                <div className={style.productItemInfo}>
                  <div className={style.productItemName}>productName</div>
                  <div className={style.productItemPrice}>price</div>
                </div>
              </a>
            </div>
            <div className={style.productItem}>
              <a href="/product-detail/?id=productName">
                <div className={style.productItemImg}><img src='https://witchstore-item.s3.ap-northeast-2.amazonaws.com/defuser/defuser_1.png' alt='productImage'/></div>
                <div className={style.productItemInfo}>
                  <div className={style.productItemName}>productName</div>
                  <div className={style.productItemPrice}>price</div>
                </div>
              </a>
            </div>
            {/*  */}
          </div>


        </div>
      </div>
      </div>
  )
}

export default ProductList;

async function productList() {
  const productContainer = document.querySelector(".product-item-container");
  const products = Api.get('/api/product')
  const urlSearch = new URLSearchParams(window.location.search);
  const categoryId = urlSearch.get("category");
  const typeId = urlSearch.get("personType");
  console.log(typeId)

  const category = document.querySelector('.category')
  
  const rending = async (pro) =>{
    pro.forEach(async (product) => {
      const {
        _id,
        category,
        brand,
        productName,
        image,
        price,
        description,
        personType,
      } = product;
      productContainer.innerHTML += `<div className="productItem">
                <a href="../product-detail/product-detail.html?productId=${_id}">
                  <div className="productItemImg"><img src="${image}" /></div>
                  <div className="productItemInfo">
                  <div className="productItemName">${productName}</div>
                    <div className="productItemPrice">${price}</div>
                  </div>
                  </a>
                  </div>`;
    });
  }
  

  if(categoryId){
    const categoryProducts = []
    products.forEach(product=>{
      if(product.category==categoryId){
        categoryProducts.push(product)
      }
    })
    rending(categoryProducts)
    category.innerHTML = `<h2>${categoryId}</h2>`
  }
  if(typeId){
    const typeProducts = []
    products.forEach(product=>{
      if(product.personType==typeId){
        typeProducts.push(product)
      }
    })
    rending(typeProducts)
    category.innerHTML = `<h2>${typeId}</h2>`
  }
  if(!typeId && !categoryId){
    rending(products)
    category.innerHTML = `<h2>All</h2>`
  }

}

async function sidBar(){
  try{
    const api = await Api.get('/api/category/categories')
    api.forEach((e)=>{
      const categories = document.querySelector('#submenu1')
      categories.innerHTML += `<li><a href="/product-list/product.html?category=${e.categoryName}">${e.categoryName}</a></li>`
    })
  }catch(err){
    alert(err.message)
  }
};

// setTimeout(()=>sidBar(),500)

// try{
//   productList();
// }catch(err){
//   alert('불러오기: ',err.message)
// }
