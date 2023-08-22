/*
####  A Simple Modification  ####

Mubashir needs your help to learn javaScript Programming. Help him by modifying a given string txt as follows:
___
*) Reverse the string given.
*) Replace each letter to its position in the alphabet for example (a = 1, b = 2, c = 3, ...).
*) Join the array and convert it to a number.
*) Convert the number to binary.
*) Convert the string back to a number.
___

See below example for more understanding :
modify("hello") ➞ 111001101011101101101010
___
 "hello" = "olleh"

 "olleh" = ['15', '12', '12', '5', '8']

 ['15', '12', '12', '5', '8'] = 15121258

 15121258 = "111001101011101101101010"

 "111001101011101101101010" = 111001101011101101101010
_____



[Examples]

___
modify("hello") ➞ 111001101011101101101010

modify("mubashir") ➞ 10110000110010000110011111000111000001

modify("edabit") ➞ 111111110110001110001
_____



[Notes]

There are no spaces and the string is lowercase.


[algorithms] [interview] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
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
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Convert Decimal to Binary
https://masteringjs.io/tutorials/fundamentals/decimal-to-binary
JavaScript's typeof operator can be used with a function-like syntax. But it is technically not a function. Here's what you need to know...
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

