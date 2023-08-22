/*
####  Sum of Slices of an Array (Part 1)  ####

Create a function that takes an array as an argument and return an array of the sum of each of its slices. An array's slices are groups of consecutive values that add up to a maximum of 100. No slice's total sum should exceed 100. However, if a single integer equals or exceeds 100, return the integer as well.


[Examples]

___
sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100])
➞ [97, 78, 87, 68, 100]

// First slice: [10, 29, 13, 14, 15, 16]
// 10 + 29 + 13 + 14 + 15 + 16 = 97
// The next value could not be included in this slice because
// the total would exceed 100.

// Second slice: [17, 31, 20, 10]
// 17 + 31 + 20 + 10 = 78
// The next value could not be included in this slice because
// the total would exceed 100.

// And so on ...
_____

___
sumOfSlices([58, 3, 38, 99, 10]) ➞ [99, 99, 10]

sumOfSlices([13]) ➞ [13]
_____



[Notes]

Do not sort the array.


[algorithms] [arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________

*/
//Your code should go here:

