const date = document.getElementById("date-dd");
const month = document.getElementById("month-dd");
const year = document.getElementById("year-ip");
const mainStyle = document.querySelector("main").style;
const resultStyle = document.getElementById("result").style;

const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const NO_OF_DATES = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function changeDateToDefault(calledBy) {
   if ((calledBy === "month") || (calledBy === "year" && document.getElementById("month-dd").value === "2"))
      date.selectedIndex = 0;
}

function changeDatesBasedOnMonthAndYear() {
   let inputMonth = month.value, inputYear = year.value;
   const monthCheck = (inputMonth === "select"), yearCheck = (inputYear === "");

   if (monthCheck && yearCheck) {
      alert("Please input the Month and Year before inputting date");
   } else if (monthCheck) {
      alert("Please input Month before inputting date");
   } else if (yearCheck) {
      alert("Please input Year before inputting date");
   } else {
      inputMonth = parseInt(inputMonth);
      inputYear = parseInt(inputYear);

      const d29 = document.querySelector("#date-dd option[value=\"29\"]");
      const d30 = document.querySelector("#date-dd option[value=\"30\"]");
      const d31 = document.querySelector("#date-dd option[value=\"31\"]");

      if (inputMonth === 2) {
         if (inputYear % 4 === 0) {
            const array = Array.from(date.options).map((opt) => opt.value);
            if (!array.includes("29")) date.innerHTML += "<option value=\"29\">29</option>";
            if (array.includes("30")) d30.remove();
            if (array.includes("31")) d31.remove();
         } else {
            const array = Array.from(date.options).map((opt) => opt.value);
            if (array.includes("29")) d29.remove();
            if (array.includes("30")) d30.remove();
            if (array.includes("31")) d31.remove();
         }
      } else {
         const array = Array.from(date.options).map((opt) => opt.value);
         if (!array.includes("29")) date.innerHTML += "<option value=\"29\">29</option>";
         if (!array.includes("30")) date.innerHTML += "<option value=\"30\">30</option>";

         if (NO_OF_DATES[inputMonth] === 30 && array.includes("31")) {
            d31.remove();
         } else if (NO_OF_DATES[inputMonth] === 31 && !array.includes("31")) {
            date.innerHTML += "<option value=\"31\">31</option>";
         }
      }
   }
}

function whatIsDay() {
   if (date.value === "select" || month.value === "select" || year.value === "") {
      alert("Please input all the fields");
   } else {
      const dateValue = parseInt(date.value);
      const yearValue = parseInt(year.value);

      resultStyle.display = "inherit";
      document.getElementById("date-span").innerText = dateValue + " " + month.options[month.selectedIndex].text + " " + yearValue;

      const today = new Date();
      const formattedToday = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
      const dateGiven = yearValue + "/" + month.selectedIndex + "/" + dateValue;

      const verb = document.getElementById("verb");
      if (dateGiven < formattedToday) verb.innerText = "was";
      else if (dateGiven === formattedToday) verb.innerText = "is";
      else verb.innerText = "will be";

      document.getElementById("day").innerText = DAYS[new Date(dateGiven).getDay()];

      mainStyle.paddingBottom = "0";
   }
}

function reset() {
   if (resultStyle.display === "inherit") {
      date.value = "select";
      month.value = "select";
      year.value = "";
      resultStyle.display = "none";
      mainStyle.paddingBottom = "2rem";
   }
}
