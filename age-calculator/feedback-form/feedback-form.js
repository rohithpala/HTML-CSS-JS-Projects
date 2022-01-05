function noOfCharactersLeft() {
     const feedback = document.getElementById("feedback-input");
     const clPara = document.getElementById("characters-left-para");
     len = feedback.value.length;
     if (len === 0) {
          clPara.style.visibility = 'hidden';
          document.getElementById("success-message").style.visibility = 'hidden';
     } else {
          clPara.style.visibility = 'visible';
          clPara.style.color = 'skyblue';
          if (len > 500) {
               clPara.style.color = 'red';
          }
          document.getElementById("characters-left").innerText = 500 - len;
     }
}

function submitAlert() {
     const feedback = document.getElementById("feedback-input");
     const successMessage = document.getElementById("success-message");
     if (feedback.value.length > 500) {
          alert("Feedback Exceeded Maximum Allowed Characters.\nReduce your feedback to at max of 500 characters");
     } else {
          if (feedback.value === "") {
               alert("Your Feedback is Empty. Please type your Feedback");
          } else {
               if (confirm("We'll Send your Feedback")) {
                    document.getElementById("characters-left-para").style.visibility = 'hidden';
                    successMessage.style.visibility = 'visible';
               }
               setTimeout(function () {
                    feedback.value = '';
                    successMessage.style.visibility = 'hidden';
               }, 5000);
          }
     }
}
