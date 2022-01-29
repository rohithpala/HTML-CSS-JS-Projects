const milligram = document.getElementById("milligram");
const ounce = document.getElementById("ounce");
const pound = document.getElementById("pound");
const gram = document.getElementById("gram");
const kilogram = document.getElementById("kilogram");
const tonne = document.getElementById("tonne");

let inputValue;
let emptyAllFields = () => {
   milligram.value = ounce.value = pound.value = gram.value = kilogram.value = tonne.value = "";
};

milligram.addEventListener("input", function () {
   inputValue = milligram.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      ounce.value = inputValue / 28350;
      pound.value = inputValue / 453592;
      gram.value = inputValue / 1000;
      kilogram.value = inputValue / Math.pow(10, 6);
      tonne.value = inputValue / Math.pow(10, 9);
   }
});

ounce.addEventListener("input", function () {
   inputValue = ounce.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      milligram.value = inputValue * 28350;
      pound.value = inputValue / 16;
      gram.value = inputValue * 28.35;
      kilogram.value = inputValue / 35.274;
      tonne.value = inputValue / 35274;
   }
});

pound.addEventListener("input", function () {
   inputValue = pound.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      milligram.value = inputValue * 453592;
      ounce.value = inputValue * 16;
      gram.value = inputValue * 453.592;
      kilogram.value = inputValue / 2.205;
      tonne.value = inputValue / 2205;
   }
});

gram.addEventListener("input", function () {
   inputValue = gram.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      milligram.value = inputValue * 1000;
      ounce.value = inputValue / 28.35;
      pound.value = inputValue / 454;
      kilogram.value = inputValue / 1000;
      tonne.value = inputValue / Math.pow(10, 6);
   }
});

kilogram.addEventListener("input", function () {
   inputValue = kilogram.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      milligram.value = inputValue * Math.pow(10, 6);
      ounce.value = inputValue * 35.274;
      pound.value = inputValue * 2.205;
      gram.value = inputValue * 1000;
      tonne.value = inputValue / 1000;
   }
});

tonne.addEventListener("input", function () {
   inputValue = tonne.value;

   if (inputValue === "") {
      emptyAllFields();
   } else {
      milligram.value = inputValue * Math.pow(10, 9);
      ounce.value = inputValue * 35274;
      pound.value = inputValue * 2204.62;
      gram.value = inputValue * Math.pow(10, 6);
      kilogram.value = inputValue * 1000;
   }
});
