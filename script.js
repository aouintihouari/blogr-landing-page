const menu = document.querySelector(".nav-mobile__menu");
const menuBtn = document.querySelector(".menu");
const productBtn = document.querySelector(".product__container");
const companyBtn = document.querySelector(".company__container");
const connectBtn = document.querySelector(".connect__container");

function hideSubMenu(element) {
  const image = element.querySelector("img");
  const ul = element.querySelector("ul");
  image.classList.remove("arrow-active");
  ul.classList.remove("active");
}

function displaySubMenu(element) {
  const image = element.querySelector("img");
  const ul = element.querySelector("ul");
  image.classList.add("arrow-active");
  ul.classList.add("active");
}

function handleSubMenu(element) {
  if (element.querySelector("img").classList.contains("arrow-active")) {
    hideSubMenu(element);
  } else displaySubMenu(element);
}

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav-mobile__menu--active");
  if (menuBtn.classList.contains("close")) {
    menuBtn.classList.remove("close");
    menuBtn.classList.add("hamburger");
    menuBtn.src = "images/icon-hamburger.svg";
  } else {
    menuBtn.classList.remove("hamburger");
    menuBtn.classList.add("close");
    menuBtn.src = "images/icon-close.svg";
  }
});

productBtn.addEventListener("click", () => handleSubMenu(productBtn));
companyBtn.addEventListener("click", () => handleSubMenu(companyBtn));
connectBtn.addEventListener("click", () => handleSubMenu(connectBtn));
