/*
####  Condi Cipher  ####

In Condi Cipher, encoding is done by shifting a string of messages in correspondence with a given key in the plaintext.
Create a function that takes three arguments, key, shift and message, and returns the encoded message.
There are some variations on the rules of encipherment. One version of the cipher rules are outlined below:
___
message = "on.,"
shift = 10
key = "cryptogram"

condiCipher(message, key, shift) ➞ "jx.,"
_____

Step 1: Remove duplicate alphabets of the key. Rearrange alphabets from A-Z, such that the keyword appears first, followed by the rest of the alphabets in the usual order.
___
c r y p t o g a m b d e f h i j k l n q s u v w x z
_____

Step 2: Starting from 1, assign numbers to the letters:
___
1  2  3  4  5  6  7  8  9  10 11 12 13
c  r  y  p  t  o  g  a  m  b  d  e  f 
14 15 16 17 18 19 20 21 22 23 24 25 26
h  i  j  k  l  n  q  s  u  v  w  x  z
_____

Step 3: Replace each alphabet of the message with the letter in the modified key shifter by a constant positive number shift (wrapping is required if the shift is greater than key size):
___
   'o' = 'j'
// 'j' is 10 places right to 'o'
_____

Step 4: Use the position of the previous letter as the number of places to move to encode the next plaintext number. If you have just encoded an 'o' (position 6), and you now want to encode 'n', then you have to move 6 places to the right from 'n' which brings you to 'x'.
___
   'n' = 'x'
// 'x' is 6 places right to 'n'
// keep other characters in same order

eMessage = "jx.,"
_____

See the below examples for a better understanding:


[Examples]

___
condiCipher("on.,", "cryptogam", 10) ➞ "jx.,"

condiCipher("mubashir", "airforce", 6) ➞ "ugrdtfko"

condiCipher("matt", "edabit", 2) ➞ "opgk"
_____



[Notes]

N/A


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

