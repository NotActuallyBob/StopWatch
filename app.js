let millisecond = 0;
let sec = 0;
let min = 0;
let timerStopped = true;

let htmlSeconds;
let htmlMinutes;
let htmlMilliseconds;

window.onload = function () {
    htmlMinutes = document.getElementById("minutes");
    htmlSeconds = document.getElementById("seconds");
    htmlMilliseconds = document.getElementById("milliseconds");

    htmlMinutes.innerHTML = "mins";
    htmlSeconds.innerHTML = "secs";
    htmlMilliseconds.innerHTML = "milis"
}

function startFunction() {
    if(timerStopped){
        timerStopped = false;
        timerCycle();
    }
}

function stopFunction() {
    if(!timerStopped){
        timerStopped = true;
    }
}

function resetFunction() {
    millisecond = 0;
    sec = 0;
    min = 0;
    htmlMilliseconds.innerHTML = "0" + millisecond.toString();
    htmlSeconds.innerHTML = "0" + sec.toString();
    htmlMinutes.innerHTML = "0" + min.toString();
    timerStopped = true;
}

function timerCycle() {
    if(!timerStopped){
        millisecond += 1;

        if(millisecond === 100){
            millisecond = 0;
            sec += 1;
        }

        if(sec === 60){
            min += 1;
            sec = 0;
        }

        if(millisecond < 10){
            htmlMilliseconds.innerHTML = "0" + millisecond.toString();
        } else {
            htmlMilliseconds.innerHTML = millisecond.toString();
        }

        if(sec < 10){
            htmlSeconds.innerHTML = "0" + sec.toString();
        } else {
            htmlSeconds.innerHTML = sec.toString();
        }

        if(min < 10){
            htmlMinutes.innerHTML = "0" + min.toString();
        } else {
            htmlMinutes.innerHTML = min.toString();
        }

        setTimeout("timerCycle()", 1);
    }
}