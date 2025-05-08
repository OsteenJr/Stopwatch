const stopValue = document.getElementById('stopValue');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateWatch, 10);
        isRunning = true;
    }
    
   
}
function reset() {
    clearInterval(timer);
    isRunning = false; 
    startTime = 0;
    elapsedTime = 0;
    stopValue.textContent = "00:00:00:00"
}
function stopBtn() {
    if (isRunning) {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;
        clearInterval(timer);
        isRunning = false;
    }
}

function updateWatch() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, '0');
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2, '0');
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2, '0');
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    stopValue.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}