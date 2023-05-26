const audioOn = document.getElementById("on");
const audioOff = document.getElementById("off");
const correctAudio = new Audio('assets/sound/clapping.mp3');
const wrongAudio = new Audio ('assets/sound/trouble.mp3');

audioOn.addEventListener("click", toggleAudio);
audioOff.addEventListener("click", toggleAudio);

function toggleAudio() {
    if (audioOn.style.display === "none") {
        audioOn.style.display = "in-line";
        audioOff.style.display = "none";
        correctAudio.muted = false;
        wrongAudio.muted = false;
    } else {
        audioOn.style.display = "none";
        audioOff.style.display = "in-line";
        correctAudio.muted = true;
        wrongAudio.muted = true;
    }
}

function playCorrectAudio() {
    correctAudio.play();
}

function playWrongAudio() {
    wrongAudio.play();
}