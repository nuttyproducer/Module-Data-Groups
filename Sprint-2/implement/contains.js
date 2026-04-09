function contains(objectToCheck, propertyName) {
  if (Array.isArray(objectToCheck)) {
    throw new Error("Invalid parameter, No arrays allowed");
  }
  if (typeof objectToCheck !== "object" || objectToCheck === null) {
    return false;
  }
  return propertyName in objectToCheck;
}

module.exports = contains;

/*
If the first argument is an array
    Throw an error: "Invalid parameter, No arrays allowed"

If the first argument is not an object
    Return false

If the object has the property (second argument)
    Return true

Otherwise
    Return false
*/
