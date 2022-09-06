const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const period = document.querySelector(".period");

const hours24Element = document.querySelector(".hours-24");
const minutes24Element = document.querySelector(".minutes-24");
const seconds24Element = document.querySelector(".seconds-24");

let hours, minutes, seconds;
let date, count = 0;

setInterval(setClock, 1000);

function setClock() {
   date = new Date();
   hours = date.getHours().toString().padStart(2, "0");
   minutes = date.getMinutes().toString().padStart(2, "0");
   seconds = date.getSeconds().toString().padStart(2, "0");

   // Setting 24 Hour Clock
   hours24Element.innerText = hours;
   minutes24Element.innerText = minutes;
   seconds24Element.innerText = seconds;

   // Setting 12 Hour Clock
   secondsElement.innerText = seconds;

   if (secondsElement.innerText === "00" || count === 0) {
      minutesElement.innerText = date.getMinutes().toString().padStart(2, "0");

      if (minutesElement.innerText === "00" || count === 0) {
         count++;
         if (date.getHours() > 12) {
            hoursElement.innerText = (date.getHours() - 12).toString().padStart(2, "0");
            if (period.innerText === "A.M.")
               period.innerText = "P.M.";
         } else {
            if (date.getHours() === 0)
               hoursElement.innerText = "12";
            hoursElement.innerText = date.getHours().toString().padStart(2, "0");
            if (period.innerText === "P.M.")
               period.innerText = "A.M.";
         }
      }
   }
}

setClock();
