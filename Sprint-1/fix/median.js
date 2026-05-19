// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2); // Finds the middle index of the array (rounds down if even)
//   const median = list.splice(middleIndex, 1)[0]; // Removes the value at the middle index from the array and gets that value
//   return median; // Returns the value found above as the median
// }

function calculateMedian(list) {
  if (!Array.isArray(list)) {
    // We first check if the array is indeed an array.
    return null;
  }

  let numbers = [];
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      // Checks if the item in the array is a number, if so, push it to the numbers array.
      numbers.push(list[i]);
    }
  }
  if (numbers.length === 0) {
    // This part checks if the numbers array we created is empty. If so, we return null.
    return null;
  }

  let sorted = numbers.slice();
  sorted.sort(function (a, b) {
    // sorted is the sorted version of the numbers array. We created a new array so we don't lose the original.
    return a - b;
  });

  let numbersAmount = sorted.length;
  if (numbersAmount % 2 === 1) {
    // Checks if the numbers in the array is odd. For example 3 numbers in the array.
    return sorted[Math.floor(n / 2)]; // Returns the middle number of the array. We count from 0 so for example 0, 1, "2", 3, 4.
  } else {
    let mid1 = sorted[numbersAmount / 2 - 1];
    let mid2 = sorted[numbersAmount / 2];
    return (mid1 + mid2) / 2; // We take the two middle numbers avarege with divide by 2 to get the median.
  }
}

module.exports = calculateMedian;
