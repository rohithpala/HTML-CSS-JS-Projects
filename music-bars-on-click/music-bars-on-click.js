const DEVICE_HEIGHT = 1000; // to start from bottom of the screen
const TRANSITION_TIME = "1";

document.onclick = (event) => {
   let musicBar = document.createElement("div");

   musicBar.style.position = "absolute";
   musicBar.style.top = "100vh";
   musicBar.style.width = "10px";
   musicBar.style.backgroundColor = "#000";
   musicBar.style.transition = `height ${TRANSITION_TIME}s ease-in-out, top ${TRANSITION_TIME}s ease-in-out`;

   document.body.appendChild(musicBar);

   // This makes the bar come up
   setTimeout(() => {
      musicBar.style.left = (event.clientX - 4) + "px";
      musicBar.style.top = event.clientY + "px";
      musicBar.style.height = (DEVICE_HEIGHT - event.clientY) + "px";
   }, 1); // 1ms for allowing to apply default values, so that transition could take place

   // This makes the bar go down
   setTimeout(() => {
      musicBar.style.top = "100vh";
      musicBar.style.height = "0";
   }, TRANSITION_TIME * 1000);

   // After the transition is completed, we can remove the element
   musicBar.ontransitionend = () => {
      musicBar.remove();
   }
};
