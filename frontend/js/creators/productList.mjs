let count = 9;
export const renderList = (products) => {
  let list = document.querySelector(".product__show");
  let html = products
    .map((product) => {
      return `
        <div class="banner4__detail row">
              <div
                class="col-sm-4 detail__img d-flex justify-content-center align-content-center"
              >
                <img src="${product.url_img}" alt="ảnh ọt" />
              </div>
              <div class="col-sm-8 detail__text product__detail">
                <h6 class="">${product.name}</h6>
                <div class="rating">
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
                <p class="text-black-50">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  quibusdam, voluptatum, quod, quae voluptatem quia quos
                </p>
                <p class="">${product.price} Đ</p>

                <div class="mt-3">
                  <button class="btn btn-warning fw-bolder text-white">
                    Mua ngay
                  </button>
                  <button class="btn btn-dark text-white fw-bolder ms-1 detail__button" data-product-id="${product.id}">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            `;
    })
    .join("");
  list.innerHTML = html;
};
