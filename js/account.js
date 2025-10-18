const signUpBtn = document.querySelector(".signup-btn");
const loginContainer = document.querySelector(".login");
const signUpContainer = document.querySelector(".signUp");
const loginBtn = document.querySelector(".login-btn");

signUpBtn.addEventListener("click", () => {
  loginContainer.style.opacity = "0";
  loginContainer.style.pointerEvents = "none";

  signUpContainer.style.opacity = "1";
  signUpContainer.style.pointerEvents = "auto";

  signUpBtn.style.opacity = "0";
  signUpBtn.style.pointerEvents = "none";

  loginBtn.style.opacity = "1";
  loginBtn.style.pointerEvents = "auto";
});

loginBtn.addEventListener("click", () => {
  loginContainer.style.opacity = "1";
  loginContainer.style.pointerEvents = "auto";

  signUpContainer.style.opacity = "0";
  signUpContainer.style.pointerEvents = "none";

  signUpBtn.style.opacity = "1";
  signUpBtn.style.pointerEvents = "auto";

  loginBtn.style.opacity = "0";
  loginBtn.style.pointerEvents = "none";
});
