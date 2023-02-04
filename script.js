const toggle = document.getElementById("toggle-theme");
const container = document.querySelector(".container");
const toggleForm = document.getElementById("toggle-form");
const form1 = document.getElementById("registration-form");
const body = document.getElementById("body");
const showPassss = document.getElementById("show-password");
const confirmPassss = document.getElementById("show-confirm-password");


  toggleForm.addEventListener("change", () => {
    form1.classList.toggle("dark-form");
    container.classList.toggle("dark-theme");
    body.classList.toggle("body-theme");
    showPassss.classList.toggle('passwordTheme')
    confirmPassss.classList.toggle('passwordTheme');
  });

const form = document.getElementById("registration-form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.createElement("div");
const showPassword = document.getElementById("show-password");
const showConfirmPassword = document.getElementById("show-confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.innerHTML = "";
  confirmPassword.style.border = "1px solid #ccc";
  if (password.value !== confirmPassword.value) {
    errorMessage.innerHTML = "Passwords do not match";
    errorMessage.style.color = "red";
    confirmPassword.style.border = "1px solid red";
    confirmPassword.parentNode.insertBefore(errorMessage, confirmPassword.nextSibling);
  } else {
    alert("Registration successful!");
  }
});


showPassword.addEventListener("click", (event) => {
  event.preventDefault();
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    password.type = "password";
    showPassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});

showConfirmPassword.addEventListener("click", (event) => {
  event.preventDefault();
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    showConfirmPassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    confirmPassword.type = "password";
    showConfirmPassword.innerHTML = '<i class="fas fa-eye"></i>';
  }
});
