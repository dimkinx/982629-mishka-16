const links = document.querySelectorAll(".popular-product__order-link, .product-card__add");
const popup = document.querySelector(".modal");
const close = popup.querySelector(".modal__overlay");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    }
  }
});
