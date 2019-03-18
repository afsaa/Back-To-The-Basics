const ipad = window.matchMedia("screen and (max-width:768px)");
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

const toggle = () => {
  menu.classList.contains("is-active")
    ? menu.classList.remove("is-active")
    : menu.classList.add("is-active");
}

const mqValidator = (event) => {
    event.matches
    ? burgerButton.addEventListener("click", toggle)
    : burgerButton.removeEventListener("click", toggle);
}

ipad.addListener(mqValidator);
mqValidator(ipad);