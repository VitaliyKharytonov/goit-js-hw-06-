const sumCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${sumCategories.length}`);

const categories = sumCategories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
