const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const from_ = document.getElementById("from-input");
const to = document.getElementById("to-input");

from_.addEventListener("input", convertCurrency);

function convertCurrency() {
   const from = from_.value;

   from2to(fromSelect.getSelectedItem(), toSelect.getSelectedItem());
}
