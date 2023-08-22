/*
####  Mirror Cipher  ####

In Mirror Cipher, encoding is done by by switching message characters with its mirror opposite character of the key.
Create a function that takes two arguments; a message and an optional key, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "Mubashir Hassan"
key = "edabitisamazing"

mirrorCipher(message, key) ➞ "tuzishar hissid"
_____

Step 1: Replace all characters of given message with mirror character in the key:
___
M = t
// "t" is the mirror character of "m".
// (five characters from the left and right end respectively)

u = u
// "u" is not part of the key.

b = z
// "z" is the mirror character of "b".

a = i, and so on ...
_____

Step 2: Return encoded message in lower case:
___
"tuzishar hissid"
_____

If optional key is not given, consider the whole alphabet as a default (i.e. key = "abc..z").


[Examples]

___
mirrorCipher("Mubashir Hassan", "edabitisamazing") ➞ "tuzishar hissid"

mirrorCipher("Matt MacPherson") ➞ "nzgg nzxksvihlm"

mirrorCipher("Airforce is best", "pilot") ➞ "aorfirce os besp"
_____



[Notes]

Ignore case of message and key, (e.g. "M" = "m").


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
String toLowerCase() Method
https://www.w3schools.com/jsref/jsref_tolowercase.asp
Converts a string to lowercase letters.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
Implementing Atbash Cipher
https://www.geeksforgeeks.org/implementing-atbash-cipher/
Is a substitution cipher with just one specific key where all the letters are reversed that is A to Z and Z to A. It was originally used to encode the Hebrew alphabets …
_________

*/
//Your code should go here:

