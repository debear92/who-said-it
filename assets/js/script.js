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
]

//variables
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById('question-container');
const options = document.getElementsByClassName("option");
let currentQuestion = 0;
let score = 0;

//event listeners
document.addEventListener("DOMContentLoaded", getQuestion());

function getQuestion() {
    const randomQuote = Math.floor(Math.random() *quotes.length);
    const currentQuizQuestion = quotes[randomQuote];
    const author = quotes[randomQuote].author;
    questionContainer.innerText = currentQuizQuestion.quote;
}

function checkAnswer(answer) {
    const author = quotes[currentQuestion].author.toLowerCase();

    //disable the options
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }

    // add class tho show correct or wrong answer
    if (author === answer) {
        console.log('You are right');
    } else {
        console.log ('you are wrong');
    }
}