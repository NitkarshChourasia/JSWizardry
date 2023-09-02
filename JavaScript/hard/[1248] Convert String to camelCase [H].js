/*
####  Convert String to camelCase  ####

Create a function that converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.


[Examples]

___
toCamelCase("A-B-C") ➞ "ABC"

toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"
_____



[Notes]

An empty string as input "" should return an empty string.


[formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

