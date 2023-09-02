/*
####  Shift and Multiple Validators  ####

For this task, you will write two validators.

A few examples to illustrate these respective functions:


[Examples]

___
isShifted([1, 2, 3], [2, 3, 4]) ➞ true
// Each element is shifted +1

isShifted([1, 2, 3], [-9, -8, -7]) ➞ true
// Each element is shifted -10

isMultiplied([1, 2, 3], [10, 20, 30]) ➞ true
// Each element is multiplied by 10

isMultiplied([1, 2, 3], [-0.5, -1, -1.5]) ➞ true
// Each element is multiplied by -1/2

isMultiplied([1, 2, 3], [0, 0, 0]) ➞ true
// Each element is multiplied by 0
_____



[Notes]

___
*) The given arrays are the same length.
*) Keep in mind one special case: if the second array is an array of only zeroes, then the first array can be anything (the multiplier will be 0).
___



[higher_order_functions] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function.
_________
_________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Set.prototype.size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
The size accessor property returns the number of (unique) elements in a Set object.
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

