// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    // const element = list[index]; => We don't need this line of code when using the for...of loop.
    if (element === target) {
      return true;
    }
  }
  return false;
}

module.exports = includes;
