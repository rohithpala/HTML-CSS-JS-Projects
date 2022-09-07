const hr = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const startElement = document.getElementById("start");
const alertAudioSelect = document.getElementById("alert-audio-select");
const audio = document.getElementById("audio");

let timerVar;

// Checking for range if any input value is changed
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
   if (hr.value === "0" && min.value === "0" && sec.value === "0") {
      stopTimer();
      document.getElementById("audio").play();
      startElement.innerText = "Start";
      hr.readOnly = min.readOnly = sec.readOnly = false;
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

function setAudio() {
   audio.src = "timer-completed-alerts/timer" + alertAudioSelect.value + ".mp3";
}

function playAudio() {
   setAudio();
   audio.play();
}

function stopTimer() {
   clearInterval(timerVar);
}

function reset() {
   stopTimer();
   hr.readOnly = min.readOnly = sec.readOnly = false;
   hr.value = min.value = sec.value = "0";

   startElement.innerText = "Start";

   alertAudioSelect.value = "1";
   audio.src = "timer-completed-alerts/timer1.mp3";
}
