/**
 * A very brief study on objects.
 */

// You can't directly compare objects with each other using the === and == operators

const obj1 = {
  name: 'foo',
};

const obj2 = {
  name: 'foo',
};

console.log(obj1 === obj2);
console.log(obj1 == obj2);

// This is because javascript objects are memory location-sensitive.
// To compare two objects, we need to write a utility function for that.

function isEqual(firstObject, secondObject) {
  // guard clause to ensure both objects parsed
  if (
    !firstObject ||
    !secondObject ||
    typeof firstObject !== 'object' ||
    typeof secondObject !== 'object'
  ) {
    throw new Error("Arguments with type 'object' not parsed to the function");
  }

  // getting the array of property names.
  const firstPropertyNames = Object.getOwnPropertyNames(firstObject);
  const secondPropertyNames = Object.getOwnPropertyNames(secondObject);

  // check if the lengths of the array of property names match
  if (firstPropertyNames.length !== secondPropertyNames.length) {
    return false;
  }

  for (let i = 0; i < firstPropertyNames.length; i++) {
    let propertyName = firstPropertyNames[i];
    if (firstObject[propertyName] !== secondObject[propertyName]) {
      return false;
    }
  }

  return true; // means the two objects are equal
}

console.log(isEqual(obj1, obj2));
