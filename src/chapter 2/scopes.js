/**
 * Demonstrating the behavior of javascript scopes.
 */

// var and let scopes differently in javascript.

// var is functionally scoped. Means it's accessible within the function within which it was initialized or declared.

function scopeVar(condition) {
  if (condition) {
    var a = 5;
  }
  console.log(a);
}

scopeVar(true);

// let is scoped to its closest block. Only accessible within the block which it was declared in.

function scopeLet(condition) {
  if (condition) {
    let a = 5;
  }
  console.log(a);
}

// scopeLet(true);
