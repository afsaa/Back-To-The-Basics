const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

const toggle = () => {
  menu.classList.contains("is-active")
    ? menu.classList.remove("is-active")
    : menu.classList.add("is-active");
}

burgerButton.addEventListener("click", toggle);