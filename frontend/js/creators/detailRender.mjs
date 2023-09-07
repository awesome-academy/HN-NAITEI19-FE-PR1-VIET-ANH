export const detailRender = () => {
  // get product from local storage
  const product = JSON.parse(localStorage.getItem("product"));
  console.log(product);
  const detailIMG = document.querySelector(".image__detail");
  const detailIntro = document.querySelector(".product__intro");
  detailIMG.innerHTML = `
    <img src="${product.url_img}" alt="" class="h-75 w-75" />
    `;
  const detailHeader = document.querySelector(".detail__header");
  detailHeader.innerHTML = product.name;
  detailIntro.innerHTML = `<div class="intro__title">
    <h3>${product.name}</h3>
  </div>
  <div class="intro__star d-flex">
    <span class="text-warning">
      <i class="fa-solid fa-star"></i>
    </span>
    <span class="text-warning">
      <i class="fa-solid fa-star"></i>
    </span>
    <span class="text-warning">
      <i class="fa-solid fa-star"></i>
    </span>
    <span class="text-warning">
      <i class="fa-solid fa-star"></i>
    </span>
    <span class="text-warning me-1">
      <i class="fa-regular fa-star"></i>
    </span>
    <span class="text-secondary me-2 count">(12 đánh giá)</span>
    <div>
      <a href="">Gửi bình luẩn của bạn</a>
    </div>
  </div>
  <div class="cost__span d-flex text-danger">
    <span class="text-danger">GNY: ${product.price} Đ</span>
  </div>
  <div class="product__info">
    <span> Thông tin sản phẩm: </span>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercition ullamco
      laboris nisi ut aliquip ex ea commodo consequat...
    </p>
  </div>
  <div class="row select__group">
                <div class="col-6 select__size d-flex flex-column">
                  <span class="mb-2 fw-bold"> Size: </span>
                  <select name="" class="form-control size__selected" id="first__selected">
                    <option value="">--Chọn size--</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="S">S</option>
                  </select>
                  <span id="select-icon">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </div>
                <div class="col-6 select__size d-flex flex-column">
                  <span class="mb-2 fw-bold"> Màu: </span>
                  <select name="" class="form-control color__selected" id="first__selected">
                    <option value="">--Chọn màu--</option>
                    <option value="Đỏ">Đỏ</option>
                    <option value="Xanh">Xanh</option>
                    <option value="Vàng">Vàng</option>
                  </select>
                  <span id="select-icon">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </div>
              </div>
              <div class="count__buy">
                <div class="counter__box">
                  <form class="counter__box__counter d-flex">
                    <input type="number" value="0" id="counter" />
                    <div class="button__count d-flex flex-column">
                      <button id="up__button">
                        <span>
                          <i class="fa-solid fa-caret-up"></i>
                        </span>
                      </button>
                      <button id="down__button">
                        <span>
                          <i class="fa-solid fa-caret-down"></i>
                        </span>
                      </button>
                    </div>
                    <div>
                      <button
                        type ="button"
                        class="ms-3 btn btn-warning h-100 w-100 text-white fw-bold button__buy"
                      >
                        ĐẶT HÀNG
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="social">
                <img src="../img/icon/share-icon.png" alt="" />
              </div>
  `;
};
