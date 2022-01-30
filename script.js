const change = document.getElementById('display');
window.onload = function() {
  let my_audio = new Audio("Camera-Phone03-1.mp3");
  document.getElementById("shutter").onclick = function() {
    my_audio.currentTime = 0;
    my_audio.play();
    change.style.opacity = 1;
    setTimeout('window.location.href = "complete.html";', 1200);
  }
}

/*progress-bar*/
const percentage = document.getElementById('progress-bar');
let i = 0;
let TimerId = -1;
function loading() {
  TimerId = setInterval(time, 35);
}
function time() {
  percentage.style.width = `${i}%`;
  i++;
  if (i > 100) {
    clearInterval(TimerId);
    setTimeout('window.location.href = "last.html";', 700);
  } else if (i == 34) {
    clearInterval(TimerId);
    TimerId = setInterval(time, 2);
  } else {
  }
}

loading();