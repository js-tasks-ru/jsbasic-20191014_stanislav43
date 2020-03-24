//import { ConsoleReporter } from "jasmine";

class ProductList {
  productsUrl = "/assets/data/products.json";
  productsStoreKey = "cart-products";

  constructor(element) {
    this.el = element;
    this.el.innerHTML = `
      <div class="row justify-content-end">
      <div class="col-lg-9">
          <h3 class="section-title">Top Recommendations for You</h3>
         <div class="row homepage-cards">
              <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
          </div>
      </div>
      </div>
    `;
  } //конструктор

  show() {
    //Всю логику с запросом и отрисовкой, нужно поместить в метод `show()`, этот метод должен вернуть промис от отрисовки.
    const cardsInsert = this.el.querySelector(".row.homepage-cards");
    let cards = fetch(this.productsUrl)
      .then(response => response.json())
      .then(data => {
        //console.log("Начинаем! Состав данных по каждому товару: ", data);
        data.map(item => {
          let starsAllElem = "";
          let starElem = "<i class='icon-star'></i>\r\n";
          let starCheckedElem = "<i class='icon-star checked'></i>\r\n";
          if (item.rating != null) {
            for (let i = 0; i < 5; i++) {
              if (item.rating.stars === 0) {
                starsAllElem += starElem;
              } else {
                item.rating.stars -= 1;
                starsAllElem += starCheckedElem;
              }
            }
          } else {
            for (let i = 0; i < 5; i++) {
              starsAllElem += "<i class='icon-star'></i>\r\n";
            }
          }
          cardsInsert.innerHTML += `<div data-product-id=${
            item.id
          } class="products-list-product col-md-6 col-lg-4 mb-4">
            <div class="card">
                <div class="card-img-wrap">
                    <img class="card-img-top" src=${
                      item.imageUrl
                    } alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <div class="rate">
                        ${starsAllElem}
                    <span class="rate-amount ml-2">${
                      item.rating == null ? 0 : item.rating.reviewsAmount
                    }</span>
                    </div> 
                ${
                  item.oldPrice == null
                    ? "<p class='card-text price-text'><strong>" +
                      item.price +
                      "</strong></p>"
                    : "<p class='card-text price-text discount'><strong>" +
                      item.price +
                      "</strong><small class='ml-2'>" +
                      item.oldPrice +
                      "</small></p>"
                }
            <button class="product-add-to-cart" data-button-role="add-to-cart">
             Add to cart
            </button>
         </div>
        </div>
     </div>`;
        }); //data.map
        //Добавление в корзину!!!
        let productToCart = [];
        let buttonAddToCart = this.el.querySelectorAll(".product-add-to-cart"); //кнопок много!!!
        for (let i = 0; i < buttonAddToCart.length; i++) {
          buttonAddToCart[i].addEventListener("click", event => {
            let productId = event.target.closest(".products-list-product")
              .dataset.productId;
            if (
              !confirm("Вы уверенны, что хотите добавить этот товар в корзину?")
            ) {
            } else {
              if (!productToCart.includes(productId)) {
                productToCart.push(productId);
                localStorage.setItem(
                  this.productsStoreKey,
                  JSON.stringify(productToCart)
                );
              }
              console.log(`Товары в корзине: ${localStorage["cart-products"]}`);
            }
          }); //event
        }
      }); //then data
  } // show
} //класс

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
