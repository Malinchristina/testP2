// import { quizQuestions } from "./questions.js";

// Load DOM fully before running the quiz
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start") {
                startQuiz();
            } else if (this.getAttribute("data-type") === "next") {
                nextQuestion();
            } else if (this.getAttribute("data-type") === "quit") {
                endGame();
            } else if (this.getAttribute("data-type") === "play-again") {
                playAgain();
            }
        });
    }


    // Add button variables

    const playGame = document.getElementById("play");
    const nextGame = document.getElementById("next");
    const quitGame = document.getElementById("quit");
    const playGameAgain = document.getElementById("play-again");


    // Add event listeners to buttons

    playGame.addEventListener("click", startQuiz);
    nextGame.addEventListener("click", nextQuestion);
    quitGame.addEventListener("click", endGame);
    playGameAgain.addEventListener("click", playAgain);

});

// Modal for instructions

let instructionsPopup = document.getElementById("instructions-modal");
const instructionsButton = document.getElementById("instructions");
let span = document.getElementsByClassName("close")[0];
instructionsButton.onclick = function () {
    instructionsPopup.style.display = "block";
};
// Close modal
span.onclick = function () {
    instructionsPopup.style.display = "none";
};


// Get global variables

const gameArea = document.getElementsByClassName("game-area");
const questionsArea = document.getElementsByClassName("questions-area");
const scoreArea = document.getElementsByClassName("score-area");
const resume = document.getElementsByClassName("resume");

let displayQuestions = document.getElementById("questions");


function checkUserName() {


}

function startQuiz() {
    const gameArea = document.getElementById("game-area");
    gameArea.classList.add("hide");
    questionsArea.classList.add("visible");

}

function showQuestions(questions,) {
    let;


}

function shuffleQuizQuestions() {
    let randomQuestions = Math.floor(Math.random() * 10);
    return quizQuestions[randomQuestions];


}

function nextQuestion() {

}

function checkAnswer() {

}

function incrementScore() {}

function incrementIncorrectScore() {}

function resetScore() {

}

function playAgain() {

}

function endGame() {


}