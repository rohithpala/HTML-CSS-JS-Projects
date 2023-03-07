const wordInput = document.querySelector(".word-input");
const rank = document.querySelector(".rank");
const rankButton = document.querySelector(".rank-btn");
let rankNumbers = [];
let noOfRepeatingLetters = [];

function factorial(num) {
   if (num == 0 || num == 1) return 1;
   return num * factorial(num - 1);
}

rankButton.addEventListener("click", () => {
   const splittedWord = wordInput.value.split("");
   const sortedLetters = splittedWord.sort();
   rank.textContent = findRank(splittedWord, sortedLetters);
});

function findRank(splittedWord, sortedLetters) {
   let j = 0, len = wordInput.length;
   for(let i = 0 ; i < splittedWord.length ; i++) {
      if(splittedWord[i] != sortedLetters[j]) {
         rankNumbers.push(factorial(len - j - 1));
      } else {
         j++;
      }
   }
}
