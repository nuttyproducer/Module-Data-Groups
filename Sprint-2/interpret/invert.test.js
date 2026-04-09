const invert = require("./invert.js");

// When the object has one key-value pair:
test("swaps the key and value in an object with one property", () => {
  expect(invert({ a: 1 })).toEqual({
    1: "a",
  });
});

// When the object has multiple key-value pairs:
test("swaps all keys and values in an object with multiple properties", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({
    1: "a",
    2: "b",
  });
});

// When the object is empty:
test("returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});

// When the values are strings:
test("uses the original string values as keys in the new object", () => {
  expect(invert({ first: "Benzaki", second: "BenziMou" })).toEqual({
    Benzaki: "first",
    BenziMou: "second",
  });
});
