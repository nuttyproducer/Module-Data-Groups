function findMax(arrayElements) {
  let max = -Infinity; // define max first, if the array is empty, return -Infinity
  for (let i = 0; i < arrayElements.length; i++) {
    if (typeof arrayElements[i] === "number") {
      // first checks if the array element is a number before moving on.
      if (arrayElements[i] > max) {
        // Finds the largest number after the === numbers test.
        max = arrayElements[i]; // redefine max with the maximum number in the array.
      }
    }
  }
  return max;
}

module.exports = findMax;
