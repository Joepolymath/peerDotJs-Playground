// Substrings
const language = 'JavaScript';

console.log(language.substring(3, 6));

// string comparison
console.log('ab' < 'ab');

console.log('abc' < 'ab');

console.log('chelsea' < 'real madrid');

// string search

console.log(language.indexOf('Java'));
console.log(language.indexOf('ava'));
console.log(language.indexOf('java'));
console.log(language.indexOf('a', 3));
console.log(language.indexOf('a'));

function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}

console.log(existsInString('Fair', 'air'));
console.log(existsInString('Fair', 'ari'));

function occurrenceNumber(stringValue, search) {
  let count = 0;
  let position = stringValue.indexOf(search);
  if (position === -1) {
    return count;
  }
  while (position !== -1) {
    position = stringValue.indexOf(search, position + 1);
    count += 1;
  }
  return count;
}

let myString =
  'I want to be the best javascript engineer in the world. So help me God.';

console.log(occurrenceNumber(myString, 'a'));

// Starts with

console.log(myString.startsWith('I want'));
console.log(myString.endsWith('God.'));

// regex
console.log(language.search(/Java/));
console.log(language.search(/[ava]/));
