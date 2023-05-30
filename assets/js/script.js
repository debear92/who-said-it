//array containing quiz questions
const quotes = [
    {
        quote: '"Your faithless love\'s the only hoax I believe in"', 
        author: 'Taylor Swift',
        explanation: '"hoax" from the album "folklore"'
    },

    {
        quote: '“Hell is empty and all the devils are here.”',
        author: 'Shakespeare',
        explanation: 'From the play "The Tempest"'
    },

    {
        quote: '"Do you miss the rogue who coaxed you into paradise and left you there?"',
        author: 'Taylor Swift',
        explanation: '"coney island" from the album "evermore"'
    },

    {
        quote: '"Did the twin flame bruise pain you blue?"',
        author: 'Taylor Swift',
        explanation: '"All Too Well (10 Minute Version) (Taylor\'s Version) (From The Vault)." from the album "Red (Taylor\'s Version)"'
    },

    {
        quote: '"I\'d meet you where the spirit meets the bones in a faith-forgotten land"',
        author: 'Taylor Swift',
        explanation: '"ivy" from the album "evermore"'
    },

    {
        quote: '"How can it be said I am alone when all the world is here to look on me?"',
        author: 'Shakespeare',
        explanation: 'From the play "A midsummer night\'s dream"'
    },

    {
        quote: '"Can\'t not think of all the cost and the things that will be lost"',
        author: 'Taylor Swift',
        explanation: '"evermore" from the album evermore'
    },

    {
        quote: '"And I\'ll stay... forgetting any other home but this."',
        author: 'Shakespeare',
        explanation: 'From the play "Romeo and Juliet"'
    },

    {
        quote: '"When I was at home, I was in a better place."',
        author: 'Shakespeare',
        explanation: 'From the play "As you like it"'
    },

    {
        quote: '"Is it romantic how all my elegies eulogize me?"',
        author: 'Taylor Swift',
        explanation: '"The lakes" from the album "folklore (deluxe version)'
    }
];

//declarations
const questionContainer = document.getElementById('question-container');
const options = document.getElementsByClassName("option");
const nextButton = document.getElementById("next-question");
let comment = document.getElementById("explanation");
let oldScore = parseInt(document.getElementById("score").innerText);
let restartButton = document.getElementById('restart');
let currentQuestion = 0;
let btnTSwift = document.getElementById('taylor-button');
let btnShake = document.getElementById('shakespeare-button');
let restart = document.getElementById('restart-game');


//event listeners
document.addEventListener("DOMContentLoaded", startGame);
nextButton.addEventListener('click', getNextQuestion);
btnTSwift.addEventListener('click', (event) => {
    checkAnswer(event, 'taylor swift');
  });
  btnShake.addEventListener('click', (event) => {
      checkAnswer(event, 'shakespeare');
  });  
restartButton.addEventListener('click', restartGame);
restart.addEventListener('click', restartGame);

//functions

/**
 * Start the game by getting the first question in the array
 * Hide the next and restart button
 * Reset correctAudio and wrongAudio to 0
 */
function startGame() {
    let currentQuizQuestion = quotes[currentQuestion];
    comment.style.display = "none";
    questionContainer.innerText = currentQuizQuestion.quote;
    correctAudio.currentTime = 0;
    wrongAudio.currentTime = 0;
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
        options[i].classList.remove("correct", "wrong");
    }
}

/**
 * Check if answer provided by user is correct, user won't be able to change answer once an option is selected
 * When getting the correct or wrong answer the user will see a short explanation of the answer underneath the quote itself
 */
function checkAnswer(e, answer) {
    const author = quotes[currentQuestion].author.toLowerCase();

//disable the options
for (let i = 0; i < options.length; i++) {
    options[i].disabled = true;
}

// add behaviour for correct or wrong answer
if (author === answer) {
    e.target.classList.add("correct");
    incrementScore();
    playCorrectAudio();
} else {
    e.target.classList.add("wrong");
    playWrongAudio();
}

comment.style.display = "flex";
document.getElementById("explanation").innerText = quotes[currentQuestion].explanation;
nextButton.style.display = "flex"; 
}

/**
 * For each correct answer the score it's incremented by one
 */
function incrementScore() {
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * When moving to a new question the correctAudio or wrongAudio will stop play
 */
function stopAudio() {
    correctAudio.pause();
    wrongAudio.pause();
}

/**
 * When clicking on the next question button the user will receive a new question, if there are still questions in the array
 * Otherwise the result screen will display
 * The correctAudio or wrongAudio will stop play
 */
function getNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quotes.length) {
        stopAudio();
        startGame();
    } else {
        stopAudio();
        showResult();
    }
}

/**
 * User will get a different message in the results screen according to the score received
 * The next button and the options will be hidden, the user will be presented with a button to start again the game
 */
function showResult() {
    if (oldScore >= 6 ) {
        questionContainer.innerText = `You scored ${oldScore} out of ${quotes.length}! You are a real Swiftie or maybe a Shakesperian poet or a bit of both!`;
    } else {
    questionContainer.innerText = `You scored ${oldScore} out of ${quotes.length}! Maybe you should read some more english litterature and listen to the latest Taylor Swift's album!`;
    }
    playScorePage();
    nextButton.style.display = 'none';
    comment.style.display = 'none';
    restartButton.style.display = "block";
    btnTSwift.style.display = 'none';
    btnShake.style.display = 'none';
    restart.style.display = "flex";
}

/**
 * Restart game from the first question
 * The score will go back to 0
 */
function restartGame() {
    document.getElementById("score").innerText =  0; 
    currentQuestion = 0;
    oldScore = 0;
    stopResultScreen();
    startGame();
    btnTSwift.style.display = 'inline-block';
    btnShake.style.display = 'inline-block';
    restart.style.display = "none";
    //Set the song at the result screen to start from the beginning each time the game starts again
    if (resultScreen) {
    window.resultScreen.currentTime = 0;
    }
}

/**
 * When restarting the game the song from result page will stop too
 */
function stopResultScreen() {
   if(window.resultScreen) {
   window.resultScreen.pause();
   }
}