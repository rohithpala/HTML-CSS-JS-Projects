const input = document.querySelector("input");
const showHide = document.getElementsByClassName("show-hide")[0];
const strengthContainer = document.querySelector(".strength-container");
const indicator = document.querySelector(".indicator");
const strength = document.querySelector(".strength");

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
      const indicatorClassList = indicator.classList;

      if (alphabetMatch && digitsMatch && splCharactersMatch && password.length >= 8) {
         strength.innerText = "Password is Strong";
         input.style.borderColor = showHide.style.color = indicator.style.color = strength.style.color = "#0f0";
         indicatorClassList.remove("fa-exclamation-circle");
         indicatorClassList.add("fa-check-circle");
      } else if (alphabetMatch || digitsMatch || splCharactersMatch) {
         strength.innerText = "Password is Weak";
         input.style.borderColor = showHide.style.color = indicator.style.color = strength.style.color = "#ff6333";
         indicatorClassList.remove("fa-check-circle");
         indicatorClassList.add("fa-exclamation-circle");
      }
   }
});

showHide.addEventListener("click", function () {
   if (input.type === "password") {
      console.log(1);
      input.type = "text";
      showHide.classList.replace("fa-eye-slash", "fa-eye");
   } else {
      input.type = "password";
      showHide.classList.replace("fa-eye", "fa-eye-slash");
   }
});
