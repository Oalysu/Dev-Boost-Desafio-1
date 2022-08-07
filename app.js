function changeMode() {
  changeClasses();
}

function changeClasses() {
  body.classList.toggle(darkModeClasse);
  h1.classList.toggle(darkModeClasse);
  li.classList.toggle(darkModeClasse);
  h3.classList.toggle(darkModeClasse);
  p.classList.toggle(darkModeClasse);
  p2.classList.toggle(darkModeClasse);
  stars.classList.toggle(darkModeClasse);
  trocarimagens();
}

const darkModeClasse = "dark-mode";
const body = document.getElementsByTagName("body")[0];
const li = document.getElementsByClassName("text-dark-mode")[0];
const h1 = document.getElementsByClassName("text-dark-mode")[1];
const h3 = document.getElementsByClassName("second-text-dark-mode")[0];
const p = document.getElementsByClassName("second-text-dark-mode")[1];
const p2 = document.getElementsByClassName("second-text-dark-mode")[2];
const stars = document.getElementsByClassName("moon-sun")[0];

//Instruções para funcionamento do botão
const botaoTrocarTema = document.getElementById("change-theme-button");
botaoTrocarTema.addEventListener("click", changeMode);

function trocarimg() {
  document.getElementById("trocar-img").src = "assets/Logo - DevBoost (1).svg";
  document.getElementById("img-2").src = "assets/img.png";
  document.getElementById("icon-button").src = "assets/sun-fill.svg";
}

function trocarimg2() {
  document.getElementById("trocar-img").src = "assets/Logo - DevBoost.svg";
  document.getElementById("img-2").src = "assets/Imagem.png";
  document.getElementById("icon-button").src = "assets/moon.svg";
}

function trocarimagens() {
  if (body.classList.contains("dark-mode")) {
    trocarimg();
  } else {
    trocarimg2();
  }
}
