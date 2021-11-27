
var hour = 0;
var minutes = 0;
var seconds = 0;
var stoptime = true;


function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hour = parseInt(hour);

    seconds = seconds + 1;

    if (seconds == 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    if (minutes == 60) {
      hour = hour + 1;
      minutes = 0;
      seconds = 0;
    }

    if (seconds < 10 || seconds == 0) {
      seconds = '0' + seconds;
    }
    if (minutes < 10 || minutes == 0) {
      minutes = '0' + minutes;
    }
    if (hour < 10 || hour == 0) {
      hour = '0' + hour;
    }

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + minutes;
    document.getElementById('seconds').innerHTML = ":" + seconds;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    hour = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = ":00";
    document.getElementById('seconds').innerHTML = ":00";
    stoptime = true;
}

var elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { 
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { 
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { 
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
  }
}