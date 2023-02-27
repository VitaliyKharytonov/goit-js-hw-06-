const inputEl = document.querySelector("#validation-input");
console.log(inputEl.dataset.length);
console.log(inputEl.value);

inputEl.addEventListener("blur", () => {
  if (inputEl.value.trim().length === inputEl.dataset.length) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
});
