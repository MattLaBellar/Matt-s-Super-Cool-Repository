// Selectors
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);

// Handlers

// Play and Pause Video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update the Play/Pause Icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    } else {
        play.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    }
}

// Stop the Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// Update the Progress and Timestamp
function updateProgress() {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;

    // Compute the minutes
    let minutes = Math.floor(video.currentTime / 60);

    // Prefix with a zero (0) if the minutes are single digit values
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    // Compute the seconds
    let seconds = Math.floor(video.currentTime % 60);

    // Prefix with a zero (0) if the seconds are single digit values
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Set Video Timestamp to Progress
function setVideoProgress() {
    const location = (Number(progress.value) * video.duration) / 100;
    video.currentTime = location;
}
