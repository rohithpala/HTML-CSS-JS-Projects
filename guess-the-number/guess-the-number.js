const minElement = document.getElementById("minimum");
const maxElement = document.getElementById("maximum");

const guessedNumConatinerStyle = document.getElementById("guessed-number-container").style;
const yourTurnTextStyle = document.getElementById("your-turn-text").style;
const goButtonStyle = document.getElementById("go").style;

const userConatinerStyle = document.getElementById("user-container").style;
const chancesLeft = document.getElementById("chances-left");
const chances = document.getElementById("chances");
const userInput = document.getElementById("user-number-input");
const previousGuesses = document.getElementById("previous-guesses");
const submitButtonStyle = document.getElementById("submit-button").style;
const hint = document.getElementById("hint");
const startOverStyle = document.getElementById("start-over").style;

let number;

function startGame() {
   let minimum = minElement.value;
   let maximum = maxElement.value;

   if (minimum === "" && maximum === "") {
      alert("Please input the minimum and maximum values");
   } else if (minimum === "") {
      alert("Please input the minimum value");
   } else if (maximum === "") {
      alert("Please input the maximum value");
   } else {
      minimum = parseInt(minimum);
      maximum = parseInt(maximum);
      if (minimum > maximum) {
         alert("Minimum value cannot be greater than Maximum value (or)\n" +
            "Maximum value cannot be lesser than Minimum value");
      } else if (minimum === maximum) {
         alert("Minimum value cannot be equal to Maximum value");
      } else {
         number = Math.floor(Math.random() * (maximum - minimum)) + minimum;
         userInput.min = minimum;
         userInput.max = maximum;
         showMessage();
      }
   }
}

function showMessage() {
   guessedNumConatinerStyle.display = "flex";
   setTimeout(function () {
      yourTurnTextStyle.display = "inherit";
   }, 1000);
   setTimeout(function () {
      goButtonStyle.display = "inherit";
   }, 2000);
}

function showUserContainer() {
   guessedNumConatinerStyle.border = "2px solid #000";
   guessedNumConatinerStyle.opacity = "0.5";
   guessedNumConatinerStyle.pointerEvents = "none";
   guessedNumConatinerStyle.userSelect = "none";

   userConatinerStyle.display = "flex";
   userConatinerStyle.border = "2px solid #fff";

   chancesLeft.innerText = chances.innerText;
}

let guessedNumber, guessed = false;
function checkTheGuess() {
   guessedNumber = userInput.value;
   if (guessedNumber === "") {
      alert("Please type a number first");
   } else {
      guessedNumber = parseInt(guessedNumber);
      hint.style.display = "inherit";

      if (guessedNumber < number) {
         hint.innerHTML = `Your Guess is LESS than the Number`;
      } else if (guessedNumber > number) {
         hint.innerHTML = `Your Guess is GREATER than the Number`;
      } else {
         hint.innerText = "Hurray! You GUESSED it";
         hint.style.backgroundColor = "#0f0";
         guessed = true;
      }

      if (guessed || chancesLeft.innerText === "0") {
         userInput.disabled = true;
         submitButtonStyle.pointerEvents = "none";
         startOverStyle.display = "inherit";
      } else {
         previousGuesses.innerText += (previousGuesses.innerText === "" ? "" : ", ") + guessedNumber;
         chancesLeft.innerText = parseInt(chancesLeft.innerText) - 1;
         
         if (chancesLeft.innerText === "0") {
            hint.style.backgroundColor = "#f00";
            hint.innerText = "You lost. The number was: " + number;
            userInput.disabled = true;
            submitButtonStyle.pointerEvents = "none";
            startOverStyle.display = "inherit";
         }
      }
   }
}

function startOver() {
   guessedNumConatinerStyle.display = "none";
   guessedNumConatinerStyle.border = "none";
   guessedNumConatinerStyle.opacity = "1";
   guessedNumConatinerStyle.pointerEvents = "auto";

   yourTurnTextStyle.display = "none";
   goButtonStyle.display = "none";
   userConatinerStyle.display = "none";
   startOverStyle.display = "none";

   userInput.disabled = false;

   minElement.value = maxElement.value = userInput.value = "";

   submitButtonStyle.pointerEvents = "auto";

   previousGuesses.innerText = "";

   hint.style.backgroundColor = "#07a";
   hint.style.display = "none";
}
