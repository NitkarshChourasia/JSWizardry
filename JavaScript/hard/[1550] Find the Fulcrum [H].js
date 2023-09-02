/*
####  Find the Fulcrum  ####

A fulcrum of an array is an integer such that all elements to the left of it and all elements to the right of it sum to the same value. Write a function that finds the fulcrum of an array.
To illustrate:
___
findFulcrum([3, 1, 5, 2, 4, 6, -1]) ➞ 2
// Since [3, 1, 5] and [4, 6, -1] both sum to 9
_____



[Examples]

___
findFulcrum([1, 2, 4, 9, 10, -10, -9, 3]) ➞ 4

findFulcrum([9, 1, 9]) ➞ 1

findFulcrum([7, -1, 0, -1, 1, 1, 2, 3]) ➞ 0

findFulcrum([8, 8, 8, 8]) ➞ -1
_____



[Notes]

___
*) If the fulcrum does not exist, return -1 (see example #4).
*) Exclude the leftmost and rightmost elements when computing the fulcrum (it doesn't make sense to sum zero values).
*) If an array has multiple fulcrums, return the one that occurs first.
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
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function.
_________

*/
//Your code should go here:

