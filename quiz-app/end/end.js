const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
   saveScoreBtn.disabled = !username.value;
});

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
   e.preventDefault();
   saveHighScore();
});

const saveHighScore = () => {
   

   const score = {
      score: mostRecentScore,
      name: username.value
   };

   highScores.push(score);
   highScores.sort((a, b) => b.score - a.score);
   highScores.splice(MAX_HIGH_SCORES);

   localStorage.setItem("highScores", JSON.stringify(highScores));

   alert("Saved Successfully");
   window.location.assign("../index.html");
};
