//declarations
const audioOn = document.getElementById("on");
const audioOff = document.getElementById("off");
const correctAudio = new Audio('assets/sound/clapping.mp3');
const wrongAudio = new Audio ('assets/sound/trouble.mp3');
window.resultScreen = new Audio ('assets/sound/wouldve-couldve-should-ve.mp3');

//Adding conditions for the audio to always be off when first loading the page
audioOn.style.display = "none";
audioOff.style.display = "block";
correctAudio.muted = true;
wrongAudio.muted = true;
resultScreen.muted = true;

//set initial volume level
correctAudio.volume = 0.3;
wrongAudio.volume = 0.3;
resultScreen.volume = 0.3;

//event listeners
audioOn.addEventListener("click", toggleAudio);
audioOff.addEventListener("click", toggleAudio);

/**
 * Switch audio off if the audio is already playing, switch the audio on if the audio is currently not playing 
 */
function toggleAudio() {
    if (audioOn.style.display === "none") {
        audioOn.style.display = "block";
        audioOff.style.display = "none";
        correctAudio.muted = false;
        wrongAudio.muted = false;
        resultScreen.muted = false;
    } else {
        audioOn.style.display = "none";
        audioOff.style.display = "block";
        correctAudio.muted = true;
        wrongAudio.muted = true;
        resultScreen.muted = true;
    }
}

/**
 * Determine sound to play when a correct answer is selected
 */
function playCorrectAudio() {
    correctAudio.play();
}

/**
 * Determine sound to play when a wrong answer is selected
 */
function playWrongAudio() {
    wrongAudio.play();
}

/**
 * Determine sound to play when reaching the final results screen
 */
function playScorePage() {
    resultScreen.play();
}

