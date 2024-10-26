const tracks = [
    { name: "Track 1", src: "tracks/track1.mp3", cover: "images/cover1.jpg" },
    { name: "Track 2", src: "tracks/track2.mp3", cover: "images/cover2.jpg" },
    { name: "Track 3", src: "tracks/track3.mp3", cover: "images/cover3.jpg" },
    { name: "Track 4", src: "tracks/track4.mp3", cover: "images/cover4.jpg" },
    { name: "Track 5", src: "tracks/track5.mp3", cover: "images/cover5.jpg" },
];


let currentTrack = 0;
let isPlaying = false;
const audio = new Audio();

function loadTrack(index) {
    audio.src = tracks[index].src;
    document.getElementById("cover").src = tracks[index].cover;
    document.getElementById("track-name").textContent = tracks[index].name;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        document.getElementById("play-pause").textContent = "Play";
    } else {
        audio.play();
        document.getElementById("play-pause").textContent = "Pause";
    }
    isPlaying = !isPlaying;
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    playPause();
}

document.getElementById("play-pause").onclick = playPause;
document.getElementById("next").onclick = nextTrack;
loadTrack(currentTrack);
