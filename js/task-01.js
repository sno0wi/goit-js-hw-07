const categoryItems = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    console.log(`Category: ${categoryName}`)
    const categoryElements = item.querySelectorAll('li');
    console.log(`Elements: ${categoryElements.length}`)
});