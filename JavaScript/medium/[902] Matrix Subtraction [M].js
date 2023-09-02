/*
####  Matrix Subtraction  ####

Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.
The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.
Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.


[Examples]

___
sub([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
_____



[Notes]

Treat strings of numbers as integers.


[algebra] [arrays] [interview] [math] 



-------------------------------------------------------------------
[Resources]
_________
Matrix Addition and Subtraction
http://mathonline.wikidot.com/matrix-addition-and-subtraction
Given two matrices A and B, both of which are of size m×n, then the sum denoted A+B is an m×n matrix whose entries are formed by adding corresponding entries of B to co …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________

*/
//Your code should go here:

