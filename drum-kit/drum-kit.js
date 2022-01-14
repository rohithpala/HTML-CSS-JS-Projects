window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransformProperty));

function playSound(e) {
   const keyPressed = e.keyCode;
   const audio = document.getElementById("audio-" + keyPressed);
   if (!audio) { // if key pressed is not available
      return;
   } else {
      document.getElementById("key-" + keyPressed).classList.add("playing");
      audio.currentTime = 0; // if audio is already playing, play it from start
      audio.play();
   }
}

function removeTransformProperty(e) {
   e.target.classList.remove("playing"); // remove the playing class after the transition ends
}
