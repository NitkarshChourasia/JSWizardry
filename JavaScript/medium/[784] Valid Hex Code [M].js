/*
####  Valid Hex Code  ####

Create a function that determines whether a string is a valid hex code.
A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.


[Examples]

___
isValidHexCode("#CD5C5C") ➞ true

isValidHexCode("#EAECEE") ➞ true

isValidHexCode("#eaecee") ➞ true

isValidHexCode("#CD5C58C") ➞ false
// Length exceeds 6

isValidHexCode("#CD5C5Z") ➞ false
// Not all alphabetic characters in A-F

isValidHexCode("#CD5C&C") ➞ false
// Contains unacceptable character

isValidHexCode("CD5C5C") ➞ false
// Missing #
_____



[Notes]

N/A


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
RegExr: Learn, Build, & Test RegEx
https://regexr.com/
RegExr is an online tool to learn, build, & test Regular Expressions (RegEx / RegExp).
_________
_________
How to check if a string is a valid hex color representation?
https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation/8027444
Contains examples that check if a hex code is valid.
_________
_________
Using Regular Expressions to Check String Length
https://www.sitepoint.com/using-regular-expressions-to-check-string-length/
Learn how to use regular expressions in your coding, and you will discover a wide range of uses. Here's how to use them to check string length.
_________

*/
//Your code should go here:

