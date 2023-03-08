const nCards = document.querySelectorAll(".n-cards");
const nCardsContainer = document.querySelector(".n-cards-container");
const gameContainer = document.querySelector(".game-container");
const gameGrid = document.querySelector(".game-grid");
const gameCompletedModal = document.querySelector(".game-completed-modal");

const movesElement = document.querySelector(".moves");
const finalMovesElement = document.querySelector(".final-moves");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const finalTime = document.querySelector(".final-time");

let closeImageElements, openImageElements;
let noOfCards = 0;
let clicks = 0, fixedImages = 0;
let image1Index = -1, image2Index = -1;

nCards.forEach((nCard) => {
   nCard.addEventListener("click", () => {
      noOfCards = parseInt(nCard.dataset.n);

      if (noOfCards === 24) {
         if (window.innerWidth > 500)
            document.documentElement.style.setProperty('--cols', 6);
         else
            document.documentElement.style.setProperty('--cols', 4);
      } else if (noOfCards === 20) {
         if (window.innerWidth > 400)
            document.documentElement.style.setProperty('--cols', 5);
         else
            document.documentElement.style.setProperty('--cols', 4);
      }

      gameGrid.innerHTML = "";

      for (let i = 0; i < noOfCards; i++) {
         gameGrid.innerHTML += `
               <div>
                  <img class="close" src="./images/qm.png" alt="">
                  <img class="open" src="" alt="">
               </div>
            `;
      }

      closeImageElements = document.querySelectorAll(".game-grid > div > .close");
      openImageElements = document.querySelectorAll(".game-grid > div > .open");

      closeImageElements.forEach((closeImageElement, index) => {
         closeImageElement.addEventListener("click", () => {
            closeImageElement.style.display = "none";
            openImageElements[index].style.display = "flex";

            if (clicks === 0) {
               image1Index = index;
               clicks = 1;
            } else if (clicks === 1) {
               movesElement.textContent = parseInt(movesElement.textContent) + 1;

               if (fixedImages === noOfCards - 2) {
                  clearInterval(timerInterval);
                  finalMovesElement.textContent = movesElement.textContent;
                  finalTime.textContent = `${minutesElement.textContent} minutes ${secondsElement.textContent} seconds`;
                  gameCompletedModal.style.display = "flex";
               }

               image2Index = index;
               clicks = 0;
               if (openImageElements[image1Index].src === openImageElements[image2Index].src) { // cards match
                  fixedImages += 2;

                  openImageElements[image1Index].classList.add("fix");
                  openImageElements[image2Index].classList.add("fix");

                  openImageElements[image1Index].style.pointerEvents = "none";
                  openImageElements[image2Index].style.pointerEvents = "none";

                  image1Index = image2Index = -1;
               } else { // cards doesn't match
                  setTimeout(() => {
                     openImageElements[image1Index].click();
                     openImageElements[image2Index].click();
                  }, 1000);
               }
            }
         });
      });

      openImageElements.forEach((openImageElement, index) => {
         openImageElement.addEventListener("click", () => {
            if (clicks === 1) return;

            openImageElement.style.display = "none";
            closeImageElements[index].style.display = "flex";
         });
      });

      nCardsContainer.style.display = "none";
      gameContainer.style.display = "flex";

      startGame();
   });
});

let timerInterval, minutes = 0, seconds = 0;
function startTimer() {
   timerInterval = setInterval(() => {
      seconds = parseInt(secondsElement.textContent);

      if (seconds === 59) {
         secondsElement.textContent = "00";
         minutesElement.textContent = (minutes + 1).toString().padStart(2, "0");
         minutes = parseInt(minutesElement.textContent);
      } else {
         secondsElement.textContent = (seconds + 1).toString().padStart(2, "0");
      }
   }, 1000);
}

function startGame() {
   startTimer();
   const imageArray = Array.from({ length: 30 }, (_, i) => i);
   let randomImageIndex, randomImageValue;

   const imageElementArray = Array.from({ length: noOfCards }, (_, i) => i);
   let randomImageElementIndex, randomImageElementValue;

   for (let i = 0; i < noOfCards / 2; i++) {
      randomImageIndex = Math.floor(Math.random() * imageArray.length);
      randomImageValue = imageArray[randomImageIndex];

      randomImageElementIndex = Math.floor(Math.random() * imageElementArray.length);
      randomImageElementValue = imageElementArray[randomImageElementIndex];

      openImageElements[randomImageElementValue].setAttribute("src", `./images/image${randomImageValue}.jpg`);
      imageArray.splice(randomImageIndex, 1);
      imageElementArray.splice(randomImageElementIndex, 1);

      randomImageElementIndex = Math.floor(Math.random() * imageElementArray.length);
      randomImageElementValue = imageElementArray[randomImageElementIndex];

      openImageElements[randomImageElementValue].setAttribute("src", `./images/image${randomImageValue}.jpg`);
      imageArray.splice(randomImageIndex, 1);
      imageElementArray.splice(randomImageElementIndex, 1);
   }
}

const closeBtn = document.querySelector(".close-btn");
function home() {
   gameGrid.innerHTML = "";
   gameContainer.style.display = "none";
   nCardsContainer.style.display = "flex";

   clearInterval(timerInterval);
   minutesElement.textContent = "00";
   secondsElement.textContent = "00";
   movesElement.textContent = 0;
   clicks = 0;
   image1Index = -1;
   image2Index = -1;
   fixedImages = 0;

   closeBtn.click();
}

function restart() {
   openImageElements.forEach((openImageElement, index) => {
      openImageElement.style.display = "none";
      closeImageElements[index].style.display = "flex";
   });

   clearInterval(timerInterval);
   minutesElement.textContent = "00";
   secondsElement.textContent = "00";
   movesElement.textContent = 0;
   clicks = 0;
   image1Index = -1;
   image2Index = -1;
   fixedImages = 0;

   startGame();

   closeBtn.click();
}

// Navbar Javascript
const navHomeBtn = document.querySelector(".nav-home-btn");
const navRestartBtn = document.querySelector(".nav-restart-btn");

navHomeBtn.addEventListener("click", () => home());
navRestartBtn.addEventListener("click", () => restart());

// Modal Javascipt
const homeBtn = document.querySelector(".home-btn");
const restartBtn = document.querySelector(".restart-btn");

homeBtn.addEventListener("click", () => home());
restartBtn.addEventListener("click", () => restart());
closeBtn.addEventListener("click", () => gameCompletedModal.style.display = "none");
