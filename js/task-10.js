function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const addHandler = () => {
  const amount = document.querySelector("#controls input[type=number]").value;
  createBoxes(amount);
};
const removeHandler = () => {
  const amount = document.querySelector("#controls input[type=number]").value;
  destroyBoxes(amount);
};

createButton.addEventListener("click", addHandler);
destroyButton.addEventListener("click", removeHandler);

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
      for (let i = 1; i <= amount; i++) {
          boxes.insertAdjacentHTML(
              "beforeend",
              `<div style="width:${Math.floor(i * 10 + 20)}px; 
      height: ${Math.floor(i * 10 + 20)}px; 
      background-color:${getRandomHexColor()}; 
      margin:10px; 
      "></div>`
          );
      }
  } else {
      boxes.insertAdjacentHTML("beforeend", `<p>Write a number from 1 up to 100</p>`);
  }
}

function destroyBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    for (let i = 1; i <= amount; i++) {
      const box = document.querySelector('#boxes div:last-child');
      if (box) {
        box.remove();
      }
    }
  } else {
    boxes.insertAdjacentHTML("beforeend", `<p>Write a number from 1 up to 100</p>`);
  }
}