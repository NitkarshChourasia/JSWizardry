/*
####  Shortest Subarray Whose Sum Exceeds N  ####

Write a function that returns the length of the shortest contiguous subarray whose sum of all elements strictly exceeds n.


[Examples]

___
minLength([5, 8, 2, -1, 3, 4], 9) ➞ 2

minLength([3, -1, 4, -2, -7, 2], 4) ➞ 3
// Shortest subarray whose sum exceeds 4 is: [3, -1, 4]

minLength([1, 0, 0, 0, 1], 1) ➞ 5

minLength([0, 1, 1, 0], 2) ➞ -1
_____



[Notes]

___
*) The subarray should be composed of contiguous elements from the original array.
*) If no such subarray exists, return -1.
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.reduce() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

