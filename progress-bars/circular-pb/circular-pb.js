const progressElement = document.querySelector(".progress-bar");
const progresValueElement = document.querySelector(".progress-value");
let angle = 0, progressInterval;
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");

function frame() {
   if (angle >= 360) {
      clearInterval(progressInterval);
      startBtn.innerText = "Restart";
   } else {
      angle++;
      progressElement.style.background = `conic-gradient(#333 ${angle}deg, #eee 0deg)`;
      progresValueElement.innerText = Math.floor(((angle / 360) * 100)) + "%";
   }
}

startBtn.onclick = function () {
   if (startBtn.innerText !== "Resume")
      angle = 0;
   progressInterval = setInterval(frame, 50);
};

stopBtn.onclick = function () {
   clearInterval(progressInterval);
   startBtn.innerText = "Resume";
};
