$(document).ready(function () {
    // Hàm để tải và hiển thị sản phẩm
    function loadProducts() {
        $.ajax({
            url: "http://localhost:3000/products", // Thay đổi URL thành địa chỉ của API hoặc tệp dữ liệu
            method: "GET",
            dataType: "json",
            success: function (data) {
                var products = data.products;

                // Hiển thị dữ liệu sản phẩm trong lớp product__show
                var productShow = $(".product__show");
                productShow.empty(); // Xóa nội dung cũ trước khi thêm sản phẩm mới

                $.each(products, function (index, product) {
                    var productHtml = "<div class='product'>";
                    productHtml += "<h2>" + product.name + "</h2>";
                    productHtml += "<p>Giá: " + product.price + " Đ</p>";
                    productHtml += "<p>Mô tả: " + product.description + "</p>";
                    productHtml += "</div>";
                    productShow.append(productHtml);
                });
            },
            error: function (error) {
                console.log("Lỗi khi tải sản phẩm: " + error);
            }
        });
    }

    // Gọi hàm để tải và hiển thị sản phẩm khi trang web được tải
    loadProducts();
});
