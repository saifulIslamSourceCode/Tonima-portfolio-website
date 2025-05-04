let gridItems = document.querySelectorAll(".grid_item");
let popup = document.getElementById("popup");
let popupImg = document.getElementById("popupImg");
let closeBtn = document.getElementById("closeBtn");

gridItems.forEach((item) => {
  item.addEventListener("click", () => {
    popup.classList.add("show");
    popupImg.src = item.src;
    document.body.classList.add("noscroll");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
  document.body.classList.remove("noscroll");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
    document.body.classList.remove("noscroll");
  }
});