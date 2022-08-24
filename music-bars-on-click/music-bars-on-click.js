document.onclick = (event) => {
   const musicBar = document.createElement("div");
   musicBar.className = "music-bar";
   document.body.appendChild(musicBar);

   musicBar.style.left = (event.clientX - 3) + "px";
   musicBar.style.top = event.clientY + "px";
   musicBar.style.height = (735 - event.clientY) + "px";
};
