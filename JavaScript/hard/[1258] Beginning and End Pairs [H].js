/*
####  Beginning and End Pairs  ####

Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.


[Examples]

___
pairs([1, 2, 3, 4, 5, 6, 7]) ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]

pairs([1, 2, 3, 4, 5, 6]) ➞ [[1, 6], [2, 5], [3, 4]]

pairs([5, 9, 8, 1, 2]) ➞ [[5, 2], [9, 1], [8, 8]]

pairs([]) ➞ []
_____



[Notes]

___
*) If the array has an odd length, repeat the middle element twice for the last pair.
*) Return an empty array if the input is an empty array.
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest whole number or integer.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________

*/
//Your code should go here:

