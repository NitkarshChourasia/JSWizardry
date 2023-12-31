/*
####  Diagonal Matrices  ####

Write a function that diagonally orders numbers in a n x n matrix, depending on which of the four corners you originate from: upper-left (ul), upper-right (ur), lower-left (ll), lower-right (lr).


[Examples]

___
diagonalize(3, "ul") ➞ [
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]

diagonalize(4, "ur") ➞ [
  [3, 2, 1, 0],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [6, 5, 4, 3]
]

diagonalize(3, "ll") ➞ [
  [2, 3, 4],
  [1, 2, 3],
  [0, 1, 2]
]

diagonalize(5, "lr") ➞ [
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 0]
]
_____



[Notes]

N/A


[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
The forEach() method executes a provided function once for each array element.
_________
_________
Reverse (flip) a 2d array JS
https://stackoverflow.com/questions/56656140/reverse-flip-a-2d-array-js
How to use reverse method to reverse the elements of the childArr?
_________

*/
//Your code should go here:

