const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

const scoreText = document.getElementById("score");
const progessText = document.getElementById("progressText");
const progressBarFill = document.getElementById("progress-bar-fill");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let availableQuestions = [];
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0, questionCounter = 0;
let questions = [];
let numOfQuestions = 0;

fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple")
   .then(res => {
      return res.json();
   })
   .then(loadedQuestions => {
      questions = loadedQuestions.results.map(loadedQuestion => {
         const formattedQuestion = {
            question: loadedQuestion.question,
         }

         const answerChoices = [...loadedQuestion.incorrect_answers];
         formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
         answerChoices.splice(formattedQuestion.answer, 0, loadedQuestion.correct_answer);

         answerChoices.forEach((choice, index) => {
            formattedQuestion[`choice${index + 1}`] = choice;
         });

         return formattedQuestion;
      });

      numOfQuestions = questions.length;
      startGame();
   })
   .catch(err => {
      console.error(err);
   });

// CONSTANTS
const CORRECT_BONUS = 10;

startGame = () => {
   questionCounter = 0;
   score = 0;
   availableQuestions = [...questions];
   getNewQuestion();
   game.classList.remove("hidden");
   loader.classList.add("hidden");
}

getNewQuestion = () => {
   if (availableQuestions.length === 0 || questionCounter >= numOfQuestions) {
      localStorage.setItem("mostRecentScore", score);
      window.location.assign("../end/end.html");
      return;
   }

   questionCounter++;
   progessText.innerText = `Question: ${questionCounter}/${numOfQuestions}`;
   // update the progress bar
   progressBarFill.style.width = `${(questionCounter / numOfQuestions) * 100}%`;

   const questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;
   choices.forEach(choice => {
      const number = choice.dataset.number;
      choice.innerText = currentQuestion["choice" + number];
   });

   availableQuestions.splice(questionIndex, 1);
   acceptingAnswers = true;
}

choices.forEach(choice => {
   choice.addEventListener("click", e => {
      if (!acceptingAnswers)
         return;
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = parseInt(selectedChoice.dataset.number);

      const classToApply = selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";
      selectedChoice.parentElement.classList.add(classToApply);

      if (classToApply === "correct") {
         updateScore(CORRECT_BONUS);
      }

      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply);
         getNewQuestion();
      }, 1000);
   });
});

updateScore = newScore => {
   score += newScore;
   scoreText.innerText = score;
};
