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
  if (autoPlayInterval !== null) {
    clearInterval(autoPlayInterval);
  }

  if (direction === "forward") {
    autoPlayInterval = setInterval(showNextImage, 2000);
  } else if (direction === "backward") {
    autoPlayInterval = setInterval(showPreviousImage, 2000);
  }

  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  stopBtn.textContent = "■";
  stopBtn.setAttribute("aria-label", "Stop slideshow");
}

function stopAutoPlay() {
  if (autoPlayInterval !== null) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
  // Enable both auto buttons
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
  stopBtn.textContent = "►";
  stopBtn.setAttribute("aria-label", "Start slideshow");
}

backwardBtn.addEventListener("click", showPreviousImage);
forwardBtn.addEventListener("click", showNextImage);
autoForwardBtn.addEventListener("click", function () {
  startAutoPlay("forward");
});
autoBackwardBtn.addEventListener("click", function () {
  startAutoPlay("backward");
});
stopBtn.addEventListener("click", function () {
  if (autoPlayInterval === null) {
    startAutoPlay("forward");
  } else {
    stopAutoPlay();
  }
});
