
  const form = document.getElementById("login-form");
  const password = document.getElementById("password");
  const showPasswordButton = document.getElementById("show-password");

  showPasswordButton.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      showPasswordButton.innerHTML = "Hide Password";
    } else {
      password.type = "password";
      showPasswordButton.innerHTML = "Show Password";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Login successful!");
  });
const toggle = document.getElementById("toggle-theme");
const container = document.querySelector(".container");
const toggleForm = document.getElementById("toggle-form");
const form1 = document.getElementById("login-form");
const body = document.getElementById("body");


  toggleForm.addEventListener("change", () => {
    form1.classList.toggle("dark-form");
    container.classList.toggle("dark-theme");
    body.classList.toggle("body-theme");
  });
