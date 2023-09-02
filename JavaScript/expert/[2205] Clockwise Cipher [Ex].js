/*
####  Clockwise Cipher  ####

In Clockwise Cipher, encoding is done by placing message characters in the corner cells of a square and moving in a clockwise direction.
Create a function that takes an argument message, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "Mubashir Hassan"

clockwiseCipher(message) ➞ "Ms ussahr nHaaib"
_____

Step 1: Form a square large enough to fit all the message characters. Given message can fit in a 4 x 4 square.
Step 2: Starting with the top-left corner, place message characters in the corner cells moving in a clockwise direction. After the first cycle is complete, continue placing characters in the cells following the last one in its respective row/column. When the outer cells are filled, continue for the remaining inner squares:

Step 3: Return encoded message Rows-wise:
___
eMessage = "Ms ussahr nHaaib"
_____



[Example for a 5 x 5 Square]

___
[ 1  5  9 13  2]
[16 17 21 18  6]
[12 24 25 22 10]
[ 8 20 23 19 14]
[ 4 15 11  7  3]
_____



[Examples]

___
clockwiseCipher("Mubashir Hassan") ➞ "Ms ussahr nHaaib"

clockwiseCipher("Matt MacPherson") ➞ "M ParsoMc nhteat"

clockwiseCipher("Edabit is amazing") ➞ "Eisadng  tm    i   zbia a"
_____



[Notes]

___
*) Fill up any unused cells with a space character.
*) Message can contain spaces and special characters.
___



[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
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
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Static method creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer. Note: Math.ceil(null) returns integer 0 and does not give a NaN error.
_________

*/
//Your code should go here:

