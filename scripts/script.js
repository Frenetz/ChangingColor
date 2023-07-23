const field = document.querySelector(".container");
const button = document.querySelector(".color-button");
const text = document.getElementById("current-color");
let color;

function changeColor() {
  let rand1 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  rand1.toString().length < 2
    ? (rand1 = "0" + rand1.toString())
    : (rand1 = rand1.toString());
  let rand2 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  rand2.toString().length < 2
    ? (rand2 = "0" + rand2.toString())
    : (rand2 = rand2.toString());
  let rand3 = Math.floor(Math.random() * (255 - 0) + 1).toString(16);
  rand3.toString().length < 2
    ? (rand3 = "0" + rand3.toString())
    : (rand3 = rand3.toString());
  field.style.backgroundColor = `#${rand1}${rand2}${rand3}`;
  text.textContent = ` #${rand1}${rand2}${rand3}`.toUpperCase();
  console.log(rand1, rand2, rand3);
}

document.addEventListener("DOMContentLoaded", function () {
  changeColor();
});

button.addEventListener("click", function (event) {
  changeColor();
});
