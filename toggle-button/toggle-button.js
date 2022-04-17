const toggleButton = document.getElementById("toggle");
const toggleSlider = document.getElementById("toggle-slider");
let left = 0;

toggleButton.addEventListener("click", function () {
   if (left === 0) left = 55;
   else left = 0;

   toggleSlider.style.left = left + "%";
});
