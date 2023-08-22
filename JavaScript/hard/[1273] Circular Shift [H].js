/*
####  Circular Shift  ####

Write a function that takes two arrays (arr1 and arr2) and an int n, and returns true if the second array is equal to the first array shifted by n positions. Otherwise, return false.


[Examples]

___
circularShift([1, 2, 3, 4], [3, 4, 1, 2], 2) ➞ true

circularShift([1, 1], [1, 1], 6) ➞ true

circularShift([0, 1, 2, 3, 4, 5], [3, 4, 5, 2, 1, 0], 3) ➞ false
_____



[Notes]

___
*) The two arrays will be of the same length.
*) n can be a negative value.
___



[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.unshift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
Adds one or more elements to the beginning of an array and returns the new length of the array.
_________

*/
//Your code should go here:

