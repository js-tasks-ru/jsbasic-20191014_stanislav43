"use strict";

class CheckoutProductList {
  productsStoreKey = "cart-products";

  constructor(parentElement) {
    this.el = parentElement;
    this.el.innerHTML = `
            <div class="product-list-box">
                <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
            </div>
      `;
    const product = JSON.parse(localStorage.getItem("cart-products"));
    this.renderProducts(product);
    this.el.addEventListener("click", event => this.onDelete(event, product));
  } //к конструктору
  onDelete(event, product) {
    if (
      event.target.dataset.buttonRole === "checkout-remove-product" &&
      confirm("Вы уверенны, что хотите удалить этот товар из корзины?")
    ) {
      let productCart = event.target.closest(".product-wrapper");
      let productId = +productCart.dataset.productId;
      productCart.remove();
      let updateCartProduct = product.filter(item => item.id != productId);
      localStorage.setItem(
        this.productsStoreKey,
        JSON.stringify(updateCartProduct)
      );
    }
  }
  renderProducts(data) {
    const cartInsert = this.el.querySelector(".product-list-box");
    data.forEach(item => {
      let starsAllElem = "";
      let starElem = "<i class='icon-star'></i>\r\n";
      let starCheckedElem = "<i class='icon-star checked'></i>\r\n";
      let stars = item.rating != null ? item.rating.stars : 0;
      if (item.rating != null) {
        for (let i = 0; i < 5; i++) {
          if (stars === 0) {
            starsAllElem += starElem;
          } else {
            stars -= 1;
            starsAllElem += starCheckedElem;
          }
        }
      } else {
        for (let i = 0; i < 5; i++) {
          starsAllElem += "<i class='icon-star'></i>\r\n";
        }
      }
      cartInsert.innerHTML += `
    <div data-product-id=${
      item.id
    } class="product-wrapper box-inner-col description-col">
  
  <div class="product-image-container">
    <img class="product-image" src=${item.imageUrl} alt="img">
  </div>
  
  <div class="product-description">
    <h4 class="col-title mb-2">${item.title}</h4>
    <div class="rate">
    ${starsAllElem}
    </div>
    <p class="rate-amount d-none d-md-block mt-1">${
      item.rating == null ? 0 : item.rating.reviewsAmount
    } reviews</p>
  </div>
  
  <div class="product-price">
    <p class="mb-0 font-weight-light">Price:</p>
    <h4 class="col-title price-text mb-2">${item.price}</h4>
  </div>
  
  <div class="product-remove-button-wrapper">
    <button type="button"
            data-button-role="checkout-remove-product"
            class="product-remove-button">
      X
    </button>
  </div>

</div>
`;
    });
  } //renderProducts
} // к классу

window.CheckoutProductList = CheckoutProductList;
