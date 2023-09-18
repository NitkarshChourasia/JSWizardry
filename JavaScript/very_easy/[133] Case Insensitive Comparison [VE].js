/*
####  Case Insensitive Comparison  ####

Write a function that validates whether two strings are identical. Make it case insensitive.


[Examples]

___
match("hello", "hELLo") ➞ true

match("motive", "emotive") ➞ false

match("venom", "VENOM") ➞ true

match("mask", "mAskinG") ➞ false
_____



[Notes]

N/A


[language_fundamentals] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
JavaScript Case Insensitive String Comparison
https://stackoverflow.com/questions/2140627/javascript-case-insensitive-string-comparison
How do I perform case insensitive string comparison in JavaScript?
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
localeCompare() Method
https://www.w3schools.com/jsref/jsref_localecompare.asp
Returns a number indicating whether the string comes before, after or is equal as the compareString in sort order.
_________
_________
Comparisons
https://javascript.info/comparison
We know many comparison operators from maths: Greater/less than: a > b, a < b. Greater/less than or equals: a >= b, a <= b. Equals: a == b (please note the double equal …
_________
_________
Comparison Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. Th …
_________
_________
toLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolowercase.asp
Converts a string to lowercase letters. Note: The toLowerCase() method does not change the original string. Tip: Use the toUpperCase() method to convert a string to u …
_________
_________
toUpperCase() Method
https://www.w3schools.com/jsref/jsref_touppercase.asp
Converts a string to uppercase letters. Note: The toUpperCase() method does not change the original string. Tip: Use the toLowerCase() method to convert a string to l …
_________

*/
//Your code should go here:

"use strict";

let match = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

if (require.main == module) {
    console.log("####  Case Insensitive Comparison  ####");
    // Test cases.
    console.log(match("hello", "hELLo")); // true
    console.log(match("motive", "emotive")); // false
    console.log(match("venom", "VENOM")); // true
    console.log(match("mask", "mAskinG")); // false
}

// 18-09-2023
// complete.