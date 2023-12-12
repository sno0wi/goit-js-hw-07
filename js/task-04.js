const form = document.querySelector("form")
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