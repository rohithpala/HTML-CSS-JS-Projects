const hex = document.getElementById("hex");
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");
const h = document.getElementById("h");
const s = document.getElementById("s");
const l = document.getElementById("l");

hex.addEventListener("input", handleHEX);

r.addEventListener("input", handleRGB);
g.addEventListener("input", handleRGB);
b.addEventListener("input", handleRGB);

h.addEventListener("input", handleHSL);
s.addEventListener("input", handleHSL);
l.addEventListener("input", handleHSL);

function hex2rgb(hex) {
   return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16)
   };
}

function rgb2hex(r, g, b) {
   return ((r << 16) | (g << 8) | b).toString(16).padStart(6, 0);
}

function rgb2hsl(r_, g_, b_) {
   const r = r_ / 255;
   const g = g_ / 255;
   const b = b_ / 255;

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

   s = (s * 100);
   l = (l * 100);

   return { h: h, s: s, l: l };
}

function hsl2rgb(h, s_, l_) {
   const s = s_ / 100, l = l_ / 100;
   const c = (1 - Math.abs(2 * l - 1)) * s;
   const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
   const m = l - c / 2;

   let rgb = [1, 1, 1];
   if (h >= 0 && h < 60) {
      rgb = [c, x, 0];
   } else if (h >= 60 && h < 120) {
      rgb = [x, c, 0];
   } else if (h >= 120 && h < 180) {
      rgb = [0, c, x];
   } else if (h >= 180 && h < 240) {
      rgb = [0, x, c];
   } else if (h >= 240 && h < 300) {
      rgb = [x, 0, c];
   } else if (h >= 300 && h < 360) {
      rgb = [c, 0, x];
   }

   rgb[0] = (rgb[0] + m) * 255;
   rgb[1] = (rgb[1] + m) * 255;
   rgb[2] = (rgb[2] + m) * 255;

   return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2]
   };
}

let hexValue, rValue, gValue, bValue, hValue, sValue, lValue;
let rgb, hsl, min, max;

function handleHEX() {
   hexValue = hex.value;
   if (hexValue.length === 6 && /^[0-9a-fA-F]*$/.test(hexValue)) {
      // HEX to RGB
      rgb = hex2rgb(hexValue)
      r.value = rgb.r.toFixed(5);
      g.value = rgb.g.toFixed(5);
      b.value = rgb.b.toFixed(5);

      // HEX to HSL
      hsl = rgb2hsl(rgb.r, rgb.g, rgb.b);
      h.value = hsl.h.toFixed(5);
      s.value = hsl.s.toFixed(5);
      l.value = hsl.l.toFixed(5);
   } else {
      r.value = g.value = b.value = h.value = s.value = l.value = "";
   }
}

function handleRGB(e) {
   rValue = r.value;
   gValue = g.value;
   bValue = b.value;
   if (rValue !== "" && gValue !== "" && bValue !== "" && e.target.value >= 0 && e.target.value <= 255) {
      // RGB to HEX
      hex.value = rgb2hex(rValue, gValue, bValue);

      // RGB to HSL
      hsl = rgb2hsl(rValue, gValue, bValue);
      h.value = hsl.h.toFixed(5);
      s.value = hsl.s.toFixed(5);
      l.value = hsl.l.toFixed(5);
   } else {
      hex.value = h.value = s.value = l.value = "";
   }
}

function handleHSL(e) {
   min = parseInt(e.target.min);
   max = parseInt(e.target.max);
   const eValue = parseInt(e.target.value);

   console.log(min, max, eValue);

   if (h.value !== "" && s.value !== "" && l.value !== "" && min <= eValue && eValue <= max) {
      console.log(1);
      // HSL to RGB
      rgb = hsl2rgb(h.value, s.value, l.value);
      r.value = rgb.r.toFixed(5);
      g.value = rgb.g.toFixed(5);
      b.value = rgb.b.toFixed(5);

      // RGB to HEX
      hex.value = rgb2hex(rgb.r, rgb.g, rgb.b);
   } else {
      hex.value = r.value = g.value = b.value = "";
   }
}
