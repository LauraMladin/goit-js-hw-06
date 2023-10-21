const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");


for (const ingredient of ingredients) {

  const itemList = document.createElement("li");

  itemList.classList.add("item");

  itemList.textContent = ingredient;

  ingredientsEl.append(itemList);
  
  console.log(itemList);
}