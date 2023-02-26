const controlEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
controlEl.addEventListener("input", () => {
  spanEl.style.fontSize = `${controlEl.value}px`;
});
