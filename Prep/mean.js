// function calculateMean(list) {
//     const total = list[0] + list[1] + list[2];
//     const mean = total / list.length;

//     return mean;
// }

// Running the same code with a loop function inside the calculateMean function.

function calculateMean(list) {
  let total = 0;
  let i = 0;

  for (let i = 0; i < list.length; i++) {
    total = total + list[i];
  }
  return total / list.length;
}

module.exports = calculateMean;
