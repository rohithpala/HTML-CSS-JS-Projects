document.getElementById("convert-button").addEventListener("click", function () {
   const h = document.getElementById("h-hsl").value;
   const s = document.getElementById("s-hsl").value / 100;
   const l = document.getElementById("l-hsl").value / 100;

   const hex = rgb2hex(hsl2rgb(h, s, l));
   document.getElementById("hex").value = hex;
   document.getElementById("color-panel").style.backgroundColor = "#" + hex;
});

function hsl2rgb(h, s, l) {
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

   rgb[0] = parseInt((rgb[0] + m) * 255);
   rgb[1] = parseInt((rgb[1] + m) * 255);
   rgb[2] = parseInt((rgb[2] + m) * 255);

   return rgb;
}

function rgb2hex(rgb) {
   return ((rgb[0] << 16) | (rgb[1] << 8) | rgb[2]).toString(16).padStart(6, 0);;
}

function syncInputs(id_, value_) {
   const id = id_.substring(0, 2);
   document.getElementById(id + "input").value = document.getElementById(id + "hsl").value = value_;
}
