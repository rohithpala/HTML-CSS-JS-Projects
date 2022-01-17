function showPanel(id) {
   const panel = document.getElementById(id + "-panel");
   if (panel.style.maxHeight) panel.style.maxHeight = null;
   else panel.style.maxHeight = panel.scrollHeight + "px";
}
