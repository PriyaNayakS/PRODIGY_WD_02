let timer_display = document.querySelector(".timer_display");  // Use . for class selector
let stopBtn = document.getElementById("stpbtn");
let startBtn = document.getElementById("strtbtn");
let resetBtn = document.getElementById("rstbtn");

let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timer_display.innerHTML = `00:00:00:000`;
    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    timer_display.innerHTML = `${hourString} : ${minsString} : ${secString} : ${msecString}`;
}
