/*
####  Left, Right Shift  ####

Create two functions: a left-shift function and a right-shift function. Each function will take in an array and a single parameter: the number of shifts.
___
[1, 2, 3, 4, 5]

[2, 3, 4, 5, 1]  // left shift of 1
[5, 1, 2, 3, 4]  // left shift of 4

[5, 1, 2, 3, 4]  // right shift of 1
[3, 4, 5, 1, 2]  // right shift of 3
_____



[Examples]

___
leftShift([1, 2, 3, 4], 1) ➞ [2, 3, 4, 1]

rightShift([1, 2, 3, 4], 1) ➞ [4, 1, 2, 3]

leftShift([1, 2, 3, 4, 5], 3) ➞ [4, 5, 1, 2, 3]

leftShift([1, 2, 3, 4, 5], 5) ➞ [1, 2, 3, 4, 5]
// You have fully shifted the array, you end up back where you began.

leftShift([1, 2, 3, 4, 5], 6) ➞ [2, 3, 4, 5, 1]
// You should be able to take in numbers greater than the length.
// Think of the length of the array as a modulo.
_____



[Notes]

___
*) num might be higher than the number of values in the array.
*) num will never be negative.
___



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Push, Pop, Shift and Unshift
https://alligator.io/js/push-pop-shift-unshift-array-methods/
Push is to add an element to the end of an array. Unshift is to add an element to the beginning. Pop is to remove an element from the end; Shift is to remove an element …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________

*/
//Your code should go here:

