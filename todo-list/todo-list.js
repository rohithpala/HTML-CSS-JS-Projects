const form = document.getElementById("form");
const todoInput = document.getElementById("todo-input");
const list = document.getElementById("list");
const noTasks = document.getElementById("no-tasks").style;
const remainingTasksContainer = document.getElementById("remaining-tasks-container").style;
const remainingTasks = document.getElementById("remaining-tasks");
const clearAll = document.getElementById("clear-all");

let todoList = [];
// let completed = [];

function utilFunction() {
   if (todoList.length === 0) {
      list.innerHTML = `<p id="no-tasks">🎉 No tasks to do 🎉</p>`;
      noTasks.display = "inherit";
      remainingTasksContainer.display = "none";
      localStorage.clear();
   } else {
      noTasks.display = "none";
      remainingTasksContainer.display = "initial";

      list.innerHTML = "";
      todoList.forEach(todo => {
         list.innerHTML +=
            `<div class="${todo.id}">
               <li class="${todo.id}${todo.completed ? " completed" : ""}"  onclick="markAsCompleted(${todo.id})"> ${todo.todo} </li>
               <button class="${todo.id} edit" onclick="editTask(${todo.id})"><i class="fas fa-edit"></i></button>
               <button class="${todo.id} delete" onclick="deleteTask(${todo.id})"><i class="fas fa-trash"></i></button>
            </div>`
      });
      remainingTasks.textContent = todoList.length;
      localStorage.setItem("todoList", JSON.stringify(todoList));
   }
}

window.onload = function () {
   todoList = JSON.parse(localStorage.getItem("todoList"));
   if (!todoList)
      todoList = [];
   utilFunction();
   todoInput.focus();
}

// adding new todo item to the list
form.addEventListener("submit", (e) => {
   e.preventDefault();
   const todo = todoInput.value.trim();

   if (todo === "") {
      todoInput.value = "";
      return;
   }

   todoList =
      [
         {
            id: Math.floor(Math.random() * 100000),
            todo,
            completed: false
         },
         ...todoList
      ];

   noTasks.display = "none";
   remainingTasksContainer.display = "initial";

   const id = todoList[0].id;

   list.innerHTML =
      `<div class="${id}">
         <li class="${id}" onclick="markAsCompleted(${id})"> ${todoList[0].todo} </li>
         <button class="${id} edit" onclick="editTask(${id})"><i class="fas fa-edit"></i></button>
         <button class="${id} delete" onclick="deleteTask(${id})"><i class="fas fa-trash"></i></button>
      </div>` + list.innerHTML;

   remainingTasks.textContent = todoList.length;
   todoInput.value = "";

   localStorage.setItem("todoList", JSON.stringify(todoList));
});

// clear all the todo items
clearAll.addEventListener("click", () => toggleModal());

// mark an todo item as completed
function markAsCompleted(id) {
   const todoItem = document.getElementsByClassName(id)[1];
   const index = todoList.findIndex(todo => todo.id === id);
   // let index, spliced;
   if (todoItem.classList.contains("completed")) {
      // index = completed.findIndex(todo => todo.id === id);
      // spliced = completed.splice(index, 1);
      // todoList[index].splice(spliced.index, 0, spliced.text);
      todoItem.classList.remove("completed");
      todoList[index].completed = false;
   } else {
      // index = todoList.findIndex(todo => todo.id === id);
      // spliced = todoList.splice(index, 1);
      // completed.push({ index, text: spliced.todo });
      todoItem.classList.add("completed");
      todoList[index].completed = true;
   }

   localStorage.setItem("todoList", JSON.stringify(todoList));
}

// deleting a todo item
function deleteTask(id) {
   todoList = todoList.filter(todo => todo.id !== id);
   utilFunction();
}

// editing a todo item
function editTask(id) {
   const todoItemElement = document.getElementsByClassName(id)[1];
   const index = todoList.findIndex(todo => todo.id === id);
   const edited = prompt("Type your edited task", todoList[index].todo);
   todoList[index].todo = edited;
   todoItemElement.textContent = edited;

   localStorage.setItem("todoList", JSON.stringify(todoList));
}

// modal functions
const modal = document.getElementById("modal-container");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const closeModal = document.getElementById("close-modal");

yesButton.addEventListener("click", () => {
   localStorage.clear();
   list.innerHTML = `<p id="no-tasks">🎉 No tasks to do 🎉</p>`;
   noTasks.display = "inherit";
   remainingTasksContainer.display = "none";
   modal.classList.remove("show-modal");
});

noButton.addEventListener("click", () => {
   modal.classList.remove("show-modal");
});

closeModal.addEventListener("click", () => {
   modal.classList.remove("show-modal");
});

function toggleModal() {
   modal.classList.add("show-modal");
}
