/*
####  Hashtag Generator  ####

Create a function that is a Hashtag Generator by using the following rules:
___
*) The output must start with a hashtag (#).
*) Each word in the output must have its first letter capitalized.
*) If the final result, a single string, is longer than 140 characters, the function should return false.
*) If either the input (str) or the result is an empty string, the function should return false.
___



[Examples]

___
generateHashtag("    Hello     World   " ) ➞ "#HelloWorld"

generateHashtag("") ➞ false, "Expected an empty string to return false"

generateHashtag("Edabit Is Great") ➞ "#EdabitIsGreat", "Should remove spaces."
_____



[Notes]

N/A


[algorithms] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a patter …
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
join() Method
https://www.w3schools.com/jsref/jsref_join.asp
Returns the array as a string.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

