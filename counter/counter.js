function decrement() {
     const counter = document.getElementById('counter');
     counter.innerText = parseInt(counter.innerText) - 1;
     changeColor();
}

function reset() {
     document.getElementById('counter').innerText = 0;
     changeColor();
}

function increment() {
     const counter = document.getElementById('counter');
     counter.innerText = parseInt(counter.innerText) + 1;
     changeColor();
}

function changeColor() {
     const counter = document.getElementById('counter');
     const counterValue = parseInt(counter.innerText);
     if (counterValue < 0) {
          counter.style.color = "#f00";
     } else if (counterValue === 0) {
          counter.style.color = "#000";
     } else {
          counter.style.color = "#006400";
     }
}