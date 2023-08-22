/*
####  Intersecting Rows and Columns  ####

Suppose any nxm matrix of 0s and 1s can be transformed into a second matrix, where each number in position (i, j) in the new matrix is the sum of 1s in row i and column j in the original matrix, excluding itself (if it is a 1).
___
[[1, 0, 0, 0, 1],
[0, 1, 0, 0, 0],
[0, 0, 0, 1, 0],
[0, 1, 0, 1, 0],
[0, 1, 0, 0, 0]]

[1, 5, 2, 4, 1],
[2, 4, 1, 3, 2],
[2, 4, 1, 1, 2],
[3, 2, 2, 2, 3],
[2, 2, 1, 3, 2]

// The 1 on the upper left corner has 1 other 1 in the same row as itself (excluding itself).
// The 0 to the right of the 1 has 2 1's on the same row as itself, and 3 1's in the same column, etc.
_____

Create a function that transforms the first matrix into its second matrix equivalent.


[Examples]

___
transformMatrix([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]) ➞ [
  [0, 2, 2],
  [2, 0, 2],
  [2, 2, 0]
]

transformMatrix([
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]) ➞ [
  [2, 2, 4],
  [2, 2, 2],
  [2, 2, 2]
]

transformMatrix([
  [1, 1, 1],
  [0, 1, 1],
  [0, 0, 1]
]) ➞ [
  [2, 3, 4],
  [3, 2, 3],
  [2, 3, 2]
]
_____



[Notes]

It might be easier to visualize this by drawing the grid of 0's and 1's out on a sheet of paper, and drawing lines through a specific number's row and column.


[arrays] [higher_order_functions] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________

*/
//Your code should go here:

