const field = document.querySelector(".container");
const button = document.querySelector(".color-button");
const text = document.getElementById("current-color");
let color;

function changeColor() {
  let rand1 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  let rand2 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  let rand3 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  field.style.backgroundColor = `#${rand1}${rand2}${rand3}`;
  text.textContent = ` #${rand1}${rand2}${rand3}`.toUpperCase();
}

document.addEventListener("DOMContentLoaded", function () {
  changeColor();
});

button.addEventListener("click", function (event) {
  changeColor();
});
