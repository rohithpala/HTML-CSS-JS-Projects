const input = document.querySelector(".wrapper input");

input.addEventListener("focus", () => {
   input.parentElement.classList.add("focused");
});

input.addEventListener("blur", () => {
   if (input.value === "") {
      input.parentElement.classList.remove("focused");
      input.classList.remove("filled");
   } else {
      input.classList.add("filled");
   }
});
