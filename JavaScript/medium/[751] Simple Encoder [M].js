/*
####  Simple Encoder  ####

Create a function that takes a string str and performs simple encoding as per the following method:
___
*) Replace all single occurrence characters with [
*) Replace all characters with two or more occurrences with ]
___

Return the final string after modification.


[Examples]

___
simpleEncoder("Mubashir") ➞ "[[[[[[[["
// '[' for each character

simpleEncoder("Matt") ➞ "[[]]"
// ']' for both 't'

simpleEncoder("eD  aBiT") ➞ "[[]][[[["
// Two spaces in between
_____



[Notes]

___
*) Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
*) Spaces are also characters.
___



[arrays] [cryptography] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
String toLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolowercase.asp
Converts a string to lowercase letters.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________

*/
//Your code should go here:

