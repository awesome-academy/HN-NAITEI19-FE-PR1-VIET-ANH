import { detailRender } from "../creators/detailRender.mjs";
import { cartCounterRender } from "../creators/cartCounterRender.mjs";
window.addEventListener("load", function (e) {
  const $ = this.document.querySelector.bind(this.document);
  const $$ = this.document.querySelectorAll.bind(this.document);
  const app = {
    init: async function () {
      detailRender();
    },
    addEventListener: async function () {
      document.addEventListener("click", function (e) {
        if (e.target.matches(".button__buy")) {
          let quantity = document.getElementById("counter").value;
          let color = document.querySelector(".color__selected").value;
          let size = document.querySelector(".size__selected").value;
          console.log(quantity, color, size);
          //if quantity > 0 save to local storage
          if (quantity > 0) {
            let product = JSON.parse(localStorage.getItem("product"));
            let cart = JSON.parse(localStorage.getItem("cart"));
            if (cart === null) {
              cart = [];
            }
            let product__temp = {
              ...product,
              quantity: quantity,
              color: color,
              size: size,
              stt: cart.length,
            };
            cart.push(product__temp);
            localStorage.setItem("cart", JSON.stringify(cart));
            cartCounterRender();
            //window.location.href = `./cart.html`;
          }
        }
        if (e.target.matches(".cart__counter")) {
          window.location.href = `./cart.html`;
        }
      });
    },
    start: function () {
      this.init();
      this.addEventListener();
    },
  };
  app.start();
});
