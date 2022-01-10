const millimeter = document.getElementById("millimeter");
const centimeter = document.getElementById("centimeter");
const meter = document.getElementById("meter");
const kilometer = document.getElementById("kilometer");
const mile = document.getElementById("mile");
const yard = document.getElementById("yard");
const feet = document.getElementById("feet");
const inch = document.getElementById("inch");

const emptyAllFields = () => {
   millimeter.value = centimeter.value = meter.value = kilometer.value =
      mile.value = yard.value = feet.value = inch.value = "";
};

millimeter.addEventListener("input", function () {
   inputValue = millimeter.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      centimeter = inputValue / 10;
      meter = inputValue / 1000;
      kilometer = inputValue / Math.pow(10, 6);
      mile = inputValue / Math.pow(1.609, 6);
      yard = inputValue / 914;
      feet = inputValue / 305;
      inch = inputValue / 25.4;
   }
});

centimeter.addEventListener("input", function () {
   inputValue = centimeter.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue * 10;
      meter = inputValue / 100;
      kilometer = inputValue / Math.pow(10, 5);
      mile = inputValue / 160934;
      yard = inputValue / 91.44;
      feet = inputValue / 30.48;
      inch = inputValue / 2.54;
   }
});

meter.addEventListener("input", function () {
   inputValue = meter.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue * 1000;
      centimeter = inputValue * 100;
      kilometer = inputValue / 1000;
      mile = inputValue / 1609;
      yard = inputValue * 1.094;
      feet = inputValue * 3.281;
      inch = inputValue * 39.37;
   }
});

kilometer.addEventListener("input", function () {
   inputValue = kilometer.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue * Math.pow(10, 6);
      centimeter = inputValue * Math.pow(10, 5);
      meter = inputValue * 1000;
      mile = inputValue / 1.609;
      yard = inputValue * 1093.61;
      feet = inputValue * 3280.84;
      inch = inputValue * 39370;
   }
});

mile.addEventListener("input", function () {
   inputValue = mile.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue * Math.pow(1.609, 6);
      centimeter = inputValue * 160934.4;
      meter = inputValue * 1609.344;
      kilometer = inputValue * 1.609344;
      yard = inputValue * 1760;
      feet = inputValue * 5280;
      inch = inputValue * 63360;
   }
});

yard.addEventListener("input", function () {
   inputValue = yard.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue;
      centimeter = inputValue;
      meter = inputValue;
      kilometer = inputValue;
      mile = inputValue;
      feet = inputValue;
      inch = inputValue;
   }
});

feet.addEventListener("input", function () {
   inputValue = feet.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue;
      centimeter = inputValue;
      meter = inputValue;
      kilometer = inputValue;
      mile = inputValue;
      yard = inputValue;
      inch = inputValue;
   }
});

inch.addEventListener("input", function () {
   inputValue = inch.value;
   if (inputValue === "") {
      emptyAllFields();
   } else {
      millimeter = inputValue;
      centimeter = inputValue;
      meter = inputValue;
      kilometer = inputValue;
      mile = inputValue;
      yard = inputValue;
      feet = inputValue;
   }
});
