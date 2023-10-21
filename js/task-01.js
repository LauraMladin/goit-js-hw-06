const categories = document.querySelectorAll("h2").length;
console.log("Number of categories:", categories);

const items = document.querySelectorAll("li.item");

for (const item of items) {
    const category = item.firstElementChild.textContent;
    const elements = item.querySelectorAll("li").length;
    console.log(`Category: ${category} \nElements: ${elements}`);
}