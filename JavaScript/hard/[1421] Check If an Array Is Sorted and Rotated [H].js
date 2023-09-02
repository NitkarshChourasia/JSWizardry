/*
####  Check If an Array Is Sorted and Rotated  ####

Given an array of distinct integers, create a function that checks if the array is sorted and rotated clockwise. If so, return "YES"; otherwise return "NO".


[Examples]

___
check([3, 4, 5, 1, 2]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [1, 2, 3, 4, 5].
// Rotating this sorted array clockwise
// by 3 positions, we get: [3, 4, 5, 1, 2].

check([1, 2, 3]) ➞ "NO"
// The above array is sorted but not rotated.

check([7, 9, 11, 12, 5]) ➞ "YES"
// The above array is sorted and rotated.
// Sorted array: [5, 7, 9, 11, 12].
// Rotating this sorted array clockwise
// by 4 positions, we get: [7, 9, 11, 12, 5].
_____



[Notes]

N/A


[algorithms] [arrays] [conditions] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

