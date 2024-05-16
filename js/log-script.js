const container = document.querySelector("#log-container");
const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector("#login");
const title = document.querySelector("#title");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  title.textContent = "FlightPool - Зарегистрировать в аккаунт";
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
  title.textContent = "FlightPool - Войти в аккаунт";
});
let log_phone = document.querySelector("#log-phone");
let log_password = document.querySelector("#log-pass");
let username = document.querySelector("#name");
let surname = document.querySelector("#surname");
let userDocument = document.querySelector("#document");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");
let againPassword = document.querySelector("#again-password");
const loginWarn = document.querySelector("#loginWarn");
const loginButton = document.querySelector("#loginButn");
const registrWarn = document.querySelector("#registrWarn");
const registerButton = document.querySelector("#registerButn");

loginButton.addEventListener("click", log_proverka);
function log_proverka() {
  if (log_phone.value == "" || log_password.value == "") {
    loginWarn.className = "log-warning";
    loginWarn.textContent = "Вы заполнили не все поля";
  } else {
    loginWarn.classList.remove("log-warning");
    loginWarn.textContent = "";
    window.location.href = "./personal_account.html";
  }
}

registerButton.addEventListener("click", reg_proverka);
function reg_proverka() {
  if (
    username.value == "" ||
    surname.value == "" ||
    userDocument.value == "" ||
    phone.value == "" ||
    password.value == "" ||
    againPassword.value == ""
  ) {
    registrWarn.className = "reg-warning";
    registrWarn.textContent = "Вы заполнили не все поля";
  } else if (password.value != againPassword.value) {
    registrWarn.className = "reg-warning";
    registrWarn.textContent = "Пароли не совпадают";
  } else {
    registrWarn.classList.remove("reg-warning");
    registrWarn.textContent = "";
    window.location.href = "./personal_account.html";
  }
}

// proverka

password.addEventListener("blur", provPass);
password.addEventListener("focus", inputting);

function provPass() {
  if (/[\d][\!#$]/.test(password.value) != true) {
    registrWarn.className = "reg-warning";
    registrWarn.textContent =
      "Пароль должен содержать хотя бы одну цифру и знак (! # $)";
    if (password.value.length < 7) {
      registrWarn.textContent += " и быть не менее 7 символов";
    }
  } else if (password.value.length < 7) {
    registrWarn.className = "reg-warning";
    registrWarn.textContent = "Пароль должен содержать не менее 7 символов";
  }
}
function inputting() {
  if (registrWarn.classList.contains("reg-warning")) {
    registrWarn.classList.remove("reg-warning");
    registrWarn.textContent = "";
  }
}
