// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    // Use the old value as the "new" key, and the "old" key as the new value.
    // invertedObj.key = value; => This always creates a property called "key" not the value of "key"
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Current return value: { key: 1 }
// It used the word `key` as the property name.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Current return value: { key: 2 }
// The second loop overwrites the first one.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// Target return value: { 1: "a", 2: "b" }
// The old values become keys, and the old keys become values.

// c) What does Object.entries return? Why is it needed in this program?
// `Object.entries(obj)` returns an array of key-value pairs.
// Example: `Object.entries({ a: 1, b: 2 })` becomes `[["a", 1], ["b", 2]]`.
// We use it to get both the key and value while looping.
// MDN: Object.entries()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// d) Explain why the current return value is different from the target output
// `invertedObj.key` always makes a property called `key`.
// We need `invertedObj[value]` so JavaScript uses the real value as the property name.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
