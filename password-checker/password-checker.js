const passwordField = document.getElementById("password-input");
passwordField.addEventListener("input", passwordCheck);

function passwordCheck() {
   const password = passwordField.value;
   const len = password.length;

   const rangeStyle = document.getElementById("range-constraint").style;
   const uppercaseStyle = document.getElementById("uppercase-constraint").style;
   const lowercaseStyle = document.getElementById("lowercase-constraint").style;
   const digitStyle = document.getElementById("digit-constraint").style;
   const splCharStyle = document.getElementById("spl-char-constraint").style;
   const meter = document.getElementById("password-strength-meter");
   const ps = document.getElementById("password-strength");

   const correct = document.querySelectorAll(".correct");
   const wrong = document.querySelectorAll(".wrong");

   const constraints = document.querySelectorAll(".constraints-para");
   const numOfConstraints = constraints.length;

   const inRange = len >= 8 && len <= 16;
   let i;
   if (len === 0) {
      rangeStyle.color = uppercaseStyle.color = lowercaseStyle.color = digitStyle.color = splCharStyle.color = "#fff";

      for (i = 0; i < numOfConstraints; i++) {
         correct[i].style.color = "#fff";
         correct[i].style.display = "inherit";
         wrong[i].style.display = "none";
      }

      meter.value = "0";
      ps.innerText = "Very Weak";
   } else {
      // checking constraints
      const uppercase = /[A-Z]/.test(password);
      const lowercase = /[a-z]/.test(password);
      const digit = /[0-9]/.test(password);
      const splChar = /[!#@?+_=\.\*]/.test(password);

      const testArray = [inRange, uppercase, lowercase, digit, splChar];

      for (i = 0; i < numOfConstraints; i++) {
         if (testArray[i]) {
            correct[i].style.display = "inherit";
            wrong[i].style.display = "none";
            constraints[i].style.color = correct[i].style.color = "#0f0";
         } else {
            correct[i].style.display = "none";
            wrong[i].style.display = "inherit";
            constraints[i].style.color = wrong[i].style.color = "#f00";
         }
      }

      if (testArray.every(v => v === true)) {
         meter.value = "100";
         ps.innerText = "Very Strong";
      } else if (uppercase && lowercase && !digit && splChar) {
         meter.value = "75";
         ps.innerText = "Strong";
      } else if (uppercase && lowercase && digit && !splChar) {
         meter.value = "50";
         ps.innerText = "Medium";
      } else if (uppercase && lowercase && !digit && !splChar) {
         meter.value = "25";
         ps.innerText = "Weak";
      } else {
         meter.value = "0";
         ps.innerText = "Very Weak";
      }
   }
}
