/*
####  Learn Lodash: _.camelCase, Turn a String to camelCase  ####

According to the lodash documentation, _.camelCase turns a string into camelcase. Your task is to recreate lodash's camel case with your own function using vanilla JavaScript.
There is already a camel case challenge on Edabit but lodash's version is much more robust. It can tell if a string is already camel case and if so it just returns the string. It can also handle numbers and capitalized letters that are next to one another.


[Use Case]

Sometimes I want to create a new variable with a name that is a combination of other variable names. Say I want to know user1's date of birth and I have two variables, user1 and dateOfBirth. If I combine them I get user1dateOfBirth which is an invalid format for my application. I would use _.startCase("user1" + "dateOfBirth") and I would get user1DateOfBirth.


[Examples]

___
camelCase("Foo Bar") ➞ "fooBar"

camelCase("--foo-bar--") ➞ "fooBar"

camelCase("__FOO_BAR__") ➞ "fooBar"
_____



[Notes]

___
*) Do not attempt to import lodash; you are simply writing your own version.
*) This entire series of challenges can be found here.
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________

*/
//Your code should go here:

