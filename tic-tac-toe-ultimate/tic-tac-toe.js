const boards = document.querySelectorAll(".board");
const largeCells = document.querySelectorAll(".large-cell");
const cellElements = document.getElementsByClassName("cell");
let cells; // this is a 2d array that contains cells of each largeCell in an array

const turnText = document.getElementsByClassName("turn")[0];
const resultWindowModal = document.getElementsByClassName("result-window-modal")[0];
const result = document.getElementsByClassName("result")[0];
const view = document.getElementsByClassName("view")[0];
const restart = document.getElementsByClassName("restart")[0];
const restartContainer = document.getElementsByClassName("restart-container")[0];
const restartInRestartContainer = document.getElementsByClassName("restart-button")[0];
let turn;
let x = [], o = [];

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
   boards.forEach(board => {
      board.classList.remove("turn-x", "turn-o");
   });
   resultWindowModal.style.display = "none";
   restartContainer.style.display = "none";

   // storing references of all cells in "cells"
   cells = [];
   for (let i = 0; i < 9; i++) {
      cells.push([]);
      for (let j = 0; j < 9; j++) {
         cells[i].push(cellElements.item(i * 9 + j));
      }
   }

   for (let cell of cellElements) {
      cell.style.pointerEvents = "all";
      cell.classList.remove("x", "o");
      cell.addEventListener("click", fillCell);
   }

   turn = Math.round(Math.random(0, 1)) == 1 ? "x" : "o";
   boards.forEach(board => {
      board.classList.add("turn-" + turn);
   });
   turnText.textContent = turn.toUpperCase() + "'s Turn";
}

function fillCell() {
   const parent = this.parentNode;
   if (parent.classList.contains("turn-no"))
      return;

   this.classList.add(turn);
   this.style.pointerEvents = "none";

   let res;
   if (res = didPlayerWinACell()) {
         console.log(res);
   }
   //    for (let cell of cells) {
   //       cell.style.pointerEvents = "none";
   //    }
   //    resultWindowModal.style.display = "flex";
   //    result.textContent = `"` + turn.toUpperCase() + `"` + " is the Winner";
   // } else if (isItDraw()) {
   //    resultWindowModal.style.display = "flex";
   //    result.textContent = "It is a Draw";
   // }

   boards.forEach(board => {
      board.classList.remove("turn-" + turn);
   });
   turn = turn === "x" ? "o" : "x";
   boards.forEach(board => {
      board.classList.add("turn-" + turn);
   });
   turnText.textContent = turn.toUpperCase() + "'s Turn";

   goToNextCell(this);
}

function goToNextCell(clickedCell) {
   nextCell = -1;
   for (let i = 0; i < 9; i++) {
      // i is the index of largeCell
      if (cells[i].includes(clickedCell)) {
         nextCell = cells[i].indexOf(clickedCell);
         break;
      }
   }

   for (let i = 0; i < 9; i++) {
      if (largeCells[i].id === "largeCell" + nextCell) {
         boards[i].classList.add("turn-" + turn);
         boards[i].classList.remove("turn-no");
         largeCells[i].style.backgroundColor = "#ddd";
      } else {
         boards[i].classList.add("turn-no");
         boards[i].classList.remove("turn-x", "turn-o");
         largeCells[i].style.backgroundColor = "#aaa";
      }
   }
}

function didPlayerWinACell() {
   // we loop through every combination and
   // then we loop through every index in each combination
   // and check if the cell with that index has the
   // turn class in it. If it has, then the current player is winner,
   // so return true
   // else, we return false;
   for (let i = 0; i < 9; i++) {
      winningCombinations.some(combination => {
         combination.every(c => {
            if (cells[i][c].classList.contains(turn)) {
               console.log(i, c);
            }
         });
      });
   }
}

// function isItDraw() {
//    // looping through every cell and checking if every cell
//    // has an "x" or an "o". If it has, then it is a draw, so return true
//    // else it is not, so we return false
//    return [...cells].every(c => {
//       if (c.classList.contains("x") || c.classList.contains("o")) {
//          return true;
//       }

//       return false;
//    });
// }

view.addEventListener("click", function () {
   resultWindowModal.style.display = "none";
   restartContainer.style.display = "flex";
});

restart.addEventListener("click", setup);
restartInRestartContainer.addEventListener("click", setup);
