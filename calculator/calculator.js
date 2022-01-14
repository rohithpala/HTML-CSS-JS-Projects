const input = document.getElementById("input");
const output = document.getElementById("output");
const b00 = document.getElementById("b00");
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const dot = document.getElementById("dot");
const enter = document.getElementById("enter");
const backspace = document.getElementById("backspace");
const OPERATORS = ["+", "-", "*", "/"];

input.addEventListener("click", checkKey);

function addInput(text) {
   input.value += text;
}

function checkKey(event) {
   let keyPressed = event.key;
   console.log(String.fromCharCode(keyPressed));
}

function setOutput() {
   ;
}

function clear() {
   input.value = output.value = "";
}

function handleBackspace() {
   const val = input.value, position = input.selectionStart;
   if (val) {
      console.log(position);
      input.value = val.substring(0, position - 1) + val.substring(position, val.length);

      // if(backspace.createTextRange) {
      //      let range = backspace.createTextRange();
      //      range.move("character", position);
      //      range.select();
      // }
   }
}
