/*
####  Word to Bitstring to Boolean Array  ####

Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:



[Examples]

___
toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

toBoolArray("loves") ➞ [false, true, false, true, true]

toBoolArray("tesh") ➞ [false, true, true, false]
_____



[Notes]

___
*) The letter A is at position 1 and Z at 26.
*) All input strings are in lowercase letters of the English alphabet.
___



[arrays] [objects] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an iterable or array-like object.
_________
_________
Boolean Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
An object wrapper for a boolean value.
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value …
_________

*/
//Your code should go here:

