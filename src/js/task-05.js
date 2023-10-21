const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const emptyOutput = "Anonymous";

textInput.addEventListener("input", (event) =>{

    if (event.currentTarget.value) {
        textOutput.textContent = event.currentTarget.value;
    } else {
        textOutput.textContent = emptyOutput;
    }
})
