/*
####  Minimum Difference Pair  ####

Given an array of numbers, return the pair of numbers that give the minimum absolute difference. Return the pair as an array, sorted in ascending order. If multiple pairs have the same difference, return the pair with the smallest sum.


[Examples]

___
minDifferencePair([40, 16, 8, 17, 15]) ➞ [15, 16]
// [15, 16] has smaller sum than [16, 17]

minDifferencePair([1, -31, -27, -18, -48, -15, -11, -34]) ➞ [-34, -31]

minDifferencePair([0, 2, 35, 42, 45, 14, -6, -1]) ➞ [-1, 0]

minDifferencePair([32, 33, 4, 6, 48, 18, 20, -7, -4, 31]) ➞ [31, 32]
_____



[Notes]

There will be no duplicate numbers in the array.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________

*/
//Your code should go here:

