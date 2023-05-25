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

const human = {
  name: 'Joshua',
  age: 34,
};

const human2 = {
  name: 'Adam',
  age: 35,
};

// This is because javascript objects are memory location-sensitive.
// To compare two objects, we need to write a utility function for that.

function isEqual(firstObject, secondObject) {
  // guard clause to ensure both objects parsed || Defensive programming
  if (
    !firstObject ||
    !secondObject ||
    typeof firstObject !== 'object' ||
    typeof secondObject !== 'object'
  ) {
    throw new Error("Arguments with type 'object' not parsed to the function");
  }

  const firstObjectProperties = Object.getOwnPropertyNames(firstObject);
  console.log(firstObjectProperties);
  const secondObjectProperties = Object.getOwnPropertyNames(secondObject);
  console.log(secondObjectProperties);

  if (firstObjectProperties.length !== secondObjectProperties.length) {
    return false;
  }

  for (let i = 0; i < firstObjectProperties.length; i++) {
    let propertyName = firstObjectProperties[i];
    if (firstObject[propertyName] !== secondObject[propertyName]) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2));

module.exports = isEqual;
