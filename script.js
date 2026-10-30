
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    if (name === "" || email === "" || course === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Registration successful! Welcome, " + name + ".";

    form.reset();
});

