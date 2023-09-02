/*
####  Valid JavaScript Comments  ####

In JavaScript, there are two types of comments:

The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line comments in between multi-line comments in between the /* and */.
Create a function that returns true if comments are properly formatted, and false otherwise.


[Examples]

___
commentsCorrect("//////") ➞ true
// 3 single-line comments: ["//", "//", "//"]

commentsCorrect("/**//**////**/") ➞ true
// 3 multi-line comments + 1 single-line comment:
// ["/*", "*/", "/*", "*/", "//", "/*", "*/"]

commentsCorrect("///*/**/") ➞ false
// The first /* is missing a */

commentsCorrect("/////") ➞ false
// The 5th / is single, not a double //
_____



[Notes]

N/A


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
RegEx Tester and Debugger
https://regex101.com/
With real time explanation, error detection and highlighting.
_________

*/
//Your code should go here:

