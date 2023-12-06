// Load DOM fully before running the quiz
// Get the button elements and add event listeners

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "start") {
                checkUserName();
            } else if (this.getAttribute("data-type") === "next") {
                playNextQuestion();
            } else if (this.getAttribute("data-type") === "quit") {
                endGame();
            } else if (this.getAttribute("data-type") === "play-again") {
                playAgain();
            } 
        });
    }


    // Add button variables

    const playGame = document.getElementById("play");
    const nextQuestion = document.getElementById("next");
    const quitGame = document.getElementById("quit");
    const playGameAgain = document.getElementById("play-again");
    
});


/**
 * Show a popup window (Modal) with instructions when the Instructions button is clicked.
 */

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

const gameArea = document.getElementById("game-area");
const questionsArea = document.getElementById("questions-area");
const answersArea = document.getElementsByClassName("answers-area");
const scoreArea = document.getElementById("score-area");
const resume = document.getElementById("resume");
const userNameLabel = document.getElementById("enter-name");
const displayQuestions = document.getElementById("questions");
const shuffledQuestions = shuffleQuizQuestions();

let displayAnswerA = document.getElementById("answersA");
let displayAnswerB = document.getElementById("answersB");
let displayAnswerC = document.getElementById("answersC");
let numberOfQuestions = 0;
let questionIndex = 0;
let score = 0;
let chosenAnswer = false;

// Array to enable/disable color to indicate correct/incorrect answer
const answerColor = [displayAnswerA, displayAnswerB, displayAnswerC];

// Add event listeners to answers buttons
displayAnswerA.addEventListener("click", checkAnswer);
displayAnswerB.addEventListener("click", checkAnswer);
displayAnswerC.addEventListener("click", checkAnswer);


// Check that user name is entered
function checkUserName() {
    const userName = userNameLabel.value.trim();

    if (userName === "") {
        alert("Enter your name please");
    } else {
        startQuiz();
    }
}


// Initiate quiz
function startQuiz() {
    gameArea.classList.add("hide");
    questionsArea.classList.remove("hide");
    questionsArea.classList.add("visible");
    scoreArea.classList.remove("hide");
    scoreArea.classList.add("visible");

    showQuestion();
}


// OK
/**
 * Function to call questions in random order no matter if there are
 * new questions added or removed. 
 */
function shuffleQuizQuestions() {
    let randomQuestions = Math.floor(Math.random() * quizQuestions.length);
    let shuffledQuestion = { ...quizQuestions[randomQuestions] };

    // Get the corresponding answers
    let randomAnswers = Object.keys(shuffledQuestion.answers);
    randomAnswers = randomAnswers.sort(() => Math.random() - 0.5);
    let shuffledAnswers = {};
    for (let key of randomAnswers) {
        shuffledAnswers[key] = shuffledQuestion.answers[key];
    }
    shuffledQuestion.answers = shuffledAnswers;

    return shuffledQuestion;

}


// Show questions
function showQuestion() {
    const currentQuestion = quizQuestions[questionIndex];
    displayQuestions.innerText = currentQuestion.question;

    // Return the correlating answers
    displayAnswerA.innerText = `a. ${currentQuestion.answers.a}`;
    displayAnswerB.innerText = `b. ${currentQuestion.answers.b}`;
    displayAnswerC.innerText = `c. ${currentQuestion.answers.c}`;

    resetBackgroundColor();

    // Let user play 10 questions
    numberOfQuestions++;
    if (numberOfQuestions === 4) { //Change to 11 after testing
        stopGame();
    }

}

// Check selected answer
function checkAnswer(event) {
    const selectedAnswer = event.target.dataset.type;
    const correctAnswer = quizQuestions[questionIndex].correctAnswer;


    // Color correct answer green, incorrect red
    if (selectedAnswer === correctAnswer) {
        event.target.style.backgroundColor = "green";
        incrementScore();
    } else {
        event.target.style.backgroundColor = "red";
        incrementIncorrectScore();
    }
    // ADD COMMENT
    document.querySelectorAll('.answers').forEach(answer => {
        answer.removeEventListener('click', checkAnswer);
        answer.style.pointerEvents = 'none';
    });

    disableClickAnswers();

    chosenAnswer = true;

}

// Show next question
function playNextQuestion() {

    // Check if there are questions left
    if (questionIndex < quizQuestions.length - 1 && chosenAnswer) {

        // Increment the question index
        questionIndex++;

        showQuestion();
        chosenAnswer = false;
    } else {
        if (questionIndex === quizQuestions.length - 1) {
            endGame();
        // Alert if no question is clicked    
        } else {
            alert("Select an answer please");
        }
    }
    
}

// Reset color and add event listener
function resetBackgroundColor() {
    answerColor.forEach(answer => {
        answer.style.backgroundColor = "";
        answer.addEventListener("click", checkAnswer);
        answer.style.pointerEvents = 'auto';
    });
}

// Remove event listener when answer is chosen
function disableClickAnswers() {
    answerColor.forEach(answer => {
        answer.removeEventListener("click", checkAnswer);
        answer.style.pointerEvents = 'none';
    });

}

// Is this needed? Can endGame be called?
function stopGame() {
    endGame();

}

function incrementScore() { }

function incrementIncorrectScore() { }

function resetScore() { }

//Restart the game
function playAgain() {
    resume.classList.add("hide");
    resume.classList.remove("visible");
    questionsArea.classList.add("visible");
    questionsArea.classList.remove("hide");

}
//End game if user want to quit in the middle of the game
function endGame() {
    questionsArea.classList.remove("visible");
    questionsArea.classList.add("hide");
    resume.classList.remove("hide");
    resume.classList.add("visible");

}