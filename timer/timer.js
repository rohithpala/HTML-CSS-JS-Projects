let timerVar;

function inputChanged(id) {
   const element = document.getElementById(id);
   const max = parseInt(element.max);
   const min = parseInt(element.min);
   const elementValue = parseInt(element.value);
   if (elementValue < min) {
      element.value = min;
   } else if (elementValue > max) {
      element.value = max;
   }
}

function timer() {
   const hr = document.getElementById("hours");
   const min = document.getElementById("minutes");
   const sec = document.getElementById("seconds");
   if (hr.value === "0" && min.value === "0" && sec.value === "0") {
      stopTimer();
      document.getElementById("start").innerText = "Start";
      hr.readOnly = min.readOnly = sec.readOnly = false;
      document.getElementById("audio").play();
   } else {
      if (sec.value === "0") {
         if (min.value === "0") {
            hr.value = parseInt(hr.value) - 1;
            min.value = sec.value = "59";
         } else {
            min.value = parseInt(min.value) - 1;
            sec.value = "59";
         }
      } else {
         sec.value = parseInt(sec.value) - 1;
      }
   }
}

function startTimer(button) {
   const hr = document.getElementById("hours");
   const min = document.getElementById("minutes");
   const sec = document.getElementById("seconds");

   if (hr.value === "" || min.value === "" || sec.value === "" || (hr.value === "0" && min.value === "0" && sec.value === "0")) {
      alert("Set the timer before starting it");
   } else {
      hr.value = parseInt(hr.value);
      min.value = parseInt(min.value);
      sec.value = parseInt(sec.value);
      if ((hr.value < 0) || !(0 <= min.value && min.value <= 59) || !(0 <= sec.value && sec.value <= 59)) {
         alert("Timer fields are out of Range");
         resetTimer();
      } else {
         if (button.innerText === "Resume" || button.innerText === "Start") {
            button.innerText = "Pause";
            timerVar = setInterval(timer, 1000);
            hr.readOnly = min.readOnly = sec.readOnly = true;
         } else if (button.innerText === "Pause") {
            button.innerText = "Resume";
            stopTimer();
            hr.readOnly = min.readOnly = sec.readOnly = false;
         }
      }
   }
}

function stopTimer() {
   clearInterval(timerVar);
}

function reset() {
   const hr = document.getElementById("hours");
   const min = document.getElementById("minutes");
   const sec = document.getElementById("seconds");

   stopTimer();
   hr.readOnly = min.readOnly = sec.readOnly = false;
   hr.value = min.value = sec.value = "0";

   document.getElementById("start").innerText = "Start";

   document.getElementById("alert-audio-select").value = "1";
   document.getElementById("audio").src = "timer-completed-alerts/timer1.mp3";
}

function setAudio() {
   const audio = document.getElementById("audio");
   audio.src = "timer-completed-alerts/timer" +
      document.getElementById("alert-audio-select").value + ".mp3";
}

function playAudio() {
   setAudio();
   audio.play();
}
