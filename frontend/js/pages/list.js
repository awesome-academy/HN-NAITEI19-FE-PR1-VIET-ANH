import { fetchProducts } from "../helpers/fetch.mjs";
import { renderList } from "../creators/productList.mjs";
import { getProductById } from "../helpers/findProductById.mjs";
import { cartCounterRender } from "../creators/cartCounterRender.mjs";
let count = 9;
let products = [];
window.addEventListener("load", function (e) {
  const $ = this.document.querySelector.bind(this.document);
  const $$ = this.document.querySelectorAll.bind(this.document);
  const app = {
    init: async function () {
      products = await fetchProducts();
      cartCounterRender();
      let products__temp = [...products];
      // get 9 products
      localStorage.setItem("products", JSON.stringify(products));
      products__temp.splice(count, products.length - count);
      renderList(products__temp);
    },
    addEventListener: async function () {
      document.addEventListener("click", function (e) {
        if (e.target.matches(".detail__button")) {
          console.log(e.target.getAttribute("data-product-id"));
          localStorage.removeItem("product");
          console.log(
            getProductById(+e.target.getAttribute("data-product-id"))
          );
          localStorage.setItem(
            "product",
            JSON.stringify(
              getProductById(+e.target.getAttribute("data-product-id"))
            )
          );
          window.location.href = `./detail.html`;
        }
        if (e.target.matches(".cart__counter")) {
          window.location.href = `./cart.html`;
        }
        if (e.target.matches(".search__button")) {
          e.preventDefault();
          let searchInput = document.getElementById("search__input").value;
          let products__temp = [...products];
          products__temp = products__temp.filter((product) => {
            return product.name
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          });
          if (products__temp.length > count) {
            products__temp.splice(count, products.length - count);
          }
          renderList(products__temp);
        }
      });

      document.addEventListener("change", function (e) {
        if (e.target.matches(".select__quantity")) {
          count = e.target.value;
          let products__temp = [...products];
          products__temp.splice(count, products.length - count);
          renderList(products__temp);
        }

        if (e.target.matches(".filter__select")) {
          let products__temp = [...products];
          products__temp.splice(count, products.length - count);
          console.log(e.target.value);
          switch (+e.target.value) {
            case 2:
              products__temp.sort((a, b) => {
                return a.price > b.price ? 1 : -1;
              });
              break;
            case 3:
              console.log("sort");
              products__temp.sort((a, b) => {
                return b.price > a.price ? 1 : -1;
              });
              break;
            case 1:
              products__temp.sort((a, b) => {
                return a.name.localeCompare(b.name) ? 1 : -1;
              });
              break;
            default:
              break;
          }
          console.log(products__temp);
          renderList(products__temp);
        }
      });
    },
    run: function () {
      this.init();
      this.addEventListener();
    },
  };
  app.run();
});
