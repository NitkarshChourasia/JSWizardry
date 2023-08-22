/*
####  Polydivisible Numbers  ####

Mubashir was reading about Polydivisible Numbers on Wikipedia.
In mathematics a Polydivisible Number (or magic number) is a number in a given number base with digits abcde... that has the following properties:
___
*) Its first digit a is not 0.
*) The number formed by its first two digits ab is a multiple of 2.
*) The number formed by its first three digits abc is a multiple of 3.
*) The number formed by its first four digits abcd is a multiple of 4.
*) etc.
___

Create a function which takes an integer n and returns true if the given number is a Polydivisible Number and false otherwise.


[Examples]

___
isPolydivisible(1232) ➞ true
// 1     / 1 = 1
// 12    / 2 = 6
// 123   / 3 = 41
// 1232  / 4 = 308

isPolydivisible(123220 ) ➞ false
// 1   / 1 = 1
// 12   / 2 = 6
// 123   / 3 = 41
// 1232   / 4 = 308
// 12322   / 5 = 2464.4         // Not a Whole Number
// 123220   /6 = 220536.333...  // Not a Whole Number
_____



[Notes]

N/A


[algebra] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

