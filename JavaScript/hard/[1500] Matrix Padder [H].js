/*
####  Matrix Padder  ####

Create a function that takes a matrix of size (m, n) and returns a matrix of size (m+2, n+2) with a pad of 0s around the perimeter.


[Examples]

___
padMatrix([[]]) ➞ [[0, 0], [0, 0], [0, 0]]

padMatrix([[9]]) ➞ [
  [0, 0, 0],
  [0, 9, 0],
  [0, 0, 0]
]

padMatrix([["hi", True]]) ➞ [
  [0, 0, 0, 0],
  [0, "hi", True, 0],
  [0, 0, 0, 0]
]

padMatrix([
  [1, 2, 5],
  [8, 6, 7],
  [3, 4, 9]
]) ➞ [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 5, 0],
  [0, 8, 6, 7, 0],
  [0, 3, 4, 9, 0],
  [0, 0, 0, 0, 0]
]
_____



[Notes]

___
*) All inputs will be arrays of arrays.
*) Refer to the first example to handle an empty input.
___



[arrays] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Array.from()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

