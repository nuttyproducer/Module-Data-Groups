// Array of images

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const imageElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const playPauseBtn = document.getElementById("play-pause-btn");
const stopBtn = document.getElementById("stop");

let currentImage = 0;
let autoPlayInterval = null;

imageElement.src = images[currentImage];

function showNextImage() {
  currentImage = currentImage + 1;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  imageElement.src = images[currentImage];
}

function showPreviousImage() {
  currentImage = currentImage - 1;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  imageElement.src = images[currentImage];
}

function startAutoPlay(direction) {
  if (isPlaying) {
    pauseAutoPlay();
  }
  isPlaying = true;
  playDirection = direction;
  if (direction === "forward") {
    autoPlayInterval = setInterval(showNextImage, 2000);
    autoForwardBtn.classList.add("active");
    autoBackwardBtn.classList.remove("active");
  } else if (direction === "backward") {
    autoPlayInterval = setInterval(showPreviousImage, 2000);
    autoBackwardBtn.classList.add("active");
    autoForwardBtn.classList.remove("active");
  }
  updatePlayPauseBtn();
}

function pauseAutoPlay() {
  if (autoPlayInterval !== null) {
    clearInterval(autoPlayInterval);
    isPlaying = false;
    autoPlayInterval = null;
  }
  autoForwardBtn.classList.remove("active");
  autoBackwardBtn.classList.remove("active");
  updatePlayPauseBtn();
}

// Creating a button state helper for the play/pause button

function updatePlayPauseBtn() {
  if (isPlaying) {
    playPauseBtn.textContent = "❚❚";
    playPauseBtn.classList.add("active");
  } else {
    playPauseBtn.textContent = "►";
    playPauseBtn.classList.remove("active");
  }
}

autoBackwardBtn.addEventListener("click", function () {
  // Adding toggle start stop to the auto backward button
  if (isPlaying && playDirection === "backward") {
    pauseAutoPlay();
  } else {
    startAutoPlay("backward");
  }
});
backwardBtn.addEventListener("click", showPreviousImage);
forwardBtn.addEventListener("click", showNextImage);
autoForwardBtn.addEventListener("click", function () {
  // Adding toggle start stop to the auto forward button
  if (isPlaying && playDirection === "forward") {
    pauseAutoPlay();
  } else {
    startAutoPlay("forward");
  }
});
