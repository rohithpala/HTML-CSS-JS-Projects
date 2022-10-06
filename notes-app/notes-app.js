const addButton = document.querySelector(".add-btn");
const addNoteContainer = document.querySelector(".add-note-container");
const addNoteForm = document.querySelector(".add-note-form");
const titleError = document.querySelector(".title-error");
const bodyError = document.querySelector(".body-error");
const addNoteCloseButton = document.querySelector(".close-btn");
const notesConatiner = document.querySelector(".notes");
const noNotes = document.querySelector(".no-notes");

let notes, noteID = 0, title, body;

// Loading all the notes from local stoarge
window.onload = () => {
   notes = JSON.parse(localStorage.getItem("notes")) === null ? [] : JSON.parse(localStorage.getItem("notes"));
   if (notes.length === 0) {
      noNotes.style.display = "flex";
   } else {
      noNotes.style.display = "none";
      noteID = notes[notes.length - 1].id;
      notes.forEach((note) => {
         addToDOM(note);
      });
   }
};

// Opening add note form
addButton.addEventListener("click", () => {
   addNoteContainer.style.top = "100px";
   addNoteForm.title.focus();
});

// Adding note to local storage
addNoteForm.addEventListener("submit", (e) => {
   e.preventDefault();

   title = addNoteForm.title.value.trim();
   body = addNoteForm.body.value.trim().replaceAll("\n", "<br>");

   if (title === "" && body === "") {
      titleError.style.display = "inherit";
      bodyError.style.display = "inherit";
   } else if (title === "") {
      titleError.style.display = "inherit";
      bodyError.style.display = "none";
   } else if (body === "") {
      bodyError.style.display = "inherit";
      titleError.style.display = "none";
   } else {
      titleError.style.display = "none";
      bodyError.style.display = "none";

      // adding note to notes object
      notes.push({
         id: noteID,
         title,
         body
      });

      // updating local storage
      localStorage.setItem("notes", JSON.stringify(notes));
      localStorage.setItem("noteID", ++noteID);

      // closing add note form
      addNoteCloseButton.click();

      // adding note to DOM
      addToDOM(notes[notes.length - 1]);

      noNotes.style.display = "none";
   }
});

// Adding note to DOM
function addToDOM(note) {
   notesConatiner.innerHTML += `
      <div class="note" id="note${note.id}">
         <div class="note-header">
            <h2 class="note-title">${note.title}</h2>
            <button class="delete-btn" onclick="deleteNote(${note.id})"><img src="delete.svg" /></button>
         </div>
         <p class="note-body">${note.body}</p>
      </div>
   `;
};

// Closing the Add note form
addNoteCloseButton.addEventListener("click", () => {
   addNoteContainer.style.top = "-600px";

   setTimeout(() => {
      addNoteForm.title.value = "";
      addNoteForm.body.value = "";

      titleError.style.display = "none";
      bodyError.style.display = "none";
   }, 501);
});

// Deleting a note
function deleteNote(id) {
   document.querySelector("#note" + id).remove();
   notes = notes.filter((note) => note.id !== id);
   localStorage.setItem("notes", JSON.stringify(notes));
   if (notes.length === 0) {
      noNotes.style.display = "flex";
   }
}
