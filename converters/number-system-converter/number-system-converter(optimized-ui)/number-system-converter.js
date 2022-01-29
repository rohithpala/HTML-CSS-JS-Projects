const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const octal = document.getElementById("octal");
const hexadecimal = document.getElementById("hexadecimal");

const binaryError = document.getElementById("binary-error");
const decimalError = document.getElementById("decimal-error");
const octalError = document.getElementById("octal-error");
const hexadecimalError = document.getElementById("hexadecimal-error");

let fromValue, emptyOtherFields;
const hideAllErrors = () => {
   binaryError.style.display = "none";
   decimalError.style.display = "none";
   octalError.style.display = "none";
   hexadecimalError.style.display = "none";
}

binary.addEventListener("input", function () {
   emptyOtherFields = () => {
      decimal.value = "";
      octal.value = "";
      hexadecimal.value = "";
   };

   fromValue = binary.value;
   if (fromValue === "") {
      binaryError.style.display = "none";
      emptyOtherFields();
   } else if (/^[01]*$/.test(fromValue)) {
      hideAllErrors();
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
      decimalError.style.display = "none";
      emptyOtherFields();
   } else if (/^[0-9]*$/.test(fromValue)) {
      hideAllErrors();
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
      octalError.style.display = "none";
      emptyOtherFields();
   } else if (/^[0-7]*$/.test(fromValue)) {
      hideAllErrors();
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
      hexadecimalError.style.display = "none";
      emptyOtherFields();
   } else if (/^[0-9a-fA-F]*$/.test(fromValue)) {
      hideAllErrors();
      binary.value = parseInt(fromValue, 16).toString(2);
      decimal.value = parseInt(fromValue, 16);
      octal.value = parseInt(fromValue, 16).toString(8);
   } else {
      hexadecimalError.style.display = "inherit";
      hexadecimalError.innerText = "Invalid Hexadecimal Number";
      emptyOtherFields();
   }
});

const bin2oct = document.getElementById("bin2oct");
const bin2octTable = document.getElementById("bin-oct-container");
const bin2hex = document.getElementById("bin2hex");
const bin2hexTable = document.getElementById("bin-hex-container");

bin2oct.addEventListener("click", function () {
   if (bin2octTable.style.maxHeight) {
      bin2octTable.style.maxHeight = null;
   } else {
      bin2octTable.style.maxHeight = bin2octTable.scrollHeight + "px";
   }
});

bin2hex.addEventListener("click", function () {
   if (bin2hexTable.style.maxHeight) {
      bin2hexTable.style.maxHeight = null;
   } else {
      bin2hexTable.style.maxHeight = bin2hexTable.scrollHeight + "px";
   }
});