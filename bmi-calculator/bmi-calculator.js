document.getElementById("calculate-button").addEventListener("click", function () {
   const wt = document.getElementById("weight").value;
   let ht = document.getElementById("height").value;
   const bmiElement = document.getElementById("bmi");
   const type = document.getElementById("body-type");

   bmiElement.style.visibility = "visible";
   type.style.visibility = "hidden";

   if (ht === "" || wt === "") {
      if (ht === "" && wt === "") bmiElement.innerHTML = "<b>Provide Height and Weight</b>";
      else if (ht === "") bmiElement.innerHTML = "<b>Provide Height</b>";
      else if (wt === "") bmiElement.innerHTML = "<b>Provide Weight</b>";
   } else {
      ht /= 100;
      const bmi = (wt / (ht * ht)).toFixed(3);
      bmiElement.innerHTML = "Your BMI is <b>" + bmi + "</b>";

      type.style.visibility = "visible";
      if (bmi < 18.5) type.innerHTML = "<b>Underweight</b>";
      else if (bmi >= 18.5 && bmi < 24.9) type.innerHTML = "<b>Normal</b>";
      else if (bmi >= 24.9 && bmi < 29.9) type.innerHTML = "<b>Overweight</b>";
      else if (bmi >= 29.9 && bmi < 34.9) type.innerHTML = "<b>Obese</b>";
      else type.innerHTML = "<b>Extremely Obese</b>";
   }
});
