/*
####  The Bottom of the Matrix  ####

This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:
___
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
_____

The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.
Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.
For example, for the matrix above you should return:
___
[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]
_____



[Examples]

___
lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]

lowerTriang([
  [5, 7],
  [7, 9]
]) ➞ [
  [5, 0],
  [7, 9]
]

lowerTriang([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4]
]) ➞ [
  [1, 0, 0, 0],
  [2, 7, 0, 0],
  [3, 6, 6, 0],
  [4, 5, 5, 4]
]
_____



[Notes]

___
*) As in the examples, the size of the matrices will vary (but they will always be square).
*) In Linear Algebra, matrices with 0s above the diagonal are called lower triangular matrices.
___



[arrays] [language_fundamentals] [loops] [math] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________
_________
For Loops
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Array() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
Used to create Array objects.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________

*/
//Your code should go here:

