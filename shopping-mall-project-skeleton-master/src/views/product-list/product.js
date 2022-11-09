import * as Api from "../api.js";
// import { products } from "./product-data.js"



async function productList() {
  const productContainer = document.querySelector(".product-item-container");
  const products = await Api.get('/api/product')
  const urlSearch = new URLSearchParams(location.search);
  const categoryId = urlSearch.get("category");
  const typeId = urlSearch.get("type");
  console.log(products)
  
  // 질문1 함수 안에 함수 괜찮나요??
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
    const filterProducts = products.filter(cat => cat.category===categoryId);
    rending(filterProducts)
  }
  if(typeId){
    const filterProducts = products.filter(ty => ty.personType===typeId);
    rending(filterProducts)
    console.log(filterProducts)
  }
  if(!typeId && !categoryId){
    rending(products)
  }

}
productList();
