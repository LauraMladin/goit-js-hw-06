const fontSizeControl = document.querySelector("#font-size-control");
const textTarget = document.querySelector("#text");

const changeFontSize = () => {
    textTarget.style.fontSize = fontSizeControl.value + "px";
  };
  
  fontSizeControl.addEventListener("input", changeFontSize);