export const renderGrid = (products) => {
  let gridBox = document.querySelector(".product__show");
  let html = products
    .map((product) => {
      return `
    <div class="col-md-4 product__detail grid__show">
    <div class="d-flex justify-content-center align-items-center">
      <img src="${product.url_img}" alt="" />
    </div>

    <p class="d-flex justify-content-center align-items-center">
      ${product.price} đ
    </p>
    <h6 class="d-flex justify-content-center align-items-center">
    ${product.name}
    </h6>
    <div
      class="rating d-flex justify-content-center align-items-center"
    >
      <span class="rating__star">
        <i class="fa-solid fa-star"></i>
      </span>
      <span class="rating__star">
        <i class="fa-solid fa-star"></i>
      </span>
      <span class="rating__star">
        <i class="fa-solid fa-star"></i>
      </span>
      <span class="rating__star">
        <i class="fa-solid fa-star"></i>
      </span>
      <span class="rating__star">
        <i class="fa-solid fa-star-half"></i>
      </span>
    </div>
    <div
      class="d-flex justify-content-center align-items-center mt-3"
    >
      <button class="btn btn-warning fw-bolder text-white">
        Mua ngay
      </button>
      <button class="btn btn-dark text-white fw-bolder ms-1 detail__button " data-product-id="${product.id}">
        Xem chi tiết
      </button>
    </div>
  </div>
        `;
    })
    .join("");
  gridBox.innerHTML = html;
};
