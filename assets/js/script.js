import { questions } from "./questions.js";

// Load DOM fully before running the quiz

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementsByTagName("name-input");
    nameInput.focus();

    // Button variables

    const playGame = this.doctype.getElementById("play");
    const nextGame = this.doctype.getElementById("next");
    const quitGame = this.doctype.getElementById("quit");
    const playGameAgain = this.doctype.getElementById("play-again");
    const instructions = this.doctype.getElementById("instructions-modal");

    // Add event listeners to buttons

    playGame.addEventListener("Click", runGame);
    nextGame.addEventListener("Click", runNextQuestion);
    quitGame.addEventListener("Click", quitGame);
    playGameAgain.addEventListener("Click", runGame);
    instructions.addEventListener("Click", runInstructions);

}    

// Get the virables

const gameArea = document.getElementsByClassName("game-area");
const questionsArea = document.getElementsByClassName("questions-area");
const scoreArea = document.getElementsByClassName("score-area");
const resume = document.getElementsByClassName("resume");

function startQuiz() {

}

function shuffleQuizQuestions() {

}

function nextQuestion() {

}

function checkAnswer() {

}

function playAgain() {

}