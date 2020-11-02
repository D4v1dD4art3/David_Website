//const experiencia = document.querySelector('.Experiencia')
const ipad = window.matchMedia("screen and (max-width: 767px)");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");

ipad.addListener(validation);

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", ocultarMostrar);
  } else {
    burgerButton.removeEventListener("click", ocultarMostrar);
  }
}

validation(ipad);

function ocultarMostrar() {
  if (menu.classList.contains("is-active")) {
    menu.classList.remove("is-active");
  } else {
    menu.classList.add("is-active");
  }
}
