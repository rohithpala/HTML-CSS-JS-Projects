document.getElementById("calculate-button").addEventListener("click", function () {
   const wt = document.getElementById("weight").value;
   let ht = document.getElementById("height").value;
   const bmiElement = document.getElementById("bmi");
   const type = document.getElementById("body-type");

   bmiElement.style.visibility = "visible";
   type.style.visibility = "hidden";

   if (ht === "" || wt === "") {
      if (ht === "" && wt === "") bmiElement.innerHTML = "<strong>Provide Height and Weight</strong>";
      else if (ht === "") bmiElement.innerHTML = "<strong>Provide Height</strong>";
      else if (wt === "") bmiElement.innerHTML = "<strong>Provide Weight</strong>";
   } else {
      ht /= 100;
      const bmi = (wt / (ht * ht)).toFixed(3);
      bmiElement.innerHTML = "Your BMI is <strong>" + bmi + "</strong>";

      type.style.visibility = "visible";
      if (bmi < 18.5) type.innerHTML = "Underweight";
      else if (bmi >= 18.5 && bmi < 24.9) type.innerHTML = "Normal";
      else if (bmi >= 24.9 && bmi < 29.9) type.innerHTML = "Overweight";
      else if (bmi >= 29.9 && bmi < 34.9) type.innerHTML = "Obese";
      else type.innerHTML = "Extremely Obese";
   }
});
