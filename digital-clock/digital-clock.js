const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const period = document.querySelector(".period");
let date, count = 0;

setInterval(setClock, 1000);

function setClock() {
   date = new Date();

   seconds.innerText = date.getSeconds().toString().padStart(2, "0");

   if (seconds.innerText === "00" || count === 0) {
      minutes.innerText = date.getMinutes().toString().padStart(2, "0");

      if (minutes.innerText === "00" || count === 0) {
         count++;
         if (date.getHours() > 12) {
            hours.innerText = (date.getHours() - 12).toString().padStart(2, "0");
            if (period.innerText === "A.M.")
               period.innerText = "P.M.";
         } else {
            hours.innerText = date.getHours().toString().padStart(2, "0");
            if (period.innerText === "P.M.")
               period.innerText = "A.M.";
         }
      }
   }
}

setClock();
