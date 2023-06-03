// arrays help us handle a group of data.
const age = 5;
// arrays in javascript do not discriminate.
// arrays are not racists.
// arrays can take multiple data types in them at same time.
const ages = [12, 9, 34, 98, 42];

ages.push(75); // O(1)
ages.unshift(15); // this has O(n)

ages.shift(); // this has O(n)
ages.pop(); // this has O(1)

// {
//    // 0: 15,
//    0: 12,
//    1: 9,
//    2: 34,
//    3: 98,
//    4: 42,
//    5: 75
// }
// console.log(ages);
// for (let i = 0; i < ages.length; i++) {
//   console.log(i, ages[i]);
// }

// for (let i in ages) {
//   console.log(ages[i]);
// }

// for (let i of ages) {
//   console.log(i);
// }

// Higher Order Functions

// ages.forEach(function (element, i) {
//   console.log(element);
// });

// console.log(ages.slice(2));

const array1 = [1, 2, 3, 4, 5];

const array2 = [...array1, 6, 7];

// console.log(array2);
// array2[0] = 78;
// console.log(array2);
// let newArray = [];
// for (let i in array1) {
//   newArray.push(array1[i] * 10);
// }

// console.log(newArray);

let newArray = array1.map(function (element) {
  return element * 10;
});
// console.log(newArray);

let filteredArrays = array1.filter(function (element) {
  return element < 3;
});

console.log(filteredArrays);

const multiArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
