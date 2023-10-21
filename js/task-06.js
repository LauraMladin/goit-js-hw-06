const textInput = document.querySelector("input");

const handler = (event) => {
    if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
    }
    console.log(event.currentTarget);
};
textInput.addEventListener("blur", handler);