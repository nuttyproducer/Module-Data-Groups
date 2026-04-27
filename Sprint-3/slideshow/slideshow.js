// Array of images

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
  "./assets/cute-cat-e.jpg",
  "./assets/cute-cat-f.jpg",
  "./assets/cute-cat-g.jpg",
];

// Write your code here
const imageElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const playPauseBtn = document.getElementById("play-pause-btn");

let currentImage = 0;
let isPlaying = false;
let playDirection = "forward";
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
  } else if (direction === "backward") {
    autoPlayInterval = setInterval(showPreviousImage, 2000);
  }
}

function pauseAutoPlay() {
  if (autoPlayInterval !== null) {
    clearInterval(autoPlayInterval);
    isPlaying = false;
    autoPlayInterval = null;
  }
}

function togglePlayPause() {
  if ((isPlaying = true)) {
    pauseAutoPlay();
  } else {
    startAutoPlay(playDirection);
  }
}

autoBackwardBtn.addEventListener("click", function () {
  startAutoPlay("backward");
});
backwardBtn.addEventListener("click", showPreviousImage);
playPauseBtn.addEventListener("click", togglePlayPause);
forwardBtn.addEventListener("click", showNextImage);
autoForwardBtn.addEventListener("click", function () {
  startAutoPlay("forward");
});
