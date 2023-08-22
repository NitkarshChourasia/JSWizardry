/*
####  Smallest Transform  ####

Create a function that returns the smallest number of changes it takes to transform one number into one with identical digits. A step is incrementing or decrementing a digit by one.


[Examples]

___
smallestTransform(399) ➞ 6
// 399 transformed to 999 in 6 steps.

smallestTransform(1234) ➞ 4
// 1234 can be transformed to either 2222 or 3333 using 4 steps.

smallestTransform(153) ➞ 4

smallestTransform(33338) ➞ 5

smallestTransform(7777) ➞ 0
_____



[Notes]

If a number already has identical digits, return 0.


[arrays] [scope] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________

*/
//Your code should go here:

