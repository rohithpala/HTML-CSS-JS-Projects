document.getElementById("convert-button").addEventListener("click", function () {
   const hex = document.getElementById("hex").value;
   if (hex.length === 6) {
      if (/^[a-fA-F\d]{6}$/.test(hex)) {
         const hsl = rgb2hsl(hex2rgb(hex));

         document.getElementById("h").innerHTML = hsl[0] + " <sup>°</sup>";
         document.getElementById("s").innerHTML = hsl[1] + " %";
         document.getElementById("l").innerHTML = hsl[2] + " %";
         document.getElementById("hsl").innerHTML = "hsl(" + hsl[0] + "<sup>°</sup> , " + hsl[1] + " % , " + hsl[2] + " %)";

         document.getElementById('color-panel').style.backgroundColor = "#" + hex;
      } else {
         alert("Please input a valid hex code");
      }
   } else {
      alert("Hex Code should be of length 6");
   }
});

function hex2rgb(hex) {
   return [
      parseInt(hex.substring(0, 2), 16),
      parseInt(hex.substring(2, 4), 16),
      parseInt(hex.substring(4, 6), 16)
   ];
}

function rgb2hsl(rgb) {
   const r = rgb[0] / 255;
   const g = rgb[1] / 255;
   const b = rgb[2] / 255;

   const max = Math.max(r, g, b), min = Math.min(r, g, b);
   let h, s, l = (max + min) / 2;

   if (max === min) {
      h = s = 0;
   } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
         case r: h = ((g - b) / d) % 6;
            break;

         case g: h = (b - r) / d + 2;
            break;

         case b: h = (r - g) / d + 4;
            break;
      }

      h *= 60;
      if (h < 0) h += 360;
   }

   s = (s * 100).toFixed(2);
   l = (l * 100).toFixed(2);

   return [h, s, l];
}
