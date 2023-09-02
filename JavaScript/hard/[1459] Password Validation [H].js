/*
####  Password Validation  ####

Create a function that validates a password to conform to the following rules:
___
*) Length between 6 and 24 characters.
*) At least one uppercase letter (A-Z).
*) At least one lowercase letter (a-z).
*) At least one digit (0-9).
*) Maximum of 2 repeated characters.
"aa" is OK 👍
"aaa" is NOT OK 👎
*) Supported special characters:
! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
___



[Examples]

___
validatePassword("P1zz@") ➞ false
// Too short.

validatePassword("iLoveYou") ➞ false
// Missing a number.

validatePassword("Fhg93@") ➞ true
// OK!
_____



[Notes]

N/A


[conditions] [regex] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-character-set
Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the …
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Online Regex Tester and Debugger
https://regex101.com/
Online regex tester, debugger with highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
RegExp.prototype.source
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source
Returns a String containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.
_________

*/
//Your code should go here:

