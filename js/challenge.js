let counterValue = 0;
let timerId;
const counterDisplay = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("like");
const pauseButton = document.getElementById("pause");
const commentInput = document.getElementById("commentInput");
const commentButton = document.getElementById("commentButton");
const commentList = document.getElementById("commentList");
const likesDisplay = document.getElementById("likesDisplay");

let likes = {};

function incrementCounter() {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
}

function startTimer() {
  timerId = setInterval(incrementCounter, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  disableButtons();
  pauseButton.textContent = "Resume";
}

function resumeTimer() {
  startTimer();
  enableButtons();
  pauseButton.textContent = "Pause";
}

function disableButtons() {
  plusButton.disabled = true;
  minusButton.disabled = true;
  likeButton.disabled = true;
  commentButton.disabled = true;
}

function enableButtons() {
  plusButton.disabled = false;
  minusButton.disabled = false;
  likeButton.disabled = false;
  commentButton.disabled = false;
}

plusButton.addEventListener("click", () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
});

minusButton.addEventListener("click", () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
});

likeButton.addEventListener("click", () => {
  if (!likes[counterValue]) {
    likes[counterValue] = 0;
  }
  likes[counterValue] += 1;
  likesDisplay.textContent = `Likes: ${likes[counterValue]}`;
});

pauseButton.addEventListener("click", () => {
  if (pauseButton.textContent === "Pause") {
    pauseTimer();
  } else {
    resumeTimer();
  }
});

commentButton.addEventListener("click", () => {
  const comment = commentInput.value;
  if (comment) {
    const newComment = document.createElement("li");
    newComment.textContent = comment;
    commentList.appendChild(newComment);
    commentInput.value = ""; // Clear input after submitting
  }
});

// Initialize the timer
startTimer();
