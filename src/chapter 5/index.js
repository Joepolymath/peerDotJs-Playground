function matrix(rows, columns) {
  var jaggedarray = new Array(rows);
  for (let i = 0; i < columns; i++) {
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}

console.log(matrix(3, 3));
