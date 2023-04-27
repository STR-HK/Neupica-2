const { api } = window;

const widthInput = document.getElementById("width-input");
const setWidthButton = document.getElementById("set-width-button");

setWidthButton.addEventListener("click", () => {
    const width = parseInt(widthInput.value, 10);
    if (!isNaN(width)) api.setWidth(width);
});