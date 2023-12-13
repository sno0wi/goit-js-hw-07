const categoryItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`)
    const categoryElements = item.querySelectorAll('li');
    console.log(`Elements: ${categoryElements.length}`)
});
const body = document.querySelector("body");
const categoriesEl = document.querySelector("#categories")
categoriesEl.classList.add("categoriesList")
const container = document.createElement("div");
container.classList.add("container");
container.append(categoriesEl);
body.append(container)