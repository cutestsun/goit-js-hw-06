const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((item) => {
  const categoryTitle = item.querySelector("h2");
  const categoryItem = item.querySelectorAll("li");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItem.length}`);
});
