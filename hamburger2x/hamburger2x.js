const hamburger = document.querySelector(".hamburger");
let cross = false;

document.querySelector(".icon-container").addEventListener("click", function () {
   if (cross) {
      hamburger.classList.remove("open");
      document.documentElement.style.setProperty("--before-angle", 0 + "deg");
      document.documentElement.style.setProperty("--after-angle", 0 + "deg");
      document.documentElement.style.setProperty("--before-position", -25 + "px");
      document.documentElement.style.setProperty("--after-position", 25 + "px");
      cross = false;
   } else {
      hamburger.classList.add("open");
      document.documentElement.style.setProperty("--before-angle", 45 + "deg");
      document.documentElement.style.setProperty("--after-angle", -45 + "deg");
      document.documentElement.style.setProperty("--before-position", 0 + "px");
      document.documentElement.style.setProperty("--after-position", 0 + "px");
      cross = true;
   }
});
