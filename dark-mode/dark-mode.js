document.getElementById("dark-mode").addEventListener("input", function () {
   const r = document.querySelector(":root");
   const cb = document.getElementById("dark-mode");
   if (cb.checked) {
      r.style.setProperty("--bg-color", "#121212");
      r.style.setProperty("--text-color", "#fff");
   } else {
      r.style.setProperty("--bg-color", "#fff");
      r.style.setProperty("--text-color", "#121212");
   }
});
