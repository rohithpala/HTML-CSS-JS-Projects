// let speechRecognition = window.webkitSpeechRecognition;
const recognition = new window.webkitSpeechRecognition();

const content = document.getElementById("content");
const condition = document.getElementById("condition");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const confidence = document.getElementById("confidence");
const modalStyle = document.getElementById("url-modal-container").style;
const modalOpenButton = document.getElementById("open-button");
const urlInput = document.getElementById("url");
let transcript, confidencePercentage;
let msg = new SpeechSynthesisUtterance(), url;

recognition.continuous = true;

recognition.onstart = function () {
   stopButton.style.pointerEvents = "inherit";
   condition.innerText = "Voice Recognition Started";
};

recognition.onerror = function (event) {
   condition.innerText = "Try Again";
   console.log(event);
};

recognition.onresult = function (event) {
   const current = event.resultIndex;
   transcript = event.results[current][0].transcript;
   if (transcript.toLowerCase() === "clear all") {
      content.value = "";
      confidence.innerText = "";
   } else if (transcript.toLowerCase() === "who are you") {
      msg.text = "I am Rohith's Assistant";
      window.speechSynthesis.speak(msg);
   } else if (/["open *"]/.test(transcript.toLowerCase())) {
      modalStyle.display = "flex";
   } else {
      confidencePercentage = event.results[current][0].confidence;
      confidence.innerHTML = "<b>Confidence</b>: " + confidencePercentage * 100 + "%";
      content.value += " " + transcript;
   }

   condition.innerText = "Voice Recognition Paused";

   startButton.innerText = "Continue Recognizing Speech";
   startButton.style.pointerEvents = "inherit";

   recognition.stop();

   stopButton.style.pointerEvents = "inherit";
};

startButton.addEventListener("click", function () {
   recognition.start();
   if (startButton.innerText === "Recognize Speech") {
      startButton.style.pointerEvents = "none";
   }
});

stopButton.addEventListener("click", function () {
   recognition.stop();
   stopButton.style.pointerEvents = "none";
   startButton.innerText = "Recognize Speech";
   condition.innerText = "Voice Recognition Stopped";
});

modalOpenButton.addEventListener("click", function () {
   window.open(urlInput.value, "_blank").focus();
   modalStyle.display = "none"
});