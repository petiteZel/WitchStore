import * as Api from "../api.js";
// import { products } from "./product-data.js"



async function productList() {
  const productContainer = document.querySelector(".product-item-container");
  const products = await Api.get('/api/product')
  const urlSearch = new URLSearchParams(location.search);
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
      productContainer.innerHTML += `<div class="product-item">
                <a href="../product-detail/product-detail.html?productId=${_id}">
                  <div class="product-item-img"><img src="${image}" /></div>
                  <div class="product-item-info">
                  <div class="product-item-name">${productName}</div>
                    <div class="product-item-price">${price}</div>
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

setTimeout(()=>sidBar(),500)

try{
  productList();
}catch(err){
  alert('불러오기: ',err.message)
}
