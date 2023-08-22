/*
####  Valid Zip Code  ####

Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:
___
*) Must only contain numbers (no non-digits allowed).
*) Must not contain any spaces.
*) Must not be greater than 5 digits in length.
___



[Examples]

___
isValid("59001") ➞ true

isValid("853a7") ➞ false

isValid("732 32") ➞ false

isValid("393939") ➞ false
_____



[Notes]

N/A


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that  …
_________
_________
isNaN()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
Determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined i …
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Tests: isFinite and isNaN
https://javascript.info/number#tests-isfinite-and-isnan
Remember these two special numeric values? Infinity (and -Infinity) is a special numeric value that is greater (less) than anything. NaN represents an error. They belo …
_________

*/
//Your code should go here:

