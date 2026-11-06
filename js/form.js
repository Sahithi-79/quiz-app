const form = document.querySelector(".quiz-form");

const questionInput = document.querySelector('[data-js="question"]');
const answerInput = document.querySelector('[data-js="answer"]');
const tagInput = document.querySelector('[data-js="tag"]');
const questionCounter = document.querySelector('[data-js="question-counter"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const questionText = questionInput.value;
  const answerText = answerInput.value;
  const tagText = tagInput.value;

  const newCard = document.createElement("article");
  newCard.classList.add("quiz-card");

  const bookmarkButton = document.createElement("button");
  bookmarkButton.classList.add("quiz-card__bookmark");
  bookmarkButton.textContent = "♡";
  bookmarkButton.type = "button";
  newCard.append(bookmarkButton);

  bookmarkButton.addEventListener("click", () => {
    if (bookmarkButton.textContent === "♡") {
      bookmarkButton.textContent = "♥";
    } else {
      bookmarkButton.textContent = "♡";
    }
  });

  const questionHeading = document.createElement("h2");
  questionHeading.textContent = questionText;
  questionHeading.classList.add("quiz-card__question");

  const answerParagraph = document.createElement("p");
  answerParagraph.textContent = answerText;
  answerParagraph.classList.add("quiz-card__answer", "hidden");

  const answerButton = document.createElement("button");
  answerButton.classList.add("button");
  answerButton.textContent = "Show Answer";
  answerButton.type = "button";

  answerButton.addEventListener("click", () => {
    answerParagraph.classList.toggle("hidden");

    if (answerParagraph.classList.contains("hidden")) {
      answerButton.textContent = "Show Answer";
    } else {
      answerButton.textContent = "Hide Answer";
    }
  });

  newCard.append(questionHeading);
  newCard.append(answerParagraph);
  newCard.append(answerButton);

  const tagList = document.createElement("ul");
  tagList.classList.add("quiz-card__tags");

  const tagItem = document.createElement("li");
  tagItem.classList.add("quiz-card__tag");
  tagItem.textContent = tagText;

  tagList.append(tagItem);
  newCard.appendChild(tagList);

  form.after(newCard);
  form.reset();
  //document.querySelector(".quiz").appendChild(newCard);
});

// Add the question counter here
questionInput.addEventListener("input", () => {
  updateCounter(questionInput, questionCounter);
});

answerInput.addEventListener("input", () => {
  updateCounter(answerInput, answerCounter);
});

function updateCounter(input, counter) {
  counter.textContent = 150 - input.value.length + " characters remaining";
}
