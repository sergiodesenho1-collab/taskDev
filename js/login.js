const form = document.getElementById("form-login");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  localStorage.setItem("email", email.value);
  localStorage.setItem("senha", senha.value);

  alert("Login salvo!");
  window.location.href = "./index.html";
});
