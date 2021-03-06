const input = document.querySelector("input");
const showHide = document.querySelector(".show-hide");
const strengthContainer = document.querySelector(".strength-container");
const indicator = document.querySelector(".indicator");
const strength = document.querySelector(".strength");

window.addEventListener("load", input.focus());

input.addEventListener("input", function () {
   strengthContainer.classList.add("active");
   const password = input.value.trim();
   if (password === "") {
      strengthContainer.classList.remove("active");
      input.style.borderColor = "#d3d3d3";
   } else {
      const alphabetMatch = password.match(/[a-zA-Z]/);
      const digitsMatch = password.match(/[0-9]/);
      const splCharactersMatch = password.match(/[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/);
      const indicator_ = indicator.children[0];

      if (((alphabetMatch && digitsMatch && splCharactersMatch) || (alphabetMatch && splCharactersMatch)) && password.length >= 8) {
         strength.innerText = "Password is Strong";
         input.style.borderColor = indicator.style.color = strength.style.color = "#0f0";
         indicator_.classList.remove("fa-circle-exclamation");
         indicator_.classList.remove("fa-circle-minus");
         indicator_.classList.add("fa-circle-check");
      } else if (alphabetMatch && digitsMatch && password.length >= 8) {
         strength.innerText = "Password is Medium";
         input.style.borderColor = indicator.style.color = strength.style.color = "#cc8500";
         indicator_.classList.remove("fa-circle-exclamation");
         indicator_.classList.remove("fa-circle-check");
         indicator_.classList.add("fa-circle-minus");
      } else if (alphabetMatch || digitsMatch || splCharactersMatch) {
         strength.innerText = "Password is Weak";
         input.style.borderColor = indicator.style.color = strength.style.color = "#ff6333";
         indicator_.classList.remove("fa-circle-check");
         indicator_.classList.remove("fa-circle-minus");
         indicator_.classList.add("fa-circle-exclamation");
      }
   }
});

showHide.addEventListener("click", function () {
   if (input.type === "password") {
      input.type = "text";
      showHide.children[0].classList.replace("fa-eye", "fa-eye-slash");
   } else {
      input.type = "password";
      showHide.children[0].classList.replace("fa-eye-slash", "fa-eye");
   }
});
