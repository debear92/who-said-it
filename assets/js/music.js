//constants
const questionRightSound = new Audio("assets/sound/clapping.mp3");
const questionWrongSound = new Audio("assets/sound/trouble.mp3");
const audioOn = document.getElementsByClassName('audio-on');
const audioOff = document.getElementsByClassName('audio-off');
const audioButton = document.getElementById('audio');

//event listner
audioButton.addEventListener('click', () => {
    toggleAudio();
});

//functions
/**
 * Turns the audio on, if the audio is not playing, or off if it's already playing
 */
function toggleAudio(){
    switch(audioPlaying){
        case false:
            turnOn();
            break;
        case true:
            turnOff();
            break;
    }
}

function turnOn()
function turnOff()
function questionRight()
function questionWrong()