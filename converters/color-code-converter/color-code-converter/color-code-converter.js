const expCol = document.getElementById("exp-col-button");
expCol.addEventListener("click", getContainerIDs);

function expand(desc, plusStyle) {
   desc.style.maxHeight = desc.scrollHeight + "px";
   plusStyle.transform = "rotate(45deg)";
   plusStyle.transition = "0.2s transform";
}

function collapse(desc, plusStyle) {
   desc.style.maxHeight = null;
   plusStyle.transform = "rotate(0deg)";
   plusStyle.transition = "0.2s transform";
}

function getContainerIDs() {
   const ids = document.getElementsByClassName("accordion");
   let i, len = ids.length;

   if (expCol.innerText === "Expand All") {
      expCol.innerText = "Collapse All";
      for (i = 0; i < len; i++) {
         expand(document.getElementById(ids[i].id.split("-")[0] + "-desc"),
            document.getElementById(ids[i].id.split("-")[0] + "-plus").style);
      }
   } else {
      expCol.innerText = "Expand All";
      for (i = 0; i < len; i++) {
         collapse(document.getElementById(ids[i].id.split("-")[0] + "-desc"),
            document.getElementById(ids[i].id.split("-")[0] + "-plus").style);
      }
   }
}

function showDesc(converterID) {
   const desc = document.getElementById(converterID.split("-")[0] + "-desc");
   const plusStyle = document.getElementById(converterID.split("-")[0] + "-plus").style;
   if (desc.style.maxHeight) {
      collapse(desc, plusStyle);
   } else {
      expand(desc, plusStyle);
   }
}
