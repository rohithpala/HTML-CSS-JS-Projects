let highlighted = "login";
function change(calledBy) {
     if (calledBy != highlighted) {
          let loginStyle = document.getElementById('login-link').style;
          let signupStyle = document.getElementById('signup-link').style;
          if (calledBy === "login") {
               loginStyle.backgroundColor = "#1e1e1e";
               signupStyle.backgroundColor = "#4e4e4e";
               highlighted = "login";
          } else if (calledBy === "signup") {
               signupStyle.backgroundColor = "#1e1e1e";
               loginStyle.backgroundColor = "#4e4e4e";
               highlighted = "signup";
          }

          if (highlighted === "signup") {
               // Checking if re-password field is already present
               if (!(document.getElementById('re-password-container') || false)) {
                    document.getElementById('button').remove();
                    document.getElementById('form').innerHTML += `
                         <div id="re-password-container">
                              <label for="re-password">Re-type Password:</label>
                              <input type="password" class='fields' id="re-password" placeholder="Re-type Password">
                              <i class="fas fa-eye toggle-re-password" id="re-eye-open" onclick="togglePassword('re-password')"></i>
                              <i class="fas fa-eye-slash toggle-re-password" id="re-eye-close" onclick="togglePassword('re-password')"></i>
                              <span id="re-password-error">Passwords doesn't match</span>
                         </div>

                         <button id="button" onclick="passwordValidation()">SignUp</button>
                    `;
                    document.getElementById('eye-open').style.display = 'inherit';
                    document.getElementById('eye-close').style.display = 'none';
                    document.getElementById('re-eye-open').style.display = 'inherit';
                    document.getElementById('re-eye-close').style.display = 'none';
               }
               document.getElementById('email-address').value = "";
               document.getElementById('password').value = "";
               document.getElementById('re-password').value = "";

               // TODO: bug with eye icon

          } else if (highlighted === "login") {
               if (document.getElementById('re-password') || false)
                    document.getElementById("re-password-container").remove();
               document.getElementById('button').innerText = "Login";
               document.getElementById('email-address').value = "";
               document.getElementById('password').value = "";
               document.getElementById('eye-open').style.display = 'inherit';
               document.getElementById('eye-close').style.display = 'none';
          }
     }
}

function passwordValidation() {
     const password = document.getElementById('password').value;
     const passwordRangeError = document.getElementById('password-range-error');
     let len = password.length;
     if (len >= 8 && len <= 16) {
          passwordRangeError.style.display = 'none';
          let i, char, error = true;
          let hasUpperCase = false, hasLowerCase = false, hasDigit = false, hasSpecialCharacter = false;
          for (i = 0; i < len; i++) {
               char = password.charAt(i);
               if (char >= 'A' && char <= 'Z') hasUpperCase = true;
               else if (char >= 'a' && char <= 'z') hasLowerCase = true;
               else if (char >= '0' && char <= '9') hasDigit = true;
               else hasSpecialCharacter = true;

               if (hasUpperCase && hasLowerCase && hasDigit && hasSpecialCharacter) {
                    error = false;
                    break;
               }
          }

          if (!error) {
               checkPasswords();
          } else {
               let errorMessage = "";
               if (!hasUpperCase) errorMessage += "Password must contain atleast one Uppercase letter\n";
               if (!hasLowerCase) errorMessage += "Password must contain atleast one Lowercase letter\n";
               if (!hasDigit) errorMessage += "Password must contain atleast one Digit\n";
               if (!hasSpecialCharacter) errorMessage += "Password must contain atleast one Special Character\n";
               alert(errorMessage.substring(0, errorMessage.length - 1));
          }
     } else if (len != 0) {
          passwordRangeError.style.display = 'inherit';
          passwordRangeError.innerText = 'Password not in Range';
     }
}

function checkPasswords() {
     const rePasswordError = document.getElementById('re-password-error');
     if (document.getElementById('password').value != document.getElementById('re-password').value) {
          rePasswordError.style.display = 'inherit';
          rePasswordError.innerText = "Passwords doesn't match";

          document.getElementById('re-eye-open').style.top =
               document.getElementById('re-eye-close').style.top = '55%';
     } else {
          rePasswordError.style.display = 'none';

          location.href = "https://www.github.com";

          document.getElementById('re-eye-open').style.top =
               document.getElementById('re-eye-close').style.top = '50%';
     }
}

function togglePassword(calledBy) {
     const p = document.getElementById(calledBy);
     let eyeOpen, eyeClose;
     if (calledBy === 're-password') {
          eyeOpen = document.getElementById('re-eye-open').style;
          eyeClose = document.getElementById('re-eye-close').style;
     } else {
          eyeOpen = document.getElementById('eye-open').style;
          eyeClose = document.getElementById('eye-close').style;
     }
     if (p.type === 'password') {
          p.type = 'text';
          eyeOpen.display = 'none'; a
          eyeClose.display = 'inherit';
     } else {
          p.type = 'password';
          eyeClose.display = 'none';
          eyeOpen.display = 'inherit';
     }
}