let number;

function startGame() {
     let minimum = document.getElementById('minimum').value;
     let maximum = document.getElementById('maximum').value;

     if (minimum === "" && maximum === "") {
          alert('Please input the minimum and maximum values');
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
               const userInput = document.getElementById('user-number-input');
               userInput.min = minimum;
               userInput.max = maximum;
               showMessage();
          }
     }
}

function showMessage() {
     document.getElementById('guessed-number-container').style.display = 'flex';
     setTimeout(function () {
          document.getElementById('your-turn-text').style.display = 'inherit';
     }, 1000);
     setTimeout(function () {
          document.getElementById('go').style.display = 'inherit';
     }, 2000);
}

function showUserContainer() {
     gncStyle = document.getElementById('guessed-number-container').style;
     gncStyle.border = "2px solid #000";
     gncStyle.opacity = "0.5";
     gncStyle.pointerEvents = 'none';
     gncStyle.userSelect = 'none';

     ucStyle = document.getElementById('user-container').style;
     ucStyle.display = 'flex';
     ucStyle.border = "2px solid #fff";

     document.getElementById('chances-left').innerText = document.getElementById('chances').innerText;
}

function checkTheGuess() {
     let guessedNumber = document.getElementById('user-number-input').value;
     if (guessedNumber === "") {
          alert("Please type a number first");
     } else {
          guessedNumber = parseInt(guessedNumber);     
          const chancesLeftText = document.getElementById('chances-left');
          const hint = document.getElementById('hint');
          hint.style.display = 'inherit';
          hint.style.marginTop = "10px";

          let guessed = false;
          if (guessedNumber < number) {
               hint.innerText = "Your Guess is LESS than the Number";
          } else if (guessedNumber > number) {
               hint.innerText = "Your Guess is GREATER than the Number";
          } else {
               hint.innerText = "Hurray! You GUESSED it";
               hint.style.backgroundColor = "#0f0";
               guessed = true;
          }

          if (guessed || chancesLeftText.innerText === '0') {
               if (chancesLeftText.innerText === '0') {
                    hint.style.backgroundColor = "#f00";
                    hint.innerText = "You lost. The number was: " + number;
               }
               document.getElementById('user-number-input').disabled = true;
               document.getElementById('submit-button').style.pointerEvents = 'none';
               document.getElementById('start-over').style.display = 'inherit';
          } else {
               document.getElementById('previous-guesses').innerText += " " + guessedNumber;
               chancesLeftText.innerText = parseInt(chancesLeftText.innerText) - 1;
          }
     }
}

function startOver() {
     gncStyle = document.getElementById('guessed-number-container').style;
     gncStyle.display = 'none';
     gncStyle.border = 'none';
     gncStyle.opacity = '1';
     gncStyle.pointerEvents = 'auto';

     document.getElementById('your-turn-text').style.display = 'none';
     document.getElementById('go').style.display = 'none';
     document.getElementById('user-container').style.display = 'none';
     document.getElementById('start-over').style.display = 'none';

     document.getElementById('user-number-input').disabled = false;

     document.getElementById('minimum').value = document.getElementById('maximum').value = document.getElementById('user-number-input').value = "";

     document.getElementById('submit-button').style.pointerEvents = 'auto';

     document.getElementById('previous-guesses').innerText = "";

     const hintStyle = document.getElementById('hint').style;
     hintStyle.backgroundColor = "#07a";
     hintStyle.display = 'none';
}
