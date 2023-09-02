/*
####  Validate Phone Numbers  ####

Write a function that returns true if the phone number is in a valid format. Valid formats are as follows:



[Examples]

___
validate("578-332-1114") ➞ true

validate("57-332-1114") ➞ false

validate("577 332  1114") ➞ false
// More than one space in between digits clusters.

validate("57 332 1114") ➞ false
// Unacceptable digit cluster length.

validate("157%332-1114") ➞ false
// Unacceptable delimiter.
_____



[Notes]

___
*) The country code will always be +1 or 1.
*) Each phone number will contain either 10 or 11 digits (depending on whether the country code exists).
*) There must either be exactly one space, a delimiter, or no space at all between the digit clusters.
*) You do not have to worry about extensions.
___



[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Regex Tester and Debugger Online - Javascript, PCRE, PHP
https://www.regextester.com/
Regular Expression Tester with highlighting for Javascript and PCRE. Quickly test and debug your regex.
_________

*/
//Your code should go here:

