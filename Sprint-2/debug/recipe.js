// Predict and explain first...

/*
First of all the output will not give us the proper ingredients. We will again get [object Object].
We can fix this by using the correct array object recipe.ingredients.

Secondly we don't loop through the ingredients and create a new line \n after each ingredient.

*/

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`); //You can do this by joining the array with \n (newline)
