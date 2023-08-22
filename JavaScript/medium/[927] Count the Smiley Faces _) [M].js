/*
####  Count the Smiley Faces :)  ####

Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:
___
*) A smiley has eyes. Eyes can be : or ;.
*) A smiley has a nose but it doesn't have to. A nose can be - or ~.
*) A smiley has a mouth which can be ) or D.
___

No other characters are allowed except for those mentioned above.


[Examples]

___
countSmileys([":)", ";(", ";}", ":-D"]) ➞ 2

countSmileys([";D", ":-(", ":-)", ";~)"]) ➞ 3

countSmileys([";]", ":[", ";*", ":$", ";-D"]) ➞ 1
_____



[Notes]

___
*) You will always be given an array as input.
*) An empty array should return 0.
*) The order of each facial element will always be the same.
*) Noses are optional (e.g. :) and :-) are both valid).
___



[loops] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

