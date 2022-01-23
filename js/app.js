const form = document.querySelector("form");
const emailInput = document.querySelector(".input-email");
const errorMessage = document.querySelector(".email-error-text");
const errorIcon = document.querySelector(".email-error");

function setError() {
  emailInput.classList.add("email-error-border");
  errorMessage.classList.remove("hidden");
  errorIcon.classList.remove("hidden");
}

function setPass() {
  emailInput.classList.remove("email-error-border");
  errorMessage.classList.add("hidden");
  errorIcon.classList.add("hidden");
}

function setValid(email) {
  let valid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return valid.test(String(email).toLowerCase());
}

function checkEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue === "" || !setValid(emailValue)) {
    setError();
  } else if (setValid(emailValue)) {
    setPass();
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkEmail();
});
