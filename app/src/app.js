import './styles.css';

let answers= [
    "Yes.",
    "No.",
    "Maybe.",
    "The universe doesn't answer...",
    "Don't count on it.",
    "Ask again later.",
    "As I see it, yes.",
    "For now, no.",
    "Is the sky blue?",
]

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
    
    ansDiv.insertAdjacentHTML(
        "beforeend",
        `<h3 class="question text-center">Question: ${question}</h3>
        <h3 class="answer text-center">Answer: ${randomAnswer}</h3>`
    );

    form.reset();
})