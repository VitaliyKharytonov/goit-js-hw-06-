const inputEl = document.querySelector("#name-input");
const spamEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    spamEl.textContent = "Anonymous";
  } else {
    spamEl.textContent = event.currentTarget.value;
  }
});
