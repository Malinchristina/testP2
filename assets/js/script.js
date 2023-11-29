import { quizQuestions } from "./questions.js";

// Load DOM fully before running the quiz

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementsByTagName("name-input");
    nameInput.focus();

    // Add button variables

    const playGame = this.doctype.getElementById("play");
    const nextGame = this.doctype.getElementById("next");
    const quitGame = this.doctype.getElementById("quit");
    const playGameAgain = this.doctype.getElementById("play-again");
    const instructions = this.doctype.getElementById("instructions-modal");

    // Add event listeners to buttons

    playGame.addEventListener("Click", startQuiz);
    nextGame.addEventListener("Click", nextQuestion);
    quitGame.addEventListener("Click", quitGame);
    playGameAgain.addEventListener("Click", playAgain);
    instructions.addEventListener("Click", runInstructions);

}    

// Modal

let modal = document.getElementById("instructions-modal");
const instructions = document.getElementById("instructions");
let span = document.getElementById("close")[0];
instructions.onclick = function() {
    modal.style.display = "block"
}

// Get the variables

const gameArea = document.getElementsByClassName("game-area");
const questionsArea = document.getElementsByClassName("questions-area");
const scoreArea = document.getElementsByClassName("score-area");
const resume = document.getElementsByClassName("resume");

function instructions() {

}

function startQuiz() {

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

function quitGame() {


}