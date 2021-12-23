let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerStopped = true;

let htmlSeconds;
let htmlMinutes;
let htmlMilliseconds;
let htmlToggleButton;

window.onload = function () {
    htmlMinutes = document.getElementById("minutes");
    htmlSeconds = document.getElementById("seconds");
    htmlMilliseconds = document.getElementById("milliseconds");

    htmlToggleButton = document.getElementById("toggleButton");

    htmlMinutes.innerHTML = "00";
    htmlSeconds.innerHTML = "00";
    htmlMilliseconds.innerHTML = "00"
}

function toggleFunction() {
    if(timerStopped){
        htmlToggleButton.innerHTML = "Stop";
        timerStopped = false;
        timerCycle();
    } else {
        htmlToggleButton.innerHTML = "Resume";
        timerStopped = true;
    }
}

function resetFunction() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    htmlMilliseconds.innerHTML = "0" + milliseconds.toString();
    htmlSeconds.innerHTML = "0" + seconds.toString();
    htmlMinutes.innerHTML = "0" + minutes.toString();
    htmlToggleButton.innerHTML = "Start";
    timerStopped = true;
}

function timerCycle() {
    if(!timerStopped){
        milliseconds += 1;

        if(milliseconds === 100){
            milliseconds = 0;
            seconds += 1;
        }

        if(seconds === 60){
            minutes += 1;
            seconds = 0;
        }

        if(milliseconds < 10){
            htmlMilliseconds.innerHTML = "0" + milliseconds.toString();
        } else {
            htmlMilliseconds.innerHTML = milliseconds.toString();
        }

        if(seconds < 10){
            htmlSeconds.innerHTML = "0" + seconds.toString();
        } else {
            htmlSeconds.innerHTML = seconds.toString();
        }

        if(minutes < 10){
            htmlMinutes.innerHTML = "0" + minutes.toString();
        } else {
            htmlMinutes.innerHTML = minutes.toString();
        }

        setTimeout("timerCycle()", 1);
    }
}