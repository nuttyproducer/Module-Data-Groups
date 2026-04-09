const createLookup = require("./lookup.js");

test("Given an array of code pairs, create a lookup object representing country code", () => {
  expect(createLookup([["US", "USD"]])).toEqual({ US: "USD" });
});

test("Given an array of code pairs CA - CAD, create a lookup object representing country code", () => {
  expect(createLookup([["CA", "CAD"]])).toEqual({ CA: "CAD" });
});

test("Given 2 arrays of code pairs, create a lookup object with 2 object pairs", () => {
  expect(
    createLookup([
      ["US", "USD"],
      ["CA", "CAD"],
    ])
  ).toEqual({ US: "USD", CA: "CAD" });
});

test("Given an empty array of code pairs, we should return an empty object", () => {
  expect(createLookup([])).toEqual({});
});
/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
