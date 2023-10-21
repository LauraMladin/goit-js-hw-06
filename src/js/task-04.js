const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const spanBtn = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
    counterValue = counterValue - 1;
    spanBtn.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue = counterValue + 1;
    spanBtn.textContent = counterValue;
});