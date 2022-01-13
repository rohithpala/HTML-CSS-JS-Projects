const MONTH_ODD_DAYS = [0, 3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
const NO_OF_DATES = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function changeDate(calledBy) {
   if ((calledBy === "month") || (calledBy === "year" && document.getElementById("month-dd").value === "2"))
      document.getElementById("date-dd").selectedIndex = 0;
}

function checkMonthAndYear() {
   let inputMonth = document.getElementById("month-dd");
   let inputYear = document.getElementById("year-ip");

   const monthCheck = (inputMonth.value === "select"), yearCheck = (inputYear.value === "");
   if (monthCheck && yearCheck) {
      alert("Please input the Month and Year before inputting date");
   } else if (monthCheck) {
      alert("Please input Month before inputting date");
   } else if (yearCheck) {
      alert("Please input Year before inputting date");
   } else {
      const inputDate = document.getElementById("date-dd");
      inputMonth = parseInt(inputMonth.value);
      inputYear = parseInt(inputYear.value);

      const d29 = document.querySelector("#date-dd option[value=\"29\"]");
      const d30 = document.querySelector("#date-dd option[value=\"30\"]");
      const d31 = document.querySelector("#date-dd option[value=\"31\"]");

      if (inputMonth === 2) {
         if (inputYear % 4 === 0) {
            const array = Array.from(inputDate.options).map((opt) => opt.value);
            if (!array.includes("29")) inputDate.innerHTML += "<option value=\"29\">29</option>";
            if (array.includes("30")) d30.remove();
            if (array.includes("31")) d31.remove();
         } else {
            const array = Array.from(inputDate.options).map((opt) => opt.value);
            if (array.includes("29")) d29.remove();
            if (array.includes("30")) d30.remove();
            if (array.includes("31")) d31.remove();
         }
      } else {
         const array = Array.from(inputDate.options).map((opt) => opt.value);
         if (!array.includes("29")) inputDate.innerHTML += "<option value=\"29\">29</option>";
         if (!array.includes("30")) inputDate.innerHTML += "<option value=\"30\">30</option>";

         if (NO_OF_DATES[inputMonth] === 30 && array.includes("31")) {
            d31.remove();
         } else if (NO_OF_DATES[inputMonth] === 31 && !array.includes("31")) {
            inputDate.innerHTML += "<option value=\"31\">31</option>";
         }
      }
   }
}

function checkFields() {
   if (document.getElementById("date-dd").value === "select" ||
      document.getElementById("month-dd").value === "select" ||
      document.getElementById("year-ip").value === "") {
      alert("Please input all the fields");
      return false;
   }
   return true;
}

function whatIsDay() {
   if (checkFields()) {
      const date = parseInt(document.getElementById("date-dd").value);
      const month = parseInt(document.getElementById("month-dd").value);
      const year = parseInt(document.getElementById("year-ip").value) - 1;

      const date_odd_days = date % 7;

      const array = MONTH_ODD_DAYS.slice(0, month);
      let month_odd_days = array.reduce(function (x, y) {
         return x + y;
      }, 0);
      if ((month > 2) && (year + 1) > 400 && (year + 1) % 4 === 0) month_odd_days += 1;

      const leap_years = parseInt(year / 4);
      const year_odd_days = (leap_years * 2 + (year - leap_years)) % 7;

      const month_ = document.getElementById("month-dd");
      document.getElementById("result").style.display = "inherit";
      document.getElementById("date-span").innerText = date + " " + month_.options[month_.selectedIndex].text + " " + (year + 1);

      const verb = document.getElementById("verb");
      const date_ = new Date();
      const currentDate = date_.getFullYear().toString() + (date_.getMonth() + 1).toString() + date_.getDate().toString();
      const dateGiven = (year + 1).toString() + month.toString() + date.toString();
      if (dateGiven < currentDate) {
         verb.innerText = "was";
      } else if (dateGiven === currentDate) {
         verb.innerText = "is";
      } else {
         verb.innerText = "will be";
      }

      document.getElementById("day").innerText = DAYS[(date_odd_days + month_odd_days + year_odd_days - 1) % 7];

      document.getElementById("main").style.paddingBottom = "0";
   }
}

function reset() {
   const resultStyle = document.getElementById("result").style;
   if (resultStyle.display === "inherit") {
      document.getElementById("date-dd").value = "select";
      document.getElementById("month-dd").value = "select";
      document.getElementById("year-ip").value = "";
      resultStyle.display = "none";
      document.getElementById("main").style.paddingBottom = "2rem";
   }
}