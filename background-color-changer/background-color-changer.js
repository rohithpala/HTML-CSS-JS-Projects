// retuns true if the brightness is low else returns false
function isDark(hexValue) {
   const hex = hexValue.replace("#", "");
   const r = parseInt(hex.substr(0, 2), 16);
   const g = parseInt(hex.substr(2, 2), 16);
   const b = parseInt(hex.substr(4, 2), 16);
   return ((r * 299) + (g * 587) + (b * 114)) / 1000 < 155;
}

// converts rgb values to hex values
function rgb2hex(r, g, b) {
   var rgb = (r << 16) | (g << 8) | b;
   return "#" + rgb.toString(16).padStart(6, 0);
}

// default values of rgb and hex
let rgb = "RGB(255, 255, 255)", hex = "#FFFFFF";
function setBackgroundColor() {
   // getting random values for r g b to use them as background color
   const redWeight = Math.floor(Math.random() * 254) + 1;
   const greenWeight = Math.floor(Math.random() * 254) + 1;
   const blueWeight = Math.floor(Math.random() * 254) + 1;

   // initializing the rgb and hex values
   rgb = "RGB(" + redWeight + "," + greenWeight + "," + blueWeight + ")";
   hex = rgb2hex(redWeight, greenWeight, blueWeight).toUpperCase();

   changeColors(isDark(hex), "sbg");

   document.body.style.backgroundColor = rgb; // changing background color

   // changing the color name in span tag
   const colorName = document.getElementById("color");
   if (document.getElementById("hex").checked) colorName.innerText = hex;
   else if (document.getElementById("rgb").checked) colorName.innerText = rgb;
}

// function that changes colors of text based on brightness of background color to improve readability
function changeColors(isBGDark, calledBy) {
   // referencing all the text parts to change their color based on background brightness
   const h1 = document.getElementById("background-color-h1").style;
   const copy = document.getElementById("copy").style;
   const reset = document.getElementById("reset").style;
   const change = document.getElementById("change").style;
   const rgbLabel = document.getElementById("rgbl").style;
   const hexLabel = document.getElementById("hexl").style;
   const writtenByContainer = document.getElementById("written-by-container").style;
   const writtenByContainerA = document.querySelectorAll("#written-by-container a");
   const a1 = writtenByContainerA[0], a2 = writtenByContainerA[1];

   if (isBGDark) { // changing color to white if background color is dark
      h1.color = copy.color = rgbLabel.color = hexLabel.color = writtenByContainer.color
         = a1.style.color = a2.style.color = "#fff";

      change.color = "#000";
      change.backgroundColor = "#fff";

      reset.color = "#000";
      reset.backgroundColor = "#fff";

      h1.border = reset.border = change.border = writtenByContainer.border = "2px solid #fff";
   } else { // changing color to black if background color is not dark
      h1.color = copy.color = rgbLabel.color = hexLabel.color = writtenByContainer.color
         = a1.style.color = a2.style.color = "#000";

      change.color = "#fff";
      change.backgroundColor = "#000";

      reset.color = "#fff";
      reset.backgroundColor = "#000";

      h1.border = reset.border = change.border = writtenByContainer.border = "2px solid #000";

      if (calledBy === "reset") {
         document.body.style.backgroundColor = "#fff";
         hex = "#ffffff";
         rgb = "RGB(255, 255, 255)";
         document.getElementById("hex").checked = true;
         document.getElementById("rgb").checked = false;
         changeColorCodeValues();
      }
   }
}

// function that changes color codes instantly when a radiobutton is clicked
function changeColorCodeValues() {
   const colorName = document.getElementById("color");
   if (document.getElementById("hex").checked) colorName.innerText = hex.toString().toUpperCase();
   else if (document.getElementById("rgb").checked) colorName.innerText = rgb;
}

// function that copies the color code displayed on the screen to clipboard
function copyToClipboard() {
   navigator.clipboard.writeText(document.getElementById("color").innerText).then(() => {
      if (document.getElementById("hex").checked) alert("Copied the Hex Color Code to Clipboard");
      else alert("Copied the RGB Color Code to Clipboard");
   });
}
