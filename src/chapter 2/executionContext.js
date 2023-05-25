// This is to explain execution context

var x = 10;
var y = 5;

function doSomething() {
  return 'I am doing something';
}

var m = doSomething();

// name1 = 'John';
console.log(name1);

var name1 = 'John';

console.log(name1);

/**
 * Creation Phase:
 * x variable is allocated memory and stores "undefined"
 * y variable is allocated memory and stores "undefined"
 * doSomething() function is allocated memory and stores all the code
 * m variable is allocated memory and stores "undefined"
 *
 * Execution Phase:
 * Places the value of 10 into the x variable
 * Places the value of 5 into the y variable
 * Skips the function because there is nothing to execute
 * Invokes the doSomething() function and creates a new function execution context
 *
 */
