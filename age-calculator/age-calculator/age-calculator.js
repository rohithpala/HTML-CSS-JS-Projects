function changeDate(calledBy) {
     if ((calledBy === "month") || (calledBy === "year" && document.getElementById('month-dd').value === "2"))
          document.getElementById('date-dd').selectedIndex = 0;
}

const dateArray = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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

          const d29 = document.querySelector("#date-dd option[value='29']");
          const d30 = document.querySelector("#date-dd option[value='30']");
          const d31 = document.querySelector("#date-dd option[value='31']");

          if (inputMonth === 2) {
               if (inputYear % 4 === 0) {
                    const array = Array.from(inputDate.options).map((opt) => opt.value);
                    if (!array.includes("29")) inputDate.innerHTML += "<option value='29'>29</option>";
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
               if (!array.includes("29")) inputDate.innerHTML += "<option value='29'>29</option>";
               if (!array.includes("30")) inputDate.innerHTML += "<option value='30'>30</option>";

               if (dateArray[inputMonth] === 30 && array.includes("31")) {
                    d31.remove();
               } else if (dateArray[inputMonth] === 31 && !array.includes("31")) {
                    inputDate.innerHTML += "<option value='31'>31</option>";
               }
          }
     }
}

function noOfLeapYears(yearOfBirth) {
     const currentYear = new Date().getFullYear();
     let i, leapYears = 0;
     for (i = yearOfBirth; i < currentYear; i++)
          if (i % 4 === 0) leapYears++;
     return leapYears;
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

function calculateAge() {
     if (checkFields()) {
          const inputDate = document.getElementById("date-dd");
          const inputMonth = document.getElementById("month-dd");
          const inputYear = document.getElementById("year-ip");
          const dateOfBirth = parseInt(inputDate.value);
          const yearOfBirth = parseInt(inputYear.value);
          const today = new Date().getTime();
          const birth = new Date(inputMonth.value + "/" + dateOfBirth + "/" + yearOfBirth).getTime();

          if (dateOfBirth === null || inputMonth.value === "select" || yearOfBirth === null) {
               alert("Please fill all the fields");
          } else if (birth > today) {
               alert("Birth date should be less than today: " + new Date());
          } else {
               let days = parseInt((today - birth) / (1000 * 3600 * 24));

               const years = parseInt(days / 365);
               days -= years * 365.25;

               const months = parseInt(days / 30);
               days -= months * 30.4167;

               days += noOfLeapYears(yearOfBirth);

               console.log(1);
               const age = document.getElementById('age');
               age.style.display = "inherit";
               age.innerText = years + " years " + months + " months " + parseInt(days) + " days";
          }
     }
}
