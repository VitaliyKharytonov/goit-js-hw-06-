const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const spanText = document.querySelector("#value");
let counterValue = 0;
spanText.textContent = counterValue;
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanText.textContent = counterValue;
});
console.log(counterValue);

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanText.textContent = counterValue;
});
