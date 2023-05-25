/**
 * Demonstrating the behavior of hoisiting in javascript.
 */

var a = 5;
function scopeWithVar() {
  b = 5;
  console.log(b);

  var b; // this will be hoisted to the top of the function.
}

function scopeWithLet() {
  b = 5;
  console.log(b);

  let b; // this will not be hoisted to the top of the function. The let keywords are not hoisted.
}

scopeWithVar();

scopeWithLet();
