import "./styles.css";

let answers = [
  "Yes.",
  "As I see it, yes.",
  "Absolutely.",
  "Without a doubt.",
  "The odds are in your favor.",
  "Trust your instincts.",
  "All paths lead to yes.",
  "It is written in the stars.",
  "Signs point to yes.",
  "The stars have aligned.",
  "No.",
  "Don't count on it.",
  "For now, no.",
  "Absolutely not.",
  "Highly unlikely.",
  "Better not tell you now.",
  "That's a hard no.",
  "Fate says wait.",
  "The universe doesn't answer...",
  "Maybe.",
];

const negativeAnswers = [
  "No.",
  "Don't count on it.",
  "For now, no.",
  "Absolutely not.",
  "Highly unlikely.",
  "Better not tell you now.",
  "That's a hard no.",
  "Fate says wait.",
  "The universe doesn't answer...",
  "Maybe.",
];

const form = document.querySelector(".askButton");
const questionInput = document.querySelector("#askInput");

form.addEventListener("submit", (a) => eightBall(a));

function eightBall(a) {
  a.preventDefault();
  const question = questionInput.value;

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

  const ansDiv = document.querySelector(".ansDiv");
  ansDiv.innerHTML = ``;
  ansDiv.style.display = "block";

  if (negativeAnswers.includes(randomAnswer)) {
    ansDiv.insertAdjacentHTML(
      "beforeend",
      `<h3 class="question text-2xl text-center">Question: ${question}</h3>
      <h3 class="answer text-2xl text-center text-red-500">Answer: ${randomAnswer}</h3>`,
    );
  } else {
    ansDiv.insertAdjacentHTML(
      "beforeend",
      `<h3 class="question text-2xl text-center">Question: ${question}</h3>
      <h3 class="answer text-2xl text-center text-green-500">Answer: ${randomAnswer}</h3>`,
    );
  }
  form.reset();
}