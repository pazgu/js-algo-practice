/*
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.
Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
Notes
Keep the same ordering in the output.
*/

//oneway
function returnUnique(arr) {
  return arr.filter((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

//second way
function returnUnique(arr) {
  const counts = new Map(); //Keep the same ordering in the output
  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  return arr.filter((num) => counts.get(num) === 1);
}

exports.solution = returnUnique;
