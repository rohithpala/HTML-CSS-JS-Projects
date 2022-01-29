document.getElementById("convert-button").addEventListener("click", function () {
   const hex = document.getElementById("hex").value;
   if (hex.length === 6) {
      if (/^[a-fA-F\d]{6}$/.test(hex)) {
         const r = parseInt(hex.substring(0, 2), 16);
         const g = parseInt(hex.substring(2, 4), 16);
         const b = parseInt(hex.substring(4, 6), 16);

         document.getElementById("r").innerText = r;
         document.getElementById("g").innerText = g;
         document.getElementById("b").innerText = b;
         document.getElementById("rgb").innerText = "rgb(" + [r, g, b].join(", ") + ")";

         document.getElementById('color-panel').style.backgroundColor = "#" + hex;
      } else {
         alert("Please input a valid hex code");
      }
   } else {
      alert("Hex Code should be of length 6");
   }
});
