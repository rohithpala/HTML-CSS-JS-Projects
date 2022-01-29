document.getElementById("convert-button").addEventListener("click", function () {
   const r = document.getElementById("r-rgb").value / 255;
   const g = document.getElementById("g-rgb").value / 255;
   const b = document.getElementById("b-rgb").value / 255;

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

   document.getElementById("h").innerHTML = h + " <sup>°</sup>";
   document.getElementById("s").innerHTML = s + " %";
   document.getElementById("l").innerHTML = l + " %";
   document.getElementById("hsl").innerHTML = "hsl(" + h + "<sup>°</sup> , " + s + " % , " + l + " %)";

   document.getElementById("color-panel").style.backgroundColor = "rgb(" + [r * 255, g * 255, b * 255].join(", ") + ")";
});

function syncInputs(id_, value_) {
   const id = id_.substring(0, 2);
   document.getElementById(id + "input").value = document.getElementById(id + "rgb").value = value_;
}
