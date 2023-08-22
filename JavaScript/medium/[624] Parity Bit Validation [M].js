/*
####  Parity Bit Validation  ####

Parity bits are used as very simple checksum to ensure that binary data isn't corrupted during transit. Here's how they work:
___
*) If a binary string has an odd number of 1's, the parity bit is a 1.
*) If a binary string has an even number of 1's, the parity bit is a 0.
*) The parity bit is appended to the end of the binary string.
___

Create a function that validates whether a binary string is valid, using parity bits.


[Worked Example]

___
validateBinary("10110010") ➞ true

// The last digit is the parity bit.
// 0 is the last digit.
// 0 means that there should be an even number of 1's.
// There are four 1's.
// Return true.
_____



[Examples]

___
validateBinary("00101101") ➞ true

validateBinary("11000000") ➞ true

validateBinary("11000001") ➞ false
_____



[Notes]

___
*) All inputs will be a byte long (8 characters).
*) You can find another parity bit involved challenge via this link.
___



[numbers] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String replace() Method
https://www.w3schools.com/jsref/jsref_replace.asp
Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
_________
_________
Array reduce() Method
https://www.w3schools.com/jsref/jsref_reduce.asp
Reduces the array to a single value.
_________
_________
Split Numbers Into Individual Digits
https://stackoverflow.com/questions/7784620/javascript-number-split-into-individual-digits
I am trying to solve a math problem where I take a number e.g. 45, or 111 and then split the number into separate digits e.g. 4 5 or 1 1 1. I will then save each number …
_________
_________
parseInt and .map()
https://wsvincent.com/javascript-parseint-map/
Understand how to convert number strings to integers using parseInt and .map().
_________
_________
String.prototype.match()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

