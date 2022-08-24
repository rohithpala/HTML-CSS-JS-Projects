const board = document.getElementsByClassName("board")[0];
const cells = document.querySelectorAll(".cell");
const turnText = document.getElementsByClassName("turn")[0];
const resultWindowModal = document.getElementsByClassName("result-window-modal")[0];
const result = document.getElementsByClassName("result")[0];
const view = document.getElementsByClassName("view")[0];
const restart = document.getElementsByClassName("restart")[0];
const restartContainer = document.getElementsByClassName("restart-container")[0];
const restartInRestartContainer = document.getElementsByClassName("restart-button")[0];
let turn;

// all possible winning combinations
const winningCombinations = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
];

// starting the game
setup();

function setup() {
   board.classList.remove("turn-x", "turn-o");
   resultWindowModal.style.display = "none";
   restartContainer.style.display = "none";

   for (let cell of cells) {
      cell.style.pointerEvents = "all";
      cell.classList.remove("x", "o");
      cell.addEventListener("click", fillCell);
   }

   turn = Math.round(Math.random(0, 1)) == 1 ? "x" : "o";
   board.classList.add("turn-" + turn);
   turnText.textContent = turn.toUpperCase() + "'s Turn";
}

function fillCell() {
   this.classList.add(turn);
   this.style.pointerEvents = "none";

   if (didPlayerWin()) {
      for (let cell of cells) {
         cell.style.pointerEvents = "none";
      }
      resultWindowModal.style.display = "flex";
      result.textContent = `"` + turn.toUpperCase() + `"` + " is the Winner";
   } else if (isItDraw()) {
      resultWindowModal.style.display = "flex";
      result.textContent = "It is a Draw";
   }

   board.classList.remove("turn-" + turn);
   turn = turn == "x" ? "o" : "x";
   board.classList.add("turn-" + turn);
   turnText.textContent = turn.toUpperCase() + "'s Turn";
}

function didPlayerWin() {
   // we loop through every combination and
   // then we loop through every index in each combination
   // and check if the cell with that index has the
   // turn class in it. If it has, then the current player is winner,
   // so return true
   // else, we return false;
   return winningCombinations.some(combination => {
      return combination.every(c => {
         if (cells[c].classList.contains(turn)) {
            return true;
         }

         return false;
      });
   });
}

function isItDraw() {
   // looping through every cell and checking if every cell
   // has an "x" or an "o". If it has, then it is a draw, so return true
   // else it is not, so we return false
   return [...cells].every(c => {
      if (c.classList.contains("x") || c.classList.contains("o")) {
         return true;
      }

      return false;
   });
}

view.addEventListener("click", function () {
   resultWindowModal.style.display = "none";
   restartContainer.style.display = "flex";
});

restart.addEventListener("click", setup);
restartInRestartContainer.addEventListener("click", setup);
