/*
####  Trace of a Square Matrix  ####

In mathematics, a matrix (plural matrices) is a rectangular array or table of numbers, symbols, or expressions, arranged in rows and columns.
Matrix A:
___
[
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]
_____

In mathematics, a square matrix is a matrix with the same number of rows and columns.
In linear algebra, the trace of a square matrix A is defined to be the sum of elements on the main diagonal (from the upper left to the lower right) of A (tr(A) = 6).


[Task]

Create a function that takes a 2D array as an argument and returns a number (trace) for a square matrix and a zero otherwise.


[Examples]

___
getTrace([
  [0, 1, 0, 0],
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 6

getTrace([
  [0, 1, 0, 0],
  [1, -1, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 5]
]) ➞ 4
_____



[Notes]

N/A


[algebra] [algorithms] [interview] [math] 



-------------------------------------------------------------------
[Resources]
_________
Trace (linear algebra)
https://en.wikipedia.org/wiki/Trace_(linear_algebra)
The trace of a matrix is the sum of its (complex) eigenvalues, and it is invariant with respect to a change of basis. This characterization can be used to define the tr …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

