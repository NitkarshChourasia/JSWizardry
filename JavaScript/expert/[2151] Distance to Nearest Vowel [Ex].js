/*
####  Distance to Nearest Vowel  ####

Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.


[Examples]

___
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
_____



[Notes]

___
*) All input strings will contain at least one vowel.
*) Strings will be lowercased.
*) Vowels are: a, e, i, o, u.
___



[loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Tutorial Video Solution
https://youtu.be/2Xvb-MJAPEU
Video that explains the strategy and necessary steps it takes to calculate the distance between specific elements in an array using the for loop.
_________
_________
String.prototype.search()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
Executes a search for a match between a regular expression and this String object.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.matchAll()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
Returns an iterator of all results matching a string against a regular expression, including capturing groups.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
RegExp.prototype.exec()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
Executes a search for a match in a specified string. Returns a result array, or null.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

