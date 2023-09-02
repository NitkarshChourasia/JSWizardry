/*
####  Convert "Zero" and "One" to "1" and "0"  ####

Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.


[Examples]

___
textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero three") ➞ ""

textToNumberBinary("one one") ➞ ""
_____



[Notes]

You must return the result as a string.


[arrays] [formatting] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the matches when matching a string against a regular expression.
_________
_________
String​.prototype​.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
Array.prototype.map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Always rounds down and returns the largest integer less than or equal to a given number.
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length read-only property of a string contains the length of the string in UTF-16 code units.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. …
_________

*/
//Your code should go here:

