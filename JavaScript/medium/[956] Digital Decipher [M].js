/*
####  Digital Decipher  ####

In Digital Decipher, decoding is done by the simple subtraction of numbers in the key and the corresponding characters on a given array. You may want to solve this challenge before proceeding further.
Create a function that takes two arguments; a positive integer and an array of integers and returns a decoded message as string.
Assign a unique number to each letter of the alphabet.
___
 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9  10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
 14 15 16 17 18 19 20 21 22 23 24 25 26
_____

There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
eMessage = [20, 12, 18, 30, 21]
key = 1939

digitalDecipher(eMessage, key) ➞ "scout"
_____

Subtract each key digit from eMessage consecutive digits:
___
  20 12 18 30 21
-  1  9  3  9  1
 ---------------
  19  3 15 21 20
_____

Write the corresponding number against each character:
___
 s  c  o  u  t
19  3 15 21 20
_____

See the below example for a better understanding:
___
eMessage = [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
key = 1939

digitalDecipher(eMessage, key) ➞ "masterpiece"

  14 10 22 29  6 27 19 18  6  12 8
-  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  13  1 19 20  5 18 16  9  5  3  5
   m  a  s  t  e  r  p  i  e  c  e
_____



[Examples]

___
digitalDecipher([20, 12, 18, 30, 21], 1939) ➞ "scout"

digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990) ➞ "mubashir"

digitalDecipher([6, 4, 1, 3, 9, 20], 100) ➞ "edabit"
_____



[Notes]

N/A


[algorithms] [cryptography] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Number.parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
Parses a string argument and returns an integer of the specified radix or base.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.padEnd()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the curren …
_________
_________
fromCharCode() Method
https://www.w3schools.com/jsref/jsref_fromcharcode.asp
Converts Unicode values into characters.
_________
_________
slice() Method
https://www.w3schools.com/jsref/jsref_slice_string.asp
Extracts parts of a string and returns the extracted parts in a new string. Use the start and end parameters to specify the part of the string you want to extract. Th …
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________

*/
//Your code should go here:

