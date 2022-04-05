document.onclick = (event) => {
   const ripple = document.createElement("div");
   ripple.className = "ripple";
   document.body.appendChild(ripple);

   ripple.style.left = `${event.clientX}px`;
   ripple.style.top = `${event.clientY}px`;
   ripple.style.animation = "ripple-effect 0.5s linear";

   ripple.onanimationend = () => {
      document.body.removeChild(ripple);
   }
}
