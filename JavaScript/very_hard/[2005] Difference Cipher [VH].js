/*
####  Difference Cipher  ####

It's time to send and receive secret messages.
Create a single function that takes a string or an array and returns a coded or decoded message.
The first letter of the string, or the first element of the array represents the Character Code of that letter. The next elements are the differences between the characters: e.g. A +3 --> C or z -1 --> y.


[Examples]

___
difCiph("Hello") ➞ [72, 29, 7, 0, 3]
// H = 72, the difference between the H and e is 29 (upper- and lowercase).
// The difference between the two l's is obviously 0.

difCiph([ 72, 33, -73, 84, -12, -3, 13, -13, -68 ]) ➞ "Hi there!"

difCiph("Sunshine") ➞ [83, 34, -7, 5, -11, 1, 5, -9]
_____



[Notes]

The input of the function will always be a string or an array with numbers.


[arrays] [cryptography] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________

*/
//Your code should go here:

