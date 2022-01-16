const counter = document.getElementById("counter");

const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const incrementButton = document.getElementById("increment");

decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);
incrementButton.addEventListener("click", increment);

decrementButton.addEventListener("transitionend", removeTransformProperty);
resetButton.addEventListener("transitionend", removeTransformProperty);
incrementButton.addEventListener("transitionend", removeTransformProperty);

window.addEventListener("keydown", function (e) {
   const keyPressed = e.key;
   if (keyPressed === "+") increment();
   else if (keyPressed === "-") decrement();
   else if (keyPressed === "r" || keyPressed === "R" || keyPressed === "0") reset();
});

function decrement() {
   decrementButton.classList.add("pressed");
   counter.innerText = parseInt(counter.innerText) - 1;
   changeColor();
}

function reset() {
   resetButton.classList.add("pressed");
   counter.innerText = 0;
   changeColor();
}

function increment() {
   incrementButton.classList.add("pressed");
   counter.innerText = parseInt(counter.innerText) + 1;
   changeColor();
}

function changeColor() {
   const counterValue = parseInt(counter.innerText);
   if (counterValue < 0) counter.style.color = "#f00";
   else if (counterValue === 0) counter.style.color = "#000";
   else counter.style.color = "#006400";
}

function removeTransformProperty(e) {
   e.target.classList.remove("pressed");
}