let myAudio = document.getElementById("audio");
let onIcon = document.getElementsByClassName("audio-on")[0];
let offIcon = document.getElementsByClassName("audio-off")[0];
onIcon.style.display = "none";
offIcon.style.display = "in-line";
let isPlaying = false;

myAudio.addEventListener('click', togglePlay);

function togglePlay() {
    isPlaying ? audioOff() : audioOn();
};

function audioOn(){
   isPlaying = true;
   onIcon.style.display = "in-line";
   offIcon.style.display = "none";
}

function audioOff() {
    isPlaying = false;
    onIcon.style.display = "none";
    offIcon.style.display = "in-line";
}