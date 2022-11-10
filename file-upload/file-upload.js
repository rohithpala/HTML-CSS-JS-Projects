const dragArea = document.querySelector(".drag-area");
const dragAndDrop = document.querySelector(".dd-span");
const imageContainer = document.querySelector(".image-container");

const fileInput = document.querySelector("#file-input");

const image = document.querySelector(".image");

let file;

dragArea.addEventListener("dragover", (e) => {
   e.preventDefault();
   dragAndDrop.textContent = "Release to Upload";
   dragArea.classList.add("active");
});

dragArea.addEventListener("dragleave", (e) => {
   e.preventDefault();
   dragAndDrop.textContent = "Drag and Drop";
   dragArea.classList.remove("active");
});

dragArea.addEventListener("drop", (e) => {
   e.preventDefault();

   file = e.dataTransfer.files[0]; // remove index to accept multiple files
   displayFile(file);

   dragAndDrop.textContent = "Drag and Drop";
   dragArea.classList.remove("active");
});

fileInput.addEventListener("input", function() {
   displayFile(this.files[0]);
});

function displayFile(file) {
   const fileType = file.type;
   const validExtensions = ["image/jpeg", "image/jpg", "image/png"];
   if (validExtensions.includes(fileType)) {
      let fileReader = new FileReader();
      fileReader.onload = () => {
         imageContainer.style.display = "flex";
         image.src = fileReader.result;
      };
      fileReader.readAsDataURL(file);
   } else {
      alert("File not supported");
   }
}
