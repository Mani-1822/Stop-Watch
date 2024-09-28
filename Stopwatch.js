window.onload = function() {
    let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
    let timer;
    let isRunning = false;
    const timeDisplay = document.querySelector('.time');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(updateTime, 10);
        }
    }

    function stopStopwatch() {
        clearInterval(timer);
        isRunning = false;
    }

    function resetStopwatch() {
        clearInterval(timer);
        isRunning = false;
        hours = minutes = seconds = milliseconds = 0;
        updateDisplay();
    }

    function updateTime() {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;

                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }

        updateDisplay();
    }

    function updateDisplay() {
        const formattedTime = 
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds) + ":" +
            (milliseconds < 100 ? "0" + (milliseconds / 10) : milliseconds / 10);

        timeDisplay.textContent = formattedTime;
    }

    startButton.addEventListener('click', startStopwatch);
    stopButton.addEventListener('click', stopStopwatch);
    resetButton.addEventListener('click', resetStopwatch);
};
