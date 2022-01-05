const button = document.getElementById("convert-button");

button.addEventListener("click", function () {
   const r = document.getElementById("r-rgb").value;
   const g = document.getElementById("g-rgb").value;
   const b = document.getElementById("b-rgb").value;

   document.getElementById("hex").value = ((r << 16) | (g << 8) | b).toString(16).padStart(6, 0);
   document.getElementById('color-panel').style.backgroundColor = "rgb(" + [r, g, b].join(", ") + ")";
});

function syncInputs(id_, value_) {
   const id = id_.substring(0, 2);
   document.getElementById(id + "input").value = document.getElementById(id + "rgb").value = value_;
}
