const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const milliSecondsElement = document.querySelector('.milliseconds');

let stopwatch;
startButton.addEventListener("click", function() { 
   if (startButton.innerText === "Start" || startButton.innerText === "Resume") {
      startButton.innerText = "Pause";
      resetButton.disabled = true;
      stopwatch = setInterval(start, 10);
   } else {
      startButton.innerText = "Resume";
      resetButton.disabled = false;
      clearInterval(stopwatch);
   }
});

resetButton.addEventListener("click", reset);

function start() {
   milliSecondsElement.innerText = (parseInt(milliSecondsElement.innerText) + 1).toString().padStart(2, "0");
   if (milliSecondsElement.innerText === "100") {
      milliSecondsElement.innerText = "00";

      secondsElement.innerText = (parseInt(secondsElement.innerText) + 1).toString().padStart(2, "0");
      if (secondsElement.innerText === "60") {
         secondsElement.innerText = "00";

         minutesElement.innerText = (parseInt(minutesElement.innerText) + 1).toString().padStart(2, "0");
         if (minutesElement.innerText === "60") {
            hoursElement.innerText = (parseInt(hoursElement.innerText) + 1).toString().padStart(2, "0");
         }
      }
   }
}

function reset() {
   clearInterval(stopwatch);

   startButton.innerText = "Start";

   hoursElement.innerText = "00";
   minutesElement.innerText = "00";
   secondsElement.innerText = "00";
   milliSecondsElement.innerText = "00";
}
