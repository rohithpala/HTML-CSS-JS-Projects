const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");

const binaryError = document.getElementById("binary-error");
const decimalError = document.getElementById("decimal-error");
const octalError = document.getElementById("octal-error");
const hexadecimalError = document.getElementById("hexadecimal-error");

let fromValue, emptyOtherFields;

binary.addEventListener("input", function () {
   emptyOtherFields = () => {
      decimal.value = "";
      octal.value = "";
      hexadecimal.value = "";
   };

   fromValue = binary.value;
   if (fromValue === "") {
      emptyOtherFields();
   } else if (/^[01]*$/.test(fromValue)) {
      binaryError.style.display = "none";
      decimal.value = parseInt(fromValue, 2);
      octal.value = parseInt(fromValue, 2).toString(8);
      hexadecimal.value = parseInt(fromValue, 2).toString(16).toUpperCase();
   } else {
      binaryError.style.display = "inherit";
      binaryError.innerText = "Invalid Binary Number";
      emptyOtherFields();
   }
});

decimal.addEventListener("input", function () {
   emptyOtherFields = () => {
      binary.value = "";
      octal.value = "";
      hexadecimal.value = "";
   }

   fromValue = decimal.value;
   if (fromValue === "") {
      emptyOtherFields();
   } else if (/^[0-9]*$/.test(fromValue)) {
      decimalError.style.display = "none";
      binary.value = Math.abs(fromValue).toString(2);
      octal.value = Math.abs(fromValue).toString(8);
      hexadecimal.value = Math.abs(fromValue).toString(16).toUpperCase();
   } else {
      decimalError.style.display = "inherit";
      decimalError.innerText = "Invalid Decimal Number";
      emptyOtherFields();
   }
});

octal.addEventListener("input", function () {
   emptyOtherFields = () => {
      binary.value = "";
      decimal.value = "";
      hexadecimal.value = "";
   }

   fromValue = octal.value;
   if (fromValue === "") {
      emptyOtherFields();
   } else if (/^[0-7]*$/.test(fromValue)) {
      octalError.style.display = "none";
      binary.value = parseInt(fromValue, 8).toString(2);
      decimal.value = parseInt(fromValue, 8);
      hexadecimal.value = parseInt(fromValue, 8).toString(16).toUpperCase();
   } else {
      octalError.style.display = "inherit";
      octalError.innerText = "Invalid Octal Number";
      emptyOtherFields();
   }
});

hexadecimal.addEventListener("input", function () {
   emptyOtherFields = () => {
      binary.value = "";
      decimal.value = "";
      octal.value = "";
   }

   fromValue = hexadecimal.value;
   if (fromValue === "") {
      emptyOtherFields();
   } else if (/^[0-9a-fA-F]*$/.test(fromValue)) {
      hexadecimalError.style.display = "none";
      binary.value = parseInt(fromValue, 16).toString(2);
      decimal.value = parseInt(fromValue, 16);
      octal.value = parseInt(fromValue, 16).toString(8);
   } else {
      hexadecimalError.style.display = "inherit";
      hexadecimalError.innerText = "Invalid Hexadecimal Number";
      emptyOtherFields();
   }
});
