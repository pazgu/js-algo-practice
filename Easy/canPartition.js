/*
Write a function that returns true if you can partition an array into one element and the rest, 
such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
  let total = arr[0];
  let j = arr.length - 1;

  for (let i = 1; i < arr.length - 1; i++) {
    total = total * arr[i];
  }

  let i = j;

  while (j > 0) {
    if (total === arr[j]) {
      return true;
    }
    j--;
    total = total * arr[i];
    if (arr[j] !== 0) {
      total = total / arr[j];
    }
    i--;
  }
  return false;
}

exports.solution = canPartition;
