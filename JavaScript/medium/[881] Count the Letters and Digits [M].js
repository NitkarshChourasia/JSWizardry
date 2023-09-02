/*
####  Count the Letters and Digits  ####

Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.


[Examples]

___
countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }

countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }

countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
_____



[Notes]

___
*) Tests contain only alphanumeric characters.
*) Spaces are not letters.
*) All tests contain valid strings.
___



[conditions] [data_structures] [objects] [regex] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the matches when matching a string against a regular expression.
_________
_________
string.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
Indicates the length of a string, in UTF-16 code units.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Number.isNaN()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
Determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN().
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string …
_________

*/
//Your code should go here:

