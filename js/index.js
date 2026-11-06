const bookmarkButton = document.querySelector('[data-js="bookmark"]');

const answer = document.querySelector('[data-js="answer"]');
const answerButton = document.querySelector('[data-js="answer-button"]');

bookmarkButton.addEventListener("click", () => {
  if (bookmarkButton.textContent === "♡") {
    bookmarkButton.textContent = "♥";
  } else {
    bookmarkButton.textContent = "♡";
  }
});

answerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");

  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
