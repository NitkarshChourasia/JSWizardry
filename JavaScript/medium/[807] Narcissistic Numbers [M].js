/*
####  Narcissistic Numbers  ####

A number is narcissistic when the sum of its digits, with each digit raised to the power of digits quantity, is equal to the number itself.
___
153 ➞ 3 digits ➞ 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ➞ Narcissistic
84 ➞ 2 digits ➞ 8² + 4² = 64 + 16 = 80 ➞ Not narcissistic
_____

Given a positive integer n, implement a function that returns true if the number is narcissistic, and false if it's not.


[Examples]

___
isNarcissistic(8208) ➞ true
// 8⁴ + 2⁴ + 0⁴ + 8⁴ = 8208

isNarcissistic(22) ➞ false
// 2² + 2² = 8

isNarcissistic(9) ➞ true
// 9¹ = 9
_____



[Notes]

___
*) Trivially, any number in the 1-9 range is narcissistic and any two-digit number is not.
*) Curious fact: Only 88 numbers are narcissistic.
___



[language_fundamentals] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Narcissistic Number Tutorial
https://www.geeksforgeeks.org/narcissistic-number/
The approach will be to count the number of digits and then extract every digit and then by using pow function we can get the power of that digit and then sum it up at …
_________
_________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
Narcissistic Number
https://en.wikipedia.org/wiki/Narcissistic_number
A number that is the sum of its own digits each raised to the power of the number of digits.
_________
_________
Checking for Narcissism in Numbers (JavaScript)
https://medium.com/@VanessaOsuka/finding-narcissistic-numbers-javascript-19ca06fb63ec
So first, we find the length of the value, store it in power and create 2 array containers( alldigits and result). In step 2, the variable power is converted back to In …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
How to convert a number into array in JavaScript ?
https://www.geeksforgeeks.org/how-to-convert-a-number-into-array-in-javascript/
We have given a number and the task is to convert the given number into an array using JavaScript.
_________
_________
Array: length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically great …
_________

*/
//Your code should go here:

