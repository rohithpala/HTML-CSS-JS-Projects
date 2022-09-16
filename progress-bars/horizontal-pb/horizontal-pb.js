const progressElement = document.querySelector(".progress");
const progresValueElement = document.querySelector(".progress-value");
let width = 0, progressInterval, letIn = true;
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");

function frame() {
   if (width >= 100) {
      clearInterval(progressInterval);
      startBtn.innerText = "Restart";
      letIn = true;
   } else {
      width++;
      progressElement.style.width = width + "%";
      progresValueElement.innerText = width + "%";
   }
}

startBtn.onclick = function () {
   if (!letIn) return;

   if (startBtn.innerText !== "Resume")
      width = 0;

   progressInterval = setInterval(frame, 50);
   letIn = false;
};

stopBtn.onclick = function () {
   clearInterval(progressInterval);
   startBtn.innerText = "Resume";
   letIn = true;
};
