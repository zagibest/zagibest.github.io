function clock(){
    var fullDate = new Date();
    var hour = fullDate.getHours();
    var minutes = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    if(hour < 10){
        hour = "0" + hour;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = ":" + minutes;
    document.getElementById('seconds').innerHTML = ":" + seconds;
}

setInterval(clock, 1000);



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