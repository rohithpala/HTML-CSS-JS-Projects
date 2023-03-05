class Calculator {
   constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperand = previousOperandTextElement;
      this.currentOperand = currentOperandTextElement;
      this.clear();
   }

   clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
   }

   delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
   }

   appendNumber(number) {
      if (number === "." && this.currentOperand.includes("."))
         return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
   }

   chooseOperation(operation) {
      if (this.currentOperand === "")
         return;
      if (this.previousOperand !== "")
         this.compute();
      this.operation = operation;
      this.previousOperand = this.currentOperand.toString();
      this.currentOperand = "";
   }

   compute() {
      let result;
      const previous = parseInt(this.previousOperand, 2);
      const current = parseInt(this.currentOperand, 2);
      if (isNaN(previous) || isNaN(current))
         return;
      switch (this.operation) {
         case "+":
            result = Number(previous + current).toString(2);
            break;
         case "-":
            result = Number(previous - current).toString(2);
            break;
         case "*":
            result = Number(previous * current).toString(2);
            break;
         case "÷":
            result = Number(previous / current).toString(2);
            if (isNaN(result) || result === "Infinity") {
               result = "";
            }
            break;
         default:
            return;
      }
      this.currentOperand = result;
      this.previousOperand = "";
      this.operation = undefined;
   }

   getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerPart = stringNumber.split(".")[0];
      const decimalPart = stringNumber.split(".")[1];

      // if (decimalPart != null) {
      //    return parseInt(stringNumber, 2) + parseFloat(stringNumber.substring(stringNumber.indexOf('.')), 2);
      // }

      let integerDisplay;
      if (isNaN(integerPart)) {
         integerDisplay = "";
      } else {
         integerDisplay = integerPart;
      }

      if (decimalPart != null) {
         return `${integerDisplay}.${decimalPart}`;
      } else {
         return integerDisplay;
      }
   }

   updateDisplay() {
      currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);

      if (this.operation != null) {
         previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
      } else {
         previousOperandTextElement.innerText = "";
      }
   }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
   button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay();
   });
});

operationButtons.forEach(button => {
   button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay();
   });
});

equalsButton.addEventListener("click", () => {
   calculator.compute();
   calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
   calculator.delete();
   calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
   calculator.clear();
   calculator.updateDisplay();
});
