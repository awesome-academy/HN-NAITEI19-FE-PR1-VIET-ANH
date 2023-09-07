import { cartRender } from "../creators/cartRender.mjs";
import { cartCounterRender } from "../creators/cartCounterRender.mjs";
import Http from "../helpers/http.mjs";
window.addEventListener("load", function (e) {
  const $ = this.document.querySelector.bind(this.document);
  const $$ = this.document.querySelectorAll.bind(this.document);
  const app = {
    init: function () {
      cartCounterRender();
      console.log("cart");
      cartRender();
    },
    addEventListener: async function () {
      document.addEventListener("click", async function (e) {
        if (e.target.matches(".cart__button-delete")) {
          let cart = JSON.parse(localStorage.getItem("cart"));
          cart = cart.filter((product) => {
            console.log(product.stt, +e.target.getAttribute("cart-item-id"));
            return product.stt !== +e.target.getAttribute("cart-item-id");
          });
          localStorage.setItem("cart", JSON.stringify(cart));
          cartRender();
          cartCounterRender();
        }
        if (e.target.matches(".re__button")) {
          window.location.href = `./list.html`;
        }
        if (e.target.matches(".pay__button")) {
          //get data from local storage
          let cart = JSON.parse(localStorage.getItem("cart"));
          console.log(cart);
          //cart to object
          let transaction = {
            products: cart,
            user: {
              name: "Nguyen Van A",
              phone: "0123456789",
              address: "Ha Noi",
            },
            money: localStorage.getItem("money"),
            vat: localStorage.getItem("vat"),
            pay: localStorage.getItem("pay"),
          };
          console.log(transaction);
          //post to transaction api
          await Http.post("transaction", transaction);
          //clear cart
          localStorage.removeItem("cart");
          //render cart
          cartRender();
          //render cart counter
          cartCounterRender();
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
