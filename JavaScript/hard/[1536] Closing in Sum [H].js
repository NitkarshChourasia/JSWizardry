/*
####  Closing in Sum  ####

Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.


[Worked Example]

___
closingInSum(2520) ➞ 72

// The first and last digits are 2 and 0.
// 2 and 0 form 20.
// The second digit is 5 and the second to last digit is 2.
// 5 and 2 form 52.

// 20 + 52 = 72
_____



[Examples]

___
closingInSum(121) ➞ 13
// 11 + 2

closingInSum(1039) ➞ 22
// 19 + 3

closingInSum(22225555) ➞ 100
// 25 + 25 + 25 + 25
_____



[Notes]

___
*) If the number has an odd number of digits, simply add on the single-digit number in the center (see example #1).
*) Any number which is zero-padded counts as a single digit (see example #2).
___



[algorithms] [loops] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
Used to represent and manipulate a sequence of characters.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
_________

*/
//Your code should go here:

