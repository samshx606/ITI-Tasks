var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var milliseconds = document.getElementById('milliseconds');
var startStopButton = document.getElementById('startStop');
var timer;
var isRunning = false;
function formatMS(value) {
    return value < 10 ? '00' + value : value < 100 ? '0' + value : value;
}
function formatTime(value) {
    return value < 10 ? '0' + value : value;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        startTimer();
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    startStopButton.textContent = 'Start';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
    milliseconds.textContent = '000';
}

function startTimer() {
    let ms = parseInt(milliseconds.textContent);
    let sec = parseInt(seconds.textContent);
    let min = parseInt(minutes.textContent);
    let hr = parseInt(hours.textContent);

    timer = setInterval(function() {
        ms += 10;
        if (ms >= 1000) {
            ms = 0;
            sec++;
            if (sec >= 60) {
                sec = 0;
                min++;
                if (min >= 60) {
                    min = 0;
                    hr++;
                    if (hr >= 100) {
                        hr = 0;
                    }
                }
            }
        }

        milliseconds.textContent = formatMS(ms);
        seconds.textContent = formatTime(sec);
        minutes.textContent = formatTime(min);
        hours.textContent = formatTime(hr);
    }, 10);
}