/*
####  Numbers First, Letters Second  ####

Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.


[Examples]

___
numThenChar([
  [1, 2, 4, 3, "a", "b"],
  [6, "c", 5], [7, "d"],
  ["f", "e", 8]
]) ➞ [
  [1, 2, 3, 4, 5, 6],
  [7, 8, "a"],
  ["b", "c"], ["d", "e", "f"]
]

numThenChar([
  [1, 2, 4.4, "f", "a", "b"],
  [0], [0.5, "d","X",3,"s"],
  ["f", "e", 8],
  ["p","Y","Z"],
  [12,18]
]) ➞ [
  [0, 0.5, 1, 2, 3, 4.4],
  [8],
  [12, 18, "X", "Y", "Z"],
  ["a", "b", "d"],
  ["e", "f", "f"],
  ["p", "s"]
]
_____



[Notes]

Test cases will contain integer and float numbers and single letters.


[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

