/*
####  The Nearest Element  ####

Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.


[Examples]

___
nearestElement(10, [1, 100, 1000]) ➞ 0
// 1 is the number nearest to 10.

nearestElement(50, [100, 49, 51]) ➞ 2
// 49 and 51 are equally distant from 50, with 51 being the greatest.

nearestElement(-20, [-50, -10, -30]) ➞ 1
// -10 and -30 are equally distant from -20, with -10 being the greatest.
_____



[Notes]

Integers in arr will always be unique.


[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

