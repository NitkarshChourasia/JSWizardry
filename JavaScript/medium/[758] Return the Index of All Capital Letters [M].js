/*
####  Return the Index of All Capital Letters  ####

Create a function that takes a single string as argument and returns an ordered array containing the indices of all capital letters in the string.


[Examples]

___
indexOfCaps("eDaBiT") ➞ [1, 3, 5]

indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]

indexOfCaps("determine") ➞ []

indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]

indexOfCaps("sUn") ➞ [1]
_____



[Notes]

___
*) Return an empty array if no uppercase letters are found in the string.
*) Special characters ($#@%) and numbers will be included in some test cases.
*) Assume all words do not have duplicate letters.
___



[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
How to find position of all uppercase characters in string?
https://stackoverflow.com/questions/27152871/how-to-find-position-of-all-uppercase-characters-in-string
How to get the positions of all Uppercase characters in a string, in jquery? assume var str = "thisIsAString"; answer would be 4,6,7 (with t being at index = 0)
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it's not present.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________

*/
//Your code should go here:

