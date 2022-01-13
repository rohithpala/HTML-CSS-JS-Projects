email = document.getElementById("email-address").value;
password = document.getElementById("password").value;
error = document.getElementById("error");

function checkCredentials() {
   if (email === "" || password === "") {
      error.style.display = "none";
   } else {
      //check in database
      if (true/* in database*/) {
         // go to homepage of user
      } else {
         error.style.display = "inherit";
         erro.innerText = "Invalid Email ID/Password";
      }

   }
}