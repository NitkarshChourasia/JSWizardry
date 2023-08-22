/*
####  Hamming Code  ####

The Hamming Code is used to correct errors in data transmissions. Create a function that takes a string containing the message and returns an encoded message using hamming code.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
hammingCode("hey") ➞
"000111111000111000000000000111111000000111000111000111111111111000000111"
_____

Step 1: Convert every character to its ASCII value:
___
h, e, y = 104, 101, 121
_____

Step 2: Convert ASCII values to 8-bit binary:
___
104, 101, 121 = 01101000, 01100101, 01111001
_____

Step 3: Triple every bit:
___
01101000, 01100101, 01111001 =

000111111000111000000000, 000111111000000111000111, 000111111111111000000111
_____

Step 4: Concatenate the result:
___
"000111111000111000000000000111111000000111000111000111111111111000000111"
_____

See the below examples for a better understanding:


[Examples]

___
hammingCode("hey") ➞
"000111111000111000000000000111111000000111000111000111111111111000000111"

hammingCode("mubashir") ➞
"000111111000111111000111000111111111000111000111000111111000000000111000000111111000000000000111000111111111000000111111000111111000111000000000000111111000111000000111000111111111000000111000"

hammingCode("matt") ➞
"000111111000111111000111000111111000000000000111000111111111000111000000000111111111000111000000"
_____



[Notes]

N/A


[cryptography] [logic] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of th …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

