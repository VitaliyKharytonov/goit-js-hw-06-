const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listItem = ingredients.map((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  item.classList.add("item");
  return item;
});
list.append(...listItem);

// const listItem = ingredients
//   .map((name) => `<li class="item">${name}</li>`)
//   .join("");

// list.innerHTML = listItem;
