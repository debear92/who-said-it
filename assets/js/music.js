let music = [
    "../music/champagne-problems.mp3",
    "../music/cruel-summer.mp3",
    "../music/dont-blame-me.mp3",
    "../music/get-away-car.mp3",
    "../music/miss-americana-and-the-hearbreak-prince.mp3",
    "../music/speak-now.mp3",
    "../music/the-great-war.mp3",
    "../music/wouldve-couldve-should-ve.mp3"
];

let audioElement = document.getElementById("audio");

audioElement.addEventListener('click', playRandomMusic);

function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * music.length);

    audioElement.src = music[randomIndex];

    audioElement.play();
}