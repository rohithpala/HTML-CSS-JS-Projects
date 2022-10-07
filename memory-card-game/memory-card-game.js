const nCards = document.querySelectorAll(".n-cards");

let noOfCards = 0, images = [];

nCards.forEach((nCard) => {
   nCard.addEventListener("click", () => {
      noOfCards = parseInt(nCard.getAttribute("data-n"));
      document.querySelector(".n-cards-container").style.display = "none";
      document.querySelector(".game-container").style.display = "flex";
      startGame();
   });
});

let gameGrid = document.querySelector(".game-grid");
console.log(gameGrid)
function startGame() {
   for (let i = 0 ; i < noOfCards / 2 ; i++)
      images.push("https://picsum.photos/200/175");
   for (let i = 0 ; i < noOfCards ; i++) {
      gameGrid.innerHTML += `<div class="card"><img src="${images[i/2]}"></div>`;
   }
}
