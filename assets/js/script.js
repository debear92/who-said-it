const quizQuestion = [
    {
        question: '"Your faithless love\'s the only hoax I believe in"', 
        answer: 'Taylor Swift',
        explanation: '"hoax" from the album "folklore"'
    },

    {
        question: '“Hell is empty and all the devils are here.”',
        answer: 'Shakespeare',
        explanation: 'From the play "The Tempest"'
    },

    {
        question: '"Do you miss the rogue who coaxed you into paradise and left you there?"',
        answer: 'Taylor Swift',
        explanation: '"coney island" from the album "evermore"'
    },

    {
        question: '"Did the twin flame bruise pain you blue?"',
        answer: 'Taylor Swift',
        explanation: '"All Too Well (10 Minute Version) (Taylor\'s Version) (From The Vault)." from the album "Red (Taylor\'s Version)"'
    },

    {
        question: '"I\'d meet you where the spirit meets the bones in a faith-forgotten land"',
        answer: 'Taylor Swift',
        explanation: '"ivy" from the album "evermore"'
    },

    {
        question: '"How can it be said I am alone when all the world is here to look on me?"',
        answer: 'Shakespeare',
        explanation: 'From the play "A midsummer night\'s dream"'
    },

    {
        question: '"Can\'t not think of all the cost and the things that will be lost"',
        answer: 'Taylor Swift',
        explanation: '"evermore" from the album evermore'
    },

    {
        question: '"And I\'ll stay... forgetting any other home but this."',
        answer: 'Shakespeare',
        explanation: 'From the play "Romeo and Juliet"'
    },

    {
        question: '"When I was at home, I was in a better place."',
        answer: 'Shakespeare',
        explanation: 'From the play "As you like it"'
    },

    {
        question: '"Is it romantic how all my elegies eulogize me?"',
        answer: 'Taylor Swift',
        explanation: '"The lakes" from the album "folklore (deluxe version)'
    }
]

let questionContainer = document.getElementById("question");
let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", getQuestion ())

function getQuestion() {
    let currentQuizQuestion = quizQuestion[currentQuestion];
    questionContainer.innerText = currentQuizQuestion.question;
}


function checkAnswer() {
    console.log("button click")
    let currentQuizQuestion = quizQuestion[currentQuestion];

}