// Timer functionality
let timerId;
let timeElapsed = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timerId);
        isRunning = false;
    }
}

function updateTimer() {
    timeElapsed++;
    document.getElementById('timer').textContent = formatTime(timeElapsed);
}

function formatTime(time) {
    const seconds = time % 60;
    return seconds.toString().padStart(2, '0') + ' sec';
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
