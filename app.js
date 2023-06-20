var displayMinutes = document.getElementById("displayMinutes");
var displaySeconds = document.getElementById("displaySeconds");
var displaymSeconds = document.getElementById("displaymSeconds");
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");
var minutes, seconds,mSeconds ;
minutes = 0;
seconds = 0;
mSeconds = 0;
var interval;

function Timer() {
    mSeconds++;
    if (mSeconds >= 100) {
        seconds++;
        mSeconds = 0;
    } else if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    displayHours.innerHTML = minutes;
displayMinutes.innerHTML = seconds;
displaySeconds.innerHTML = mSeconds;


}

function startStopWatch() {
    
    interval = setInterval( Timer,10);
    

}

function pauseStopWatch() {
    
    clearInterval (interval);
}


function resetStopWatch() {
    minutes = 0;
    seconds = 0;
    mSeconds = 0;

displayHours.innerHTML = minutes;
displayMinutes.innerHTML = seconds;
displaySeconds.innerHTML = mSeconds;
pauseStopWatch()
}