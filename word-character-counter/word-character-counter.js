function startCount() {
   countWords();
   countCharacters();
}

function countWords() {
   let lineArray = document.getElementById("text").value.split("\n");
   let count = 0, wordArray;
   lineArray.forEach(line => {
      wordArray = line.split(" ");
      wordArray.forEach(element => {
         if (/[A-Za-z0-9]/.test(element)) count++;
      });
   });

   document.getElementById("word-count").innerText = count;
}

function countCharacters() {
   document.getElementById("character-count").innerText = document.getElementById("text").value.length;
}
