// Array of images

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
];

// Write your code here
const imageElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

let currentImage = 0;
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

forwardBtn.addEventListener("click", showNextImage);
backwardBtn.addEventListener("click", showPreviousImage);
