function decideWhichDivToShow() {
  let userInput = parseInt(document.querySelector("#userInputAge").value);

  if (userInput >= 18) {
    // Show can voting div
    document.querySelector("#can-vote").removeAttribute("class");
  } else {
    // Show cannot vote div
    document.querySelector("#cannot-vote").removeAttribute("class");
  }
}

function submit(event) {
  event.preventDefault();
  decideWhichDivToShow();
}

function setFormSubmissionEventHandler() {
  let userForm = document.querySelector("form");
  userForm.addEventListener("submit", submit);
}

window.onload = function () {
  setFormSubmissionEventHandler();
};
