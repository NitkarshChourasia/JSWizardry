/*
####  Upper or Lower Case  ####

Return the smallest number of steps it takes to convert a string entirely into uppercase or entirely into lower case, whichever takes the fewest number of steps. A step consists of changing one character from lower to upper case, or vice versa.


[Examples]

___
stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step

stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps

stepsToConvert("aba") ➞ 0

stepsToConvert("abaCCC") ➞ 3
_____



[Notes]

___
*) Return 0 if empty string.
*) Return 0 if the string is already entirely in one case.
*) Only alphabetic characters.
*) Input has no spaces.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
Counting upper and lower case characters in a string?
https://stackoverflow.com/questions/19171240/counting-upper-and-lower-case-characters-in-a-string?answertab=votes#tab-top
counFirst off I know this is far from professional. I'm trying to learn how to work with strings. What this app is supposed to do is take a simple text input and do a f …
_________

*/
//Your code should go here:

