// Syncing the Range input and Number input
const passwordLengthRange = document.getElementById("password-length-range");
const passwordLengthNumber = document.getElementById("password-length-number");
passwordLengthRange.addEventListener("input", syncPasswordLength);
passwordLengthNumber.addEventListener("input", syncPasswordLength);
function syncPasswordLength(e) {
   const value = e.target.value;
   if (value < parseInt(passwordLengthNumber.min)) {
      passwordLengthNumber.value = passwordLengthNumber.min;
   } else {
      if (value > parseInt(passwordLengthNumber.max)) {
         passwordLengthNumber.value = passwordLengthNumber.max;
      } else {
         passwordLengthNumber.value = value;
      }
      passwordLengthRange.value = value;
   }
}

// Initializing all the character strings
const UPPERCASE_CHARACTERS = getStringOfCharacters(65, 90);
const LOWERCASE_CHARACTERS = getStringOfCharacters(97, 122);
const DIGITS = getStringOfCharacters(48, 57);
const SYMBOLS = getStringOfCharacters(33, 47).concat(getStringOfCharacters(58, 64))
   .concat(getStringOfCharacters(91, 96)).concat(getStringOfCharacters(123, 126));

// function that initializes all the character strings
function getStringOfCharacters(low, high) {
   let string = "", i;
   for (i = low; i <= high; i++) string += String.fromCharCode(i);
   return string;
}

// funtion that generates password
function generatePassword() {
   const includeUppercase = document.getElementById("uppercase").checked;
   const includeLowercase = document.getElementById("lowercase").checked;
   const includeDigits = document.getElementById("digits").checked;
   const includeSymbols = document.getElementById("symbols").checked;

   // if no constaint is selected
   if (!includeUppercase && !includeLowercase && !includeDigits && !includeSymbols) {
      document.getElementById("password").innerText = "Your Password Comes Here";
      alert("Please check atleast one checkbox to generate a password");
   } else {
      const passwordLength = document.getElementById("password-length-number").value;

      // initializing the "characters" string based on the constraints
      let characters = "";
      if (includeUppercase) characters += UPPERCASE_CHARACTERS;
      if (includeLowercase) characters += LOWERCASE_CHARACTERS;
      if (includeDigits) characters += DIGITS;
      if (includeSymbols) characters += SYMBOLS;

      const charactersLength = characters.length;
      let i, password = "";
      for (i = 0; i < passwordLength; i++) {
         // getting a random character form the "characters" string and adding it to "password" string
         password += characters[Math.floor(Math.random() * charactersLength)];
      }

      // displaying password
      document.getElementById("password").innerText = password;
   }
}

// function to copy password to clipboard
function copyToClipboard() {
   const password = document.getElementById("password").innerText;
   if (password === "Your Password Comes Here") {
      alert("Please Generate a Password First");
   } else {
      navigator.clipboard.writeText(password);
      alert("Copied Password to Clipboard");
   }
}
