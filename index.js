function dropElements(arr, func) {
  // Drop them elements.

  let testArr = arr.map(x => func(x));
  //   console.log(testArr + " this is the test array");
  let stop = 0;
  let start = 0;
  if (testArr[0] === false) {
    for (let i = testArr.length - 1; i > 0; i--) {
      if (testArr[i] === true) {
        stop = i;
      }
    }
    arr.splice(0, stop);
  } else if (testArr[0] === true && testArr[testArr.length - 1] === false) {
    for (let i = 0; i < testArr.length; i++) {
      if (testArr[i] === true) {
        start = i;
      }
    }

    arr.splice(start + 1, arr.length - start);
    // console.log(start + "is the start of the cut off");
    // console.log(arr.length - start + "is how many");
  }
  if (testArr.every(x => x === false) === true) {
    arr = [];
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function(n) {
    return n < 3;
  }) + " should return [1, 2]"
);

console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  }) + " should return [3, 4]."
);
console.log(
  dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
  }) + " should return [1, 0, 1]."
);
console.log(
  dropElements([1, 2, 3], function(n) {
    return n > 0;
  }) + " should return [1, 2, 3]."
);
console.log(
  dropElements([1, 2, 3, 4], function(n) {
    return n > 5;
  }) + " should return []."
);
console.log(
  dropElements([1, 2, 3, 7, 4], function(n) {
    return n > 3;
  }) + " should return [7, 4]."
);
console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
  }) + " should return [3, 9, 2]."
);
