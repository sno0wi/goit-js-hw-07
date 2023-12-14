const textInput = document.getElementById("#name-input");
const output = document.getElementById("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value.trim();
    if (output.textContent === "") {
        output.textContent = "Anonymous"
    }
})