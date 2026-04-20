let secondsLeft; // Stores how many seconds are left in the countdown.
let intervalId; // Stores the interval ID so the timer can be stopped later.

function setAlarm() {
  // Stop and reset the alarm sound before starting a new timer.
  audio.loop = false;
  audio.pause();
  audio.currentTime = 0; // Reset the audio back to the beginning.

  // Stop any previous countdown before starting a new one.
  clearInterval(intervalId);

  // Reset the background color when a new alarm is set.
  document.body.style.backgroundColor = "white";

  // Read the input value, convert it to a number, and show it immediately.
  // This gives instant feedback instead of waiting one second for the interval.
  const seconds = document.getElementById("alarmSet").value;
  secondsLeft = Number(seconds);
  const mins = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  const timerDisplay = `${mins.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  document.getElementById("timeRemaining").textContent =
    `Time Remaining: ${timerDisplay}`;
  // Run the countdown every second.
  // Each tick reduces the remaining time, updates the display,
  // and stops the timer when the countdown reaches zero.
  intervalId = setInterval(() => {
    secondsLeft--;
    const mins = Math.floor(secondsLeft / 60);
    const sec = secondsLeft % 60;
    const timerDisplay = `${mins.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    document.getElementById("timeRemaining").textContent =
      `Time Remaining: ${timerDisplay}`;
    if (secondsLeft <= 0) {
      clearInterval(intervalId);
      document.body.style.backgroundColor = "red";
      playAlarm();
    }
  }, 1000);
}

// Expose functions globally so Jest tests can see them.
window.setAlarm = setAlarm;
window.playAlarm = playAlarm;
window.pauseAlarm = pauseAlarm;

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
  // Keep the alarm sound repeating until it is stopped.
  audio.loop = true; // Repeat the sound continuously.
  audio.play();
}

function pauseAlarm() {
  audio.loop = false; // Stop the looping sound.
  audio.pause();
}

window.onload = setup;
