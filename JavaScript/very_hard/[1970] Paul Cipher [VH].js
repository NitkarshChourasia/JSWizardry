/*
####  Paul Cipher  ####

In Paul Cipher, only alpha characters will be encoded with the following rules:
___
*) All alpha characters will be treated as uppercase letters.
*) The first alpha character will not change (except for switching to upper case).
*) All subsequent alpha characters will be shifted toward "Z" by the alphabetical position of the previous alpha character (wrap back to "A" if "Z" is passed).
___

he1lo would be encoded as follows:
___
paulCipher("he1lo") ➞ "HM1QA"

h -> H (First character to be changed to uppercase)
e -> M (H is the previous alpha character and 8th letter in the alphabets. E + 8 = M)
1 -> 1 (Keep all characters other than alphabets as it is)
l -> Q (E is the previous alpha character and 5th letter in the alphabets. L + 5 = Q)
o -> A (L is the previous alpha character and 12th letter in the alphabets. O + 12 = A)
_____

Given a string txt, return the encoded message. See the below examples for a better understanding:


[Examples]

___
paulCipher("muBas41r") ➞ "MHWCT41K"

paulCipher("a1rForce") ➞ "A1SXUGUH"

paulCipher("MATT") ➞ "MNUN"
_____



[Notes]

N/A


[algorithms] [cryptography] [functional_programming] [math] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
ASCII Code - The Extended ASCII Table
https://www.ascii-code.com/
The following ASCII table with hex, octal, html, binary and decimal chart conversion contains both the ASCII control characters, ASCII printable characters and the exte …
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________

*/
//Your code should go here:

