/*
####  Strange Pair  ####

A pair of strings form a strange pair if both of the following are true:
___
*) The 1st string's first letter = 2nd string's last letter.
*) The 1st string's last letter = 2nd string's first letter.
___

Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.


[Examples]

___
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair("sparkling", "groups") ➞ true

isStrangePair("bush", "hubris") ➞ false

isStrangePair("", "") ➞ true
_____



[Notes]

It should work on a pair of empty strings (they trivially share nothing).


[language_fundamentals] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
String.prototype.charAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
A falsy value is a value that is considered false when encountered in a Boolean context.
_________
_________
Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., e …
_________
_________
string.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
Indicates the length of a string, in UTF-16 code units.
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.startsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
Determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
_________

*/
//Your code should go here:

