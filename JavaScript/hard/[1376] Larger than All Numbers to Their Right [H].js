/*
####  Larger than All Numbers to Their Right  ####

Create a function that retrieves every number that is strictly larger than every number that follows it.


[Examples]

___
largerThanRight([3, 13, 11, 2, 1, 9, 5]) ➞ [13, 11, 9, 5]
// 13 is larger than all numbers to its right, etc.

largerThanRight([5, 5, 5, 5, 5, 5]) ➞ [5]
// Must be strictly larger.
// Always include the last number.

largerThanRight([5, 9, 8, 7]) ➞ [9, 8, 7]
_____



[Notes]

The last number in an array is trivially strictly larger than all numbers that follow it (no numbers follow it).


[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

