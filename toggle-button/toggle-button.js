const circleStyle = document.getElementById("circle").style;
const circleProp = window.getComputedStyle(circle);

document.getElementById("container").addEventListener("click", function () {
   if (circleProp.getPropertyValue("background-color") === "rgb(85, 85, 85)") {
      circleStyle.backgroundColor = "rgb(255, 255, 255)";
      circleStyle.right = "5px";
      circleStyle.left = "unset";
   } else if (circleProp.getPropertyValue("background-color") === "rgb(255, 255, 255)") {
      circleStyle.backgroundColor = "rgb(85, 85, 85)";
      circleStyle.left = "5px";
      circleStyle.right = "unset";
   }
});
