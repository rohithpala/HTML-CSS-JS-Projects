const fromSelected = document.getElementById("from-select");
const toSelected = document.getElementById("to-select");
const from = document.getElementById("from-input");
const to = document.getElementById("to-input");

let fromNS = "Binary", toNS = "Binary";

fromSelected.addEventListener("change", function () {
   fromNS = fromSelected.options[fromSelected.selectedIndex].text;
   from.placeholder = fromNS + " Number";
});

toSelected.addEventListener("change", function () {
   toNS = toSelected.options[toSelected.selectedIndex].text;
   to.placeholder = toNS + " Number";
});

from.addEventListener("change", function () {
   from.style.backgroundColor = "#fff";
});

let fromValue;
document.getElementById("convert-button").addEventListener("click", function () {
   switch (fromNS) {
      case "Binary":
         if (/^[01]*$/.test(from.value)) {
            fromValue = from.value;
            switch (toNS) {
               case "Decimal": to.value = parseInt(fromValue, 2);
                  break;
               case "Hexadecimal": to.value = parseInt(fromValue, 2).toString(16).toUpperCase();
                  break;
               case "Octal": to.value = parseInt(fromValue, 2).toString(8);
                  break;
               default: to.value = fromValue;
            }
         } else {
            from.style.backgroundColor = "#f00";
         }
         break;
      case "Decimal":
         fromValue = from.value;
         switch (toNS) {
            case "Binary": to.value = Math.abs(fromValue).toString(2);
               break;
            case "Hexadecimal": to.value = Math.abs(fromValue).toString(16).toUpperCase();
               break;
            case "Octal": to.value = Math.abs(fromValue).toString(8);
               break;
            default: to.value = fromValue;
         }
         break;
      case "Hexadecimal":
         fromValue = from.value;
         switch (toNS) {
            case "Binary": to.value = parseInt(fromValue, 16).toString(2);
               break;
            case "Decimal": to.value = parseInt(fromValue, 16);
               break;
            case "Octal": to.value = parseInt(fromValue, 16).toString(8);
               break;
            default: to.value = fromValue;
         }
         break;
      case "Octal":
         fromValue = from.value;
         switch (toNS) {
            case "Binary": to.value = parseInt(fromValue, 8).toString(2);
               break;
            case "Decimal": to.value = parseInt(fromValue, 8);
               break;
            case "Hexadecimal": to.value = parseInt(fromValue, 8).toString(16).toUpperCase();
               break;
            default: to.value = fromValue;
         }
         break;
   }
});

