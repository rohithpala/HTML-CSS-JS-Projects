const container = document.querySelector(".container");
const showHidePw = document.getElementsByClassName("showHidePw");
const pwFields = document.querySelector(".password");

console.log(Array.from(showHidePw));

showHidePw.forEach(icon => {
   icon.addEventListener("click", () => {
      pwFields.forEach(pwField => {
         if (pwField.type === "password") {
            pwField.type = "text";
            icon.classList.add("uil-eye-slash");
            icon.classList.remove("uil-eye");
         } else {
            pwField.type = "password";
            icon.classList.add("uil-eye");
            icon.classList.remove("uil-eye-slash");
         }
      });
   });
});
