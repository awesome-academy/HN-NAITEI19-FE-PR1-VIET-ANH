export const cartCounterRender = () => {
  console.log("cartCounterRender");
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cart__counter = document.querySelector(".cart__counter");
  console.log("cart", cart__counter);
  if (cart__counter) {
    if (cart) {
      cart__counter.innerHTML = cart.length;
    } else {
      cart__counter.innerHTML = 0;
    }
  }
};
