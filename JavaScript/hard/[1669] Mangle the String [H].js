/*
####  Mangle the String  ####

Create a function that takes a string and replaces every letter with the letter following it in the alphabet ("c" becomes "d", "z" becomes "a", "b" becomes "c", etc). Then capitalize every vowel (a, e, i, o, u) and return the new modified string.


[Examples]

___
mangle("Fun times!") ➞ "GvO Ujnft!"

mangle("The quick brown fox.") ➞ "UIf rvjdl cspxO gpy."

mangle("Omega") ➞ "Pnfhb"
_____



[Notes]

___
*) If a letter is already uppercase, return it as uppercase (regardless of being a vowel).
*) "y" is not considered a vowel.
___



[formatting] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created by using the specified sequence of Unicode values.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index (the UTF-16 code unit matches the Unicode code point for code points represe …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
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
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to upper case.
_________

*/
//Your code should go here:

