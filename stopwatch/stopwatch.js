const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const milliSecondsElement = document.querySelector('.milliseconds');

let stopwatch;
startButton.addEventListener("click", function () {
   if (startButton.innerText === "Start" || startButton.innerText === "Resume") {
      startButton.innerText = "Pause";
      resetButton.innerText = "Lap";
      resetButton.style.display = "initial";
      resetButton.classList.add("lap");

      stopwatch = setInterval(start, 10);
   } else {
      startButton.innerText = "Resume";
      resetButton.innerText = "Reset";
      resetButton.classList.remove("lap");

      clearInterval(stopwatch);
   }
});

resetButton.addEventListener("click", resetOrLap);

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

let lapCounter = 1, recentLap;
const lapContainer = document.querySelector(".lap-container");
const lapTable = document.querySelector('.laps');
let row;
function resetOrLap() {
   if (resetButton.innerText === "Reset") {
      clearInterval(stopwatch);

      startButton.innerText = "Start";
      lapContainer.style.display = "none";
      lapTable.innerHTML =
         `
         <thead>
            <tr>
               <th>Lap</th>
               <th>Time</th>
               <th>Difference</th>
            </tr>
         </thead>

         <tbody>
         </tbody>
      `;
      lapCounter = 1;
      recentLap = [0, 0, 0, 0];
      resetButton.style.display = "none";

      hoursElement.innerText = "00";
      minutesElement.innerText = "00";
      secondsElement.innerText = "00";
      milliSecondsElement.innerText = "00";
   } else {
      lapContainer.style.display = "flex";
      row = lapTable.insertRow();
      row.insertCell().innerText = lapCounter;
      row.insertCell().innerText =
         hoursElement.innerText + ":" +
         minutesElement.innerText + ":" +
         secondsElement.innerText + ":" +
         milliSecondsElement.innerText;

      // let splitted = t.split(":");
      // let ms = Number(splitted[0]) * 60 * 60 * 1000 + Number(splitted[1]) * 60 * 1000 + Number(splitted[2]) * 1000 + Number(splitted[3]);
      // console.log(ms);

      recentLap = recentLap === undefined ?

         [hoursElement.innerText, minutesElement.innerText, secondsElement.innerText, milliSecondsElement.innerText] :

         [(parseInt(hoursElement.innerText) - recentLap[0]).toString().padStart(2, "0"),
         (parseInt(minutesElement.innerText) - recentLap[1]).toString().padStart(2, "0"),
         (parseInt(secondsElement.innerText) - recentLap[2]).toString().padStart(2, "0"),
         (parseInt(milliSecondsElement.innerText) - recentLap[3]).toString().padStart(2, "0")];

      row.insertCell().innerText = "+" + recentLap[0] + ":" + recentLap[1] + ":" + recentLap[2] + ":" + recentLap[3];
      lapCounter++;
   }
}
