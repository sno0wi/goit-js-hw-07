function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const input = document.querySelector("#controls input")

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100)  {
    createBox(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }

});

destroyBtn.addEventListener("click", destroyBoxes);

function createBox(amount) {
  for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}
  
const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("containerT6");
const controls = document.querySelector("#controls")
container.append(controls,boxesContainer)
body.append(container)
createBtn.classList.add("createBtn");
destroyBtn.classList.add("destroyBtn")
input.classList.add("input")