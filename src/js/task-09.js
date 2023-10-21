function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBackground = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const nameColor = document.querySelector(".color");

const changeColor = () => {
  bodyBackground.style.backgroundColor = getRandomHexColor();
    nameColor.textContent = getRandomHexColor();
};
window.onload = (event) => changeColor();
changeColorButton.addEventListener("click", changeColor);