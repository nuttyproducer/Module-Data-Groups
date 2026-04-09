// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses a value that contains =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

// Empty string edge case:
test("returns an empty object for an empty string", () => {
  expect(parseQueryString("")).toEqual({});
});

// Key with empty value:
test("parses a key with an empty value", () => {
  expect(parseQueryString("Key=")).toEqual({ Key: "" });
});

// Value with an empty key:
test("parses a value with an empty key", () => {
  expect(parseQueryString("=Value")).toEqual({ "": "Value" });
});

// When there's no = in the Querystring:
test("parses a query string without = as an empty value", () => {
  expect(parseQueryString("nothingToSeeHere")).toEqual({
    nothingToSeeHere: "",
  });
});

// Multiple pairs per Querystring:
test("parses multiple key-value pairs", () => {
  expect(parseQueryString("name=Ben&city=Amsterdam")).toEqual({
    name: "Ben",
    city: "Amsterdam",
  });
});

// Multiple pairs with missing values:
test("parses multiple pairs when one value is missing", () => {
  expect(parseQueryString("name=Ben&city=&country=Netherlands")).toEqual({
    name: "Ben",
    city: "",
    country: "Netherlands",
  });
});

// Pairs with a missing key:
test("parses multiple pairs when one key is missing", () => {
  expect(parseQueryString("name=Ben&=Amsterdam")).toEqual({
    name: "Ben",
    "": "Amsterdam",
  });
});

// Multiple pairs where one value contains =:
test("parses multiple pairs when one value contains =", () => {
  expect(parseQueryString("equation=x=y+1&answer=42")).toEqual({
    equation: "x=y+1",
    answer: "42",
  });
});
