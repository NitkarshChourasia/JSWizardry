/*
####  Slidey Numbers  ####

A number is considered slidey if for every digit in the number, the next digit from that has an absolute difference of one. Check the examples below.


[Examples]

___
isSlidey(123454321) ➞ true

isSlidey(54345) ➞ true

isSlidey(987654321) ➞ true

isSlidey(1123) ➞ false

isSlidey(1357) ➞ false
_____



[Notes]

___
*) A number cannot slide properly if there is a "flat surface" (example #4), or has gaps (example #5).
*) All single digit numbers can be considered slidey numbers!
___



[numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Math.abs()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number
_________

*/
//Your code should go here:

