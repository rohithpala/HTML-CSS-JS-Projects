const input = document.getElementById("input");
const addButton = document.getElementById("add");
const list = document.getElementById("list");
const remainingTasks = document.getElementById("remaining-tasks");
const markAsCompleted = document.getElementById("mark-as-completed");
const clearAll = document.getElementById("clear-all");
const editButtons = document.getElementsByClassName("edit");
const deleteButtons = document.getElementsByClassName("delete");

function addTask(task) {
   list.innerHTML += `
      <div>
         <li>` + task + `</li>` +
      `<i class="fas fa-edit edit"></i>` +
      `<i class="fas fa-trash delete"></i>
      </div>`
      ;

   remainingTasks.innerText = parseInt(remainingTasks.innerText) + 1;

   input.value = "";
   addButton.disabled = true;

   if (remainingTasks.innerText !== "0") {
      markAsCompleted.disabled = false;
      clearAll.disabled = false;
   }

   editButtons[parseInt(remainingTasks.innerText) - 1].addEventListener("click", editTask);
   deleteButtons[parseInt(remainingTasks.innerText) - 1].addEventListener("click", deleteTask);
}

let task;
input.addEventListener("keyup", function (e) {
   task = input.value.trim();
   if (task === "") {
      addButton.disabled = true;
   } else {
      addButton.disabled = false;
      if (e.key === "Enter")
         addTask(task);
   }
});

addButton.addEventListener("click", () => addTask(input.value.trim()));

remainingTasks.addEventListener("change", function () {
   if (remainingTasks.innerText === "0") {
      addButton.disabled = true;
      markAsCompleted.disabled = true;
      clearAll.disabled = true;
   } else {
      addButton.disabled = false;
      markAsCompleted.disabled = false;
      clearAll.disabled = false;
   }
});

function editTask(e) {
   console.log("edit");
   console.log(e.target);
}

function deleteTask(e) {
   console.log("delete");
   console.log(e.target.previousElementSibling.innerHTML);
}

clearAll.addEventListener("click", function () {
   list.innerText = "";
   remainingTasks.innerText = "0";

   markAsCompleted.disabled = true;
   clearAll.disabled = true;
});