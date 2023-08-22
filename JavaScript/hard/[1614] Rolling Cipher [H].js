/*
####  Rolling Cipher  ####

Write a function that accepts a string and an n and returns a cipher by rolling each character forward (n > 0) or backward (n < 0) n times.
Note: Think of the letters as a connected loop, so rolling a backwards once will yield z, and rolling z forward once will yield a. If you roll 26 times in either direction, you should end up back where you started.


[Examples]

___
rollingCipher("abcd", 1) ➞ "bcde"

rollingCipher("abcd", -1) ➞ "zabc"

rollingCipher("abcd", 3) ➞ "defg"

rollingCipher("abcd", 26) ➞ "abcd"
_____



[Notes]

___
*) All letters are lower cased.
*) No spacing.
*) Each character is rotated the same number of times.
___



[arrays] [cryptography] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________

*/
//Your code should go here:

