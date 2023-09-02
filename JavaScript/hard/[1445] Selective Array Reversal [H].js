/*
####  Selective Array Reversal  ####

Create a function that takes an array and a number and selectively reverse the order of the array based on the number you're given (second argument). If you're given the arguments [1,2,3,4,5,6] and 2, you would return the array [2,1, 4,3, 6,5].


[Examples]

___
selReverse([1,2,3,4,5,6], 2) ➞ [2,1, 4,3, 6,5]

selReverse([2,4,6,8,10,12,14,16], 3) ➞ [6,4,2, 12,10,8, 16,14]

selReverse([5,7,2,6,0,4,6], 100) ➞ [6,4,0,6,2,7,5]
_____



[Notes]

___
*) If the array you're given can't be broken up into equal parts, just reverse the remaining numbers (see 2nd expample).
*) If len exceeds the array length, reverse everything.
*) If len is zero, return the original array.
___



[algorithms] [arrays] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.concat()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________

*/
//Your code should go here:

