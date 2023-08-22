/*
####  The Array Twins  ####

Create a function that given an array, it returns the index where if split in two-subarrays (last element of the first array has index of (foundIndex-1)), the sum of them are equal.


[Examples]

___
twins([10, 20, 30, 5, 40, 50, 40, 15]) ➞ 5
// foundIndex 5 : [10+20+30+5+40]=[50+40+15]

twins([1, 2, 3, 4, 5, 5]) ➞ 4
// [1, 2, 3, 4] [5, 5]

twins([3, 3]) ➞ 1
_____



[Notes]

Return only the foundIndex, not the divided arrays.


[algorithms] [arrays] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________

*/
//Your code should go here:

