/*
####  Replacing Letters with Hashes  ####

Write a function that replaces all letters within a specified range with the hash symbol #.


[Examples]

___
replace("abcdef", "c-e") ➞ "ab###f"

replace("rattle", "r-z") ➞ "#a##le"

replace("microscopic", "i-i") ➞ "m#croscop#c"

replace("", "a-z") ➞ ""
_____



[Notes]

___
*) The range will always be in order, a.k.a. for m-n, character m will always come before or equal n.
*) Strings will be in lower case letters only.
*) Return an empty string if the input is an empty string.
___



[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
How to put a variable inside a regular expression?
https://stackoverflow.com/questions/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression
Per some of the comments, it's important to note that you may want to escape the variable if there is potential for malicious content (e.g. the variable comes from user …
_________
_________
How to use Variable in a Regular Expression
https://reactgo.com/javascript-variable-regex/
Consider we have a string and we need to remove all yes in that string. We can do that by using a replace() method in JavaScript.
_________
_________
RegExp() constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
Creates a regular expression object for matching text with a pattern.
_________
_________
String.prototype.charCodeAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

