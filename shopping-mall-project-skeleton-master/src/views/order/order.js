// import * as Api from "../api.js"

async function insertProductsfromOder(){
  const localLength = localStorage.length;
  const orders = []

  for(let i=1;i<localLength+1;i++){
    if(localStorage.getItem(String(i))){
        orders.push(JSON.parse(localStorage.getItem(String(i))))
    }
  }
  
  const productsTitle = document.querySelector("#productsTitle")
  const productsTotal = document.querySelector("#productsTotal")
  const orderTotal = document.querySelector("#orderTotal")
  
  orders.forEach(async (product) => {
    const {  _id, productName, amount, price, image } = product

    productsTitle.insertAdjacentHTML("beforeend", `<p class="product" >${productName} / ${amount}</p>`);
    productsTotal.insertAdjacentHTML("beforeend", `<p>${price}</p>`);
  orderTotal.insertAdjacentHTML("beforeend", `<p class="total-price" >${Number(price)+3000}</p>`);
  });

  

  
}

insertProductsfromOder();