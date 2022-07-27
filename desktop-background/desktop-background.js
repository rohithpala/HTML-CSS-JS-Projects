const imageField = document.getElementById("image-field");
let image, reader, file;

imageField.addEventListener("input", function () {
   file = imageField.files[0];

   image = document.createElement("img");
   image.id = "image";
   reader = new FileReader();
   reader.onloadend = function () {
      image.src = reader.result;
   }
   reader.readAsDataURL(file);

   imageField.after(image);

   createBackground();
});

function createBackground() {
   const screenWidth = window.screen.width;
   const screenHeight = window.screen.height;
   const imageElement = document.getElementById("image");
   console.log(imageElement.clientWidth, imageElement.clientHeight);
   // console.log(image);
}