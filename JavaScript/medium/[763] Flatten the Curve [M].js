/*
####  Flatten the Curve  ####

Given an array of integers, replace every number with the mean of all numbers.


[Examples]

___
flattenCurve([1, 2, 3, 4, 5]) ➞ [3, 3, 3, 3, 3]

flattenCurve([0, 0, 0, 2, 7, 3]) ➞ [2, 2, 2, 2, 2, 2]

flattenCurve([4]) ➞ [4]

flattenCurve([]) ➞ []
_____



[Notes]

___
*) Round averages to 1 decimal point.
*) Return an empty array if given an empty array (see example #4).
___



[arrays] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
_________

*/
//Your code should go here:

