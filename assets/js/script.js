// import { quizQuestions } from "./questions.js";

// Load DOM fully before running the quiz

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementsByTagName("name-input");
    nameInput.focus();

    // Add button variables

    const playGame = doctype.getElementById("play");
    const nextGame = doctype.getElementById("next");
    const quitGame = doctype.getElementById("quit");
    const playGameAgain = doctype.getElementById("play-again");
    
    // Add event listeners to buttons

    playGame.addEventListener("click", startQuiz);
    nextGame.addEventListener("click", nextQuestion);
    quitGame.addEventListener("click", endGame);
    playGameAgain.addEventListener("click", playAgain);
   // instructions.addEventListener("click", openInstructions);

} )  

// Modal for instructions

let instructionsPopup = document.getElementById("instructions-modal");
const instructionsButton = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];
instructionsButton.onclick = function () {
    instructionsPopup.style.display = "block";
}
// Close modal
span.onclick = function () {
    instructionsPopup.style.display = "none";
}


// Get the variables

const gameArea = document.getElementsByClassName("game-area");
const questionsArea = document.getElementsByClassName("questions-area");
const scoreArea = document.getElementsByClassName("score-area");
const resume = document.getElementsByClassName("resume");


function checkUserName() {


}

function startQuiz() {
    resetScore();

}

function showQuestions(questions,) {


}

function shuffleQuizQuestions() {

}

function nextQuestion() {

}

function checkAnswer() {

}

function resetScore() {
    
}

function playAgain() {

}

function endGame() {


}