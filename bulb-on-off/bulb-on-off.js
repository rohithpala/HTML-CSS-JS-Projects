function changeValues() {
   const button = document.getElementById("bulb-button");
   if (button.innerText === "Turn on the light") {
      document.getElementById("bulb-image").src = "bulbon.gif";
      button.innerText = "Turn off the light";
   } else if (button.innerText === "Turn off the light") {
      document.getElementById("bulb-image").src = "bulboff.gif";
      button.innerText = "Turn on the light";
   }
}
