const sumValues = require("./summation");

test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = sumValues(list);
  const targetOutput = 60;

  expect(currentOutput).toEqual(targetOutput);
});
