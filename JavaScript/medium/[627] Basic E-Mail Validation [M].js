/*
####  Basic E-Mail Validation  ####

Create a function that accepts a string, checks if it's a valid email address and returns either true or false, depending on the evaluation.
___
*) The string must contain an @ character.
*) The string must contain a . character.
*) The @ must have at least one character in front of it.
e.g. "e@edabit.com" is valid while "@edabit.com" is invalid.
*) The . and the @ must be in the appropriate places.
e.g. "hello.email@com" is invalid while "john.smith@email.com" is valid.
___

If the string passes these tests, it's considered a valid email address.


[Examples]

___
validateEmail("@gmail.com") ➞ false

validateEmail("hello.gmail@com") ➞ false

validateEmail("gmail") ➞ false

validateEmail("hello@gmail") ➞ false

validateEmail("hello@edabit.com") ➞ true
_____



[Notes]

___
*) Check the Tests tab to see exactly what's being evaluated.
*) You can solve this challenge with RegEx, but it's intended to be solved with logic.
*) Solutions using RegEx will be accepted but frowned upon :(
___



[logic] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
Returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
_________
_________
How to validate an email address in JavaScript?
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
Using regular expressions is probably the best way. But keep in mind that one should not rely only upon JavaScript validation. JavaScript can easily be disabled. This s …
_________
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of another string, returning true or false as appropriate.
_________
_________
Online RegEx Tester and Debugger
https://regex101.com/
This website helps you understand better how regular expressions work. Happy coding!
_________

*/
//Your code should go here:

