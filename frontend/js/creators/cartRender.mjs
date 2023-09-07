const moneyToNumber = (money, quantity) => {
  console.log(Number(money.replace(".", "")));
  let toltal = Number(money.replace(".", "")) * quantity * 1000;
  //   add . to toltal money like 1.000.000
  toltal = toltal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return toltal;
};
export const cartRender = () => {
  //querry tbody
  const tbody = document.querySelector(".cart tbody");
  //get cart from local storage
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log("cart", cart);
  //if cart is empty
  if (cart === null || cart.length === 0) {
    tbody.innerHTML = `<tr>
      <td colspan="6" class="cart__empty">Cart is empty</td>
    </tr>`;
  } else {
    const cartHtml = cart
      .map((product, index) => {
        return `<tr>
        <td class="col">${index}</td>
        <td class="col">
          <img src="${product.url_img}" alt="" />
        </td>
        <td class="col">${product.name.toUpperCase()}</td>
        <td class="col">${product.price} Đ</td>
        <td class="col">${product.quantity}</td>
        <td class="col">${moneyToNumber(product.price, product.quantity)} Đ</td>
        <td class="col">
          <button class="btn btn-light cart__button-delete" cart-item-id="${index}">
              <span class="text-danger"
                ><i class="fa-solid fa-xmark"></i
              ></span>
            </button>
        </td>
      </tr>`;
      })
      .join("");
    tbody.innerHTML = cartHtml;
  }
  let moneyHtml = document.querySelector(".total__text .money");
  let vatHtml = document.querySelector(".total__text .vat");
  let payHtml = document.querySelector(".total__text .pay");
  let moneyValue = cart.reduce((total, product) => {
    return (
      total + Number(product.price.replace(".", "")) * product.quantity * 1000
    );
  }, 0);
  let vatValue = moneyValue / 10;
  let payValue = moneyValue + vatValue;
  //add all to cart local storage
  localStorage.setItem(
    "money",
    moneyValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
  localStorage.setItem(
    "vat",
    vatValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
  localStorage.setItem(
    "pay",
    payValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  );
  moneyHtml.innerHTML = moneyValue
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  vatHtml.innerHTML = vatValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  payHtml.innerHTML = payValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
