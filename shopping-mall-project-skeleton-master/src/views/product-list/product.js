import * as Api from "../api.js";


async function addProductList() {
  const productContainer = document.querySelector(".product-item-container");
  const urlSerch = new URLSearchParams(location.search);
  const categoryId = urlSerch.get("category");
  const typeId = urlSerch.get("type");
  
  // 질문1 함수 안에 함수 괜찮나요??
  const rending = async (pro) =>{
    pro.forEach(async (product) => {
      const {
        id,
        category,
        brand,
        productName,
        image,
        price,
        description,
        type,
      } = product;
  
      productContainer.innerHTML += `<div class="product-item">
                <a href="./product-detail.html">
                  <div class="product-item-img"><img src="${image}" /></div>
                  <div class="product-item-info">
                    <div class="product-item-name">${productName}</div>
                    <div class="product-item-price">${price}</div>
                  </div>
                  </a>
                  </div>`;
    });
  }
  // const products = await Api.get('url')
  
  const products = [
    {
      id: 1,
      category: "인형",
      brand: "WitchA",
      productName: "재인 인형",
      image: "",
      price: "18000",
      description: "어쩌구 저쩌구 훌라 훌라 훌라 나는야~~ 멋진 토마토 빰빰@!",
      type: "A",
    },
    {
      id: 2,
      category: "인형",
      brand: "WitchA",
      productName: "갑열 인형",
      image: "",
      price: "18000",
      description: "어쩌구 저쩌구 훌라 훌라 훌라 나는야~~ 멋진 토마토 빰빰@!",
      type: "B",
    },
    {
      id: 3,
      category: "인형",
      brand: "WitchB",
      productName: "은비 인형",
      image: "",
      price: "18000",
      description: "어쩌구 저쩌구 훌라 훌라 훌라 나는야~~ 멋진 토마토 빰빰@!",
      type: "C",
    }
  ];

  if(categoryId){
    const filterProducts = products.filter(cat => cat.category===categoryId);
    rending(filterProducts)
  }else if(typeId){
    const filterProducts = products.filter(ty => ty.type===typeId);
    rending(filterProducts)
  }

}
addProductList();
