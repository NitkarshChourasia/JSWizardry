/*
####  Get the Diagonals  ####

Given a square array (n*n size) implement a function that returns a new array containing two arrays equal to the two diagonals, in the following order:
___
diagonal 1 = from upper-left to lower-right corner
diagonal 2 = from upper-right to lower-left corner
_____



[Examples]

___
getDiagonals([ [1, 2], [3, 4] ]) ➞ [ [1, 4], [2, 3] ]

getDiagonals([ ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"] ]) ➞ [ ["a", "e", "i"], ["c", "e", "g"] ]

getDiagonals([ [true] ]) ➞ [ [true], [true] ]
_____



[Notes]

___
*) Your function must also work with single elements or empty arrays.
*) Try to build both diagonals with a single loop.
___



[arrays] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________

*/
//Your code should go here:

