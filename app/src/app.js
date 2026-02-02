import "./styles.css";

let answers = [
  "Yes.",
  "No.",
  "Maybe.",
  "The universe doesn't answer...",
  "Don't count on it.",
  "Ask again later.",
  "As I see it, yes.",
  "For now, no.",
  "Is the sky blue?",
  "Absolutely.",
  "Signs point to yes.",
  "Highly unlikely.",
  "Without a doubt.",
  "The odds are in your favor.",
  "Better not tell you now.",
  "Trust your instincts.",
  "All paths lead to yes.",
  "That's a hard no.",
  "Fate says wait.",
  "It is written in the stars."
];

const form = document.querySelector(".askButton");
const questionInput = document.querySelector("#askInput");

form.addEventListener("submit", (a) => {
  a.preventDefault();

  const question = questionInput.value;

  const randomIndex = Math.floor(Math.random() * answers.length);
  const randomAnswer = answers[randomIndex];

  console.log("Question:", question);
  console.log("Answer:", randomAnswer);

  const ansDiv = document.querySelector(".ansDiv");

  ansDiv.innerHTML = ``;

  ansDiv.insertAdjacentHTML(
    "beforeend",
    `<h3 class="question text-2xl text-center">Question: ${question}</h3>
        <h3 class="answer text-2xl text-center">Answer: ${randomAnswer}</h3>`,
  );

  form.reset();
});