const email = document.getElementById("email-address");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const rePassword = document.getElementById("re-password");
const rePasswordError = document.getElementById("re-password-error");

email.addEventListener("blur", checkEmail());
password.addEventListener("blur", checkPassword());
rePassword.addEventListener("blur", checkPassword());

function checkEmail() {
   let emailValue = email.value;
   if (emailValue === "") {
      emailError.style.visibility = "hidden";
   } else if (!(/\S+@\S+\.\S+/.test(emailValue))) {
      emailError.style.visibility = "visible";
      emailError.innerText = "Email is Invalid";
   }
}

function checkPassword() {
   let passwordValue = password.value, rePasswordValue = rePassword.value;

   passwordError.style.visibility = "hidden";
   rePasswordError.style.visibility = "hidden";

   if (passwordValue !== "" && rePasswordValue !== "") {
      if (passwordValue !== rePasswordValue) {
         passwordError.style.visibility = "visible";
         rePasswordError.style.visibility = "visible";
         passwordError.innerText = "Passwords doesn't Match";
         rePasswordError.innerText = "Passwords doesn't Match";
      } else {
         if (isPasswordValid(passwordValue)) {
            passwordError.style.visibility = "hidden";
            rePasswordError.style.visibility = "hidden";
         } else {
            passwordError.style.visibility = "visible";
            rePasswordError.style.visibility = "visible";
            passwordError.innerText = "Password doesn't follow Rules";
            rePasswordError.innerText = "Password doesn't follow Rules";
         }
      }
   }
}

function isPasswordValid(passwordValue) {
   return /[A-Z]/.test(passwordValue) &&
      /[a-z]/.test(passwordValue) &&
      /[0-9]/.test(passwordValue) &&
      /[!#@?+_=\.\*]/.test(passwordValue);
}