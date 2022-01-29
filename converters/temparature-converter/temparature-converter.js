const celsius = document.getElementById("celsius");
const farenheit = document.getElementById("farenheit");
const kelvin = document.getElementById("kelvin");
const rankine = document.getElementById("rankine");
const reaumur = document.getElementById("reaumur");

celsius.addEventListener("input", celciusOnInput);
farenheit.addEventListener("input", farenheitOnInput);
kelvin.addEventListener("input", kelvinOnInput);
rankine.addEventListener("input", rankineOnInput);
reaumur.addEventListener("input", reaumurOnInput);

function celciusOnInput() {
   let C = celsius.value;
   if (C !== "") {
      C = parseInt(C);
      farenheit.value = ((C * 1.8) + 32).toFixed(1);
      kelvin.value = (C + 273.15).toFixed(2);
      rankine.value = ((C * 1.8) + 491.670).toFixed(2);
      reaumur.value = (C * 0.8).toFixed(2);
   } else {
      farenheit.value = kelvin.value = rankine.value = reaumur.value = "";
   }
}


function farenheitOnInput() {
   let F = farenheit.value;
   if (F !== "") {
      F = parseInt(F);
      celsius.value = ((F - 32) / 1.8).toFixed(2);
      kelvin.value = ((F - 32) / 1.8 + 273.15).toFixed(2);
      rankine.value = (F + 459.67).toFixed(2);
      reaumur.value = ((F - 32) / 2.25).toFixed(2);
   } else {
      celsius.value = kelvin.value = rankine.value = reaumur.value = "";
   }
}

function kelvinOnInput() {
   let K = kelvin.value;
   if (K !== "") {
      K = parseInt(K);
      celsius.value = (K - 273.15).toFixed(2);
      farenheit.value = ((K - 273.15) * 1.8 + 32).toFixed(1);
      rankine.value = (K * 1.8).toFixed(2);
      reaumur.value = ((K - 273.15) * 0.8).toFixed(2);
   } else {
      celsius.value = farenheit.value = rankine.value = reaumur.value = "";
   }
}

function rankineOnInput() {
   let Ra = rankine.value;
   if (Ra !== "") {
      Ra = parseInt(Ra);
      celsius.value = (Ra - 273.15).toFixed(2);
      farenheit.value = ((Ra - 273.15) * 1.8 + 32).toFixed(1);
      kelvin.value = (Ra / 1.8).toFixed(2);
      reaumur.value = ((Ra - 491.670) / 2.25).toFixed(2);
   } else {
      celsius.value = farenheit.value = kelvin.value = reaumur.value = "";
   }
}

function reaumurOnInput() {
   let Re = reaumur.value;
   if (Re !== "") {
      Re = parseInt(Re);
      celsius.value = (Re / 0.8).toFixed(2);
      farenheit.value = ((Re * 2.25) + 32).toFixed(1);
      kelvin.value = ((Re * 1.25) + 273.15).toFixed(2);
      rankine.value = ((Re * 2.25) + 491.670).toFixed(2);
   } else {
      celsius.value = farenheit.value = kelvin.value = rankine.value = "";
   }
}

document.getElementById("sun").addEventListener("click", () => {
   celsius.value = 5600;
   celciusOnInput();
});

document.getElementById("bp").addEventListener("click", () => {
   celsius.value = 100;
   celciusOnInput();
});

document.getElementById("fp").addEventListener("click", () => {
   celsius.value = 0;
   celciusOnInput();
});

document.getElementById("body-temparature").addEventListener("click", () => {
   celsius.value = 37;
   celciusOnInput();
});

document.getElementById("room-temparature").addEventListener("click", () => {
   celsius.value = 20;
   celciusOnInput();
});
