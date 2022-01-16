window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransformProperty));

function playSound(e) {
   const keyPressed = e.keyCode;
   const key = document.querySelector(`.key[data-key="${keyPressed}"]`);
   const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);

   if (!audio) return; // if key pressed is not available

   key.classList.add("playing");
   audio.currentTime = 0; // if audio is already playing, play it from start
   audio.play();
}

function removeTransformProperty(e) {
   e.target.classList.remove("playing"); // remove the playing class after the transition ends
}
