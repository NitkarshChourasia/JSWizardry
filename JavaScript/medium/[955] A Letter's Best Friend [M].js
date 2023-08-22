/*
####  A Letter's Best Friend  ####

Given a string, return if a given letter always appears immediately before another given letter.


[Worked Example]

___
bestFriend("he headed to the store", "h", "e") ➞ true

// All occurences of "h": ["he", "headed", "the"]
// All occurences of "h" have an "e" after it.
// Return true
_____



[Examples]

___
bestFriend("he headed to the store", "h", "e") ➞ true

bestFriend("i found an ounce with my hound", "o", "u") ➞ true

bestFriend("we found your dynamite", "d", "y") ➞ false
_____



[Notes]

___
*) Don't count letters with spaces between them (example #3).
*) All sentences will be given in lowercase.
___



[loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String Length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
RegExp Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
Used for matching text with a pattern.
_________

*/
//Your code should go here:

