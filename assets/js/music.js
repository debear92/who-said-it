let music = [
    "/assets/music/champagne-problems.mp3",
    "/assets//music/cruel-summer.mp3",
    "/assets//music/dont-blame-me.mp3",
    "/assets//music/get-away-car.mp3",
    "/assets//music/miss-americana-and-the-hearbreak-prince.mp3",
    "/assets//music/speak-now.mp3",
    "/assets//music/the-great-war.mp3",
    "/assets//music/wouldve-couldve-should-ve.mp3"
];

let audioElement = document.getElementById("random-song");
let startStop = document.getElementById("audio");
let start = document.getElementsByClassName("audio-on");
let stop = document.getElementsByClassName("audio-off");
startStop.addEventListener('click', playRandomMusic);

function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * music.length);
    audioElement.src = music[randomIndex];
    audioElement.play();
}