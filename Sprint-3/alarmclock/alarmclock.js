function setAlarm() {
  document.getElementById("timeValue").textContent = "00:00"; // This always makes sure the timer on the page is set to 00.00 when we reaload the page.
  const seconds = document.getElementById("alarmSet").value; // We take the value input in seconds we have on the alarmSet id of the HTML page.
  // Next part: Make sure we can convert our seconds into minutes and seconds and display them correctly inside the HTML file.
  const totalSeconds = Number(seconds);
  const mins = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  const timerDisplay = `${mins.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;

  document.getElementById("timeValue").textContent = timerDisplay;
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
