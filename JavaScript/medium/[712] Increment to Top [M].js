/*
####  Increment to Top  ####

Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.


[Examples]

___
incrementToTop([3, 4, 5]) ➞ 3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

incrementToTop([4, 3, 4]) ➞ 1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.

incrementToTop([3, 3, 3]) ➞ 0

incrementToTop([3, 10, 3]) ➞ 14
_____



[Notes]

___
*) If the array contains only the same digits, return 0 (see example #3).
*) Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max beforehand)
___



[arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Spread Syntax
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________

*/
//Your code should go here:

