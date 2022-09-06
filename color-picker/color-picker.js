const rRange = document.getElementById("r-range");
const rNumber = document.getElementById("r-number");
const gRange = document.getElementById("g-range");
const gNumber = document.getElementById("g-number");
const bRange = document.getElementById("b-range");
const bNumber = document.getElementById("b-number");
const hex = document.getElementById("hex");
const colorPanel = document.getElementById("color");

// syncs the number input and range input
function syncRGBHexValues(colorName, value_) {
   if (colorName !== "hex") {
      document.getElementById(colorName + "-number").value =
         document.getElementById(colorName + "-range").value = value_;

      setColor(colorName);
   } else {
      if (hex.value.length === 0) {
         colorPanel.style.backgroundColor = "#ffffff";
         rRange.style.backgroundColor = "#ff0000";
         gRange.style.backgroundColor = "#00ff00";
         bRange.style.backgroundColor = "#0000ff";

         rRange.value = gRange.value = bRange.value = 255;
         rNumber.value = gNumber.value = bNumber.value = 255;
      } else if (hex.value.length === 6) {
         setColor(colorName);
      }
   }
}

// converts rgb values to hex values
function rgb2hex(r, g, b) {
   const rgb = (r << 16) | (g << 8) | b;
   return rgb.toString(16).padStart(6, 0).toUpperCase();
}

// converts hex values to rgb values
function hex2rgb(hex) {
   var result = [hex.substring(0, 2), hex.substring(2, 4), hex.substring(4)];
   return { r: parseInt(result[0], 16), g: parseInt(result[1], 16), b: parseInt(result[2], 16) };
}

// sets color to color holder and to ranges
function setColor(colorName) {
   if (colorName !== "hex") {
      hex.value = rgb2hex(rRange.value, gRange.value, bRange.value);
   } else {
      const rgb = hex2rgb(hex.value);
      rRange.value = rNumber.value = rgb.r;
      gRange.value = gNumber.value = rgb.g;
      bRange.value = bNumber.value = rgb.b;
   }
   colorPanel.style.backgroundColor = "#" + hex.value;

   rRange.style.background = "rgb(" + rRange.value + ", 0, 0)";
   gRange.style.background = "rgb(0, " + gRange.value + ", 0)";
   bRange.style.background = "rgb(0 , 0, " + bRange.value + ")";
}

function copyToClipboard(text) {
   if (text === "HEX") {
      hex.select();
      hex.setSelectionRange(0, 99999);

      navigator.clipboard.writeText("#" + hex.value);
   } else {
      rNumber.select();
      gNumber.select();
      bNumber.select();

      navigator.clipboard.writeText("rgb(" + [rNumber.value, gNumber.value, bNumber.value].join(", ") + ")");
   }
   alert("Copied the " + text + " value to Clipboard");
}
