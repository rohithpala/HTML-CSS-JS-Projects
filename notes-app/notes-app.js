const addButton = document.querySelector(".add-btn");
const addNoteContainer = document.querySelector(".add-note-container");
const addNoteForm = document.querySelector(".add-note-form");
const addNoteCloseButton = document.querySelector(".close-btn");
const notesConatiner = document.querySelector(".notes");
const noNotes = document.querySelector(".no-notes");

let notes, noteID = 0;

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

addButton.addEventListener("click", () => {
   addNoteContainer.style.top = "100px";
   addNoteForm.title.focus();
});

addNoteForm.addEventListener("submit", (e) => {
   e.preventDefault();
   notes.push({
      id: noteID,
      title: addNoteForm.title.value,
      body: addNoteForm.body.value.replaceAll("\n", "<br>")
   });
   localStorage.setItem("notes", JSON.stringify(notes));
   localStorage.setItem("noteID", ++noteID);
   addNoteContainer.style.top = "-600px";
   addToDOM(notes[notes.length - 1]);
   noNotes.style.display = "none";

   addNoteForm.title.value = "";
   addNoteForm.body.value = "";
});

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

addNoteCloseButton.addEventListener("click", () => {
   addNoteContainer.style.top = "-600px";
});

function deleteNote(id) {
   console.log("id", id);  
   document.querySelector("#note" + id).remove();
   notes = notes.filter((note) => note.id !== id);
   localStorage.setItem("notes", JSON.stringify(notes));
   console.log(notes);
   if (notes.length === 0) {
      noNotes.style.display = "flex";
   }
}
