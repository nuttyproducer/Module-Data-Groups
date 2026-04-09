function tally(arrayItems) {
  if (!Array.isArray(arrayItems)) {
    throw new Error("The input is not an Array");
  }
  // Createa an empty object to store the counted value appears in the array.
  const counter = {};
  for (const item of arrayItems) {
    if (counter[item]) {
      counter[item] += 1;
    } else {
      counter[item] = 1;
    }
  }
  return counter;
}

module.exports = tally;

/*
If the input is not an array, throw an error.
Make an empty object called counts.
For each item in the array:
If the item is already in counts, add 1 to its value.
If the item is not in counts, set its value to 1.
Return the counts object.
*/
