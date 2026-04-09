// Predict and explain first...

/*
TypeError: author is not iterable
The way the code is written is that author is an object.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
*/

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  // gives you an array of all the values
  console.log(value);
}
