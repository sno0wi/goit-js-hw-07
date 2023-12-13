const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value.trim();
    if (output.textContent === "") {
        output.textContent = "Anonymous"
    }
})

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("containerT3");
const title = document.querySelector("h1")
title.classList.add("title_t3")
container.append(textInput,title)
body.append(container)