function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls").firstElementChild;
console.log(inputEl);

function createBoxes(amount) {}
