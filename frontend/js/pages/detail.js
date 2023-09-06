let count = 0;
document.getElementById("up__button").addEventListener("click", () => {
  count++;

  document.getElementById("counter").setAttribute("value", count);
});

document.getElementById("down__button").addEventListener("click", () => {
  if (count > 0) {
    count--;
  }
  document.getElementById("counter").setAttribute("value", count);
});
function toggleContent(activeButton) {
  const contentElements = document.querySelectorAll(".content");
  const buttons = document.querySelectorAll(".button-container button");

  // Ẩn tất cả nội dung
  contentElements.forEach((content) => {
    content.classList.remove("active");
  });

  // Bỏ màu nút của tất cả các nút
  buttons.forEach((button) => {
    button.classList.remove("active-button");
  });

  // Hiển thị nội dung của nút được ấn
  const activeContent = document.getElementById(`content${activeButton}`);
  activeContent.classList.add("active");

  // Đổi màu của nút được ấn
  const activeButtonElement = document.getElementById(`button${activeButton}`);
  activeButtonElement.classList.add("active-button");
}
