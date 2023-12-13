const form = document.querySelector(".login-form")
form.addEventListener("submit", formValidation);
function formValidation(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("Please enter your email and password")
    }

    console.log(`email: ${email.trim()}, Password: ${password.trim()}`);
    form.reset();
}

const body = document.querySelector("body");
const container = document.createElement("div");
container.classList.add("containerT4");
container.append(form)
body.append(container)
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
emailInput.placeholder = 'Enter your email';
passwordInput.placeholder = 'Enter your password';
emailInput.classList.add("inputEmail");
passwordInput.classList.add("inputPassword");