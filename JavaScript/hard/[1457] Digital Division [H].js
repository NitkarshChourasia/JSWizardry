/*
####  Digital Division  ####

In this challenge, you have to verify if a number is exactly divisible by a combination of its digits. There are three possible conditions to test:
___
*) The given number is exactly divisible by each of its digits excluding the zeros.
*) The given number is exactly divisible by the sum of its digits.
*) The given number is exactly divisible by the product of its digits.
___

Given an integer n, implement a function that returns:
___
*) If every test is true, a string "Perfect".
*) If some test is true, the number of true tests (1 or 2).
*) If every test is false, a string "Indivisible".
___



[Examples]

___
digitalDivision(21) ➞ 1
// Exactly divisible only by the sum of its digits (2 + 1 = 3).

digitalDivision(128) ➞ 2
// Exactly divisible by each of its digits.
// Exactly divisible by the product of its digits (1 * 2 * 8 = 16).

digitalDivision(100) ➞ 2
// Exactly divisible by each of its digits (excluding zeros).
// Exactly divisible by the sum of its digits (1 + 0 + 0 = 1).

digitalDivision(12) ➞ "Perfect"
// Exactly divisible by each of its digits.
// Exactly divisible by 3 (sum of digits = 1 + 2).
// Exactly divisible by 2 (product of digits = 1 * 2).

digitalDivision(31) ➞ "Indivisible"
// Every testing condition is false.
_____



[Notes]

___
*) Remember to exclude any 0-digit when testing if the given n is divisible by each of its digits (see example #3).
*) A number containing at least a 0-digit can't be exactly divided by the product of its digits (division by 0).
*) Trivially, every single-digit positive number greater than 0 is Perfect
*) Any given number will be a positive integer greater than 0.
___



[conditions] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
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

*/
//Your code should go here:

