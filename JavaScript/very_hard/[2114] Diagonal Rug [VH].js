/*
####  Diagonal Rug  ####

Write a function that takes in size and direction and generates a diagonal rug.
The size is the n parameter, and all rugs are square n x n. The direction is whether the diagonal part begins on the left or the right side.


[Examples]

___
generateRug(4, "left") ➞ [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
  [3, 2, 1, 0]
]

generateRug(5, "right") ➞ [
  [4, 3, 2, 1, 0],
  [3, 2, 1, 0, 1],
  [2, 1, 0, 1, 2],
  [1, 0, 1, 2, 3],
  [0, 1, 2, 3, 4]
]

generateRug(1, "left") ➞ [
  [0]
]

generateRug(2, "right") ➞ [
  [1, 0],
  [0, 1]
]
_____



[Notes]

___
*) n > 0
*) A 1 x 1 rug is trivially [[0]] (same for left and right).
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

