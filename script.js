// script.js
const video = document.getElementById('myVideo');

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none';
    }
});

video.addEventListener('pause', function () {
    playButton.style.display = 'block';
});






// script.js
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        alert("Explore the wonders of Sri Lanka!");
    });
});