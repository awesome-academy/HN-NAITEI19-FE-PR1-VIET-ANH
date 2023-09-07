import { detailRender } from "../creators/detailRender.mjs";
window.addEventListener("load", function (e) {
  const $ = this.document.querySelector.bind(this.document);
  const $$ = this.document.querySelectorAll.bind(this.document);
  const app = {
    init: async function () {
      detailRender();
    },
    addEventListener: async function () {},
    start: function () {
      this.init();
      this.addEventListener();
    },
  };
  app.start();
});
