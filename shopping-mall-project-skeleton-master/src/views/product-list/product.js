const productContainer = document.querySelector(".product-item-container");
fetch("./product.json")
  .then((res) => res.json())
  .then((data) =>
    data.forEach((e) => {
      productContainer.innerHTML += `<div class="product-item">
            <a href="./product-detail.html">
              <div class="product-item-img"><img src="${e.image}" /></div>
              <div class="product-item-info">
                <div class="product-item-name">${e.productName}</div>
                <div class="product-item-price">${e.price}</div>
              </div>
              </a>
              </div>`;
    })
  );
