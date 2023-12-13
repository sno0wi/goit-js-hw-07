function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");


button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textSpan.textContent = randomColor;
});

const widget = document.querySelector(".widget")
const container = document.createElement("div");
container.classList.add("containerT5");
container.append(widget)
body.append(container)
const paragraph = document.querySelector(".widget p");
paragraph.classList.add("show_color")