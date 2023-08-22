/*
####  Spartans Decipher  ####

In Spartans Cipher, encoding is done by writing the text horizontally, across the strap in the plaintext word of a message. In ancient times, Spartans and Greeks invented interesting way of encryption called Scytale. The detailed description of the encoding algorithm is provided by Mubashir in his challenge. You are encouraged to solve that one first.
In this challenge, the function is given the encoded message and the number of slides. Create a reversed solution to retrieve the original message.


[Examples]

___
spartansDecipher("Ms t euhSaC biclo aryed", 6) ➞ "Mubashir Scytale Code"

spartansDecipher("M  baai aaEirmn tndteag tda  z", 8) ➞ "Matt and Edabit are amazing"
_____



[Notes]

Strip white spaces on the right of the resulting string, because they were added during the encoding.


[algorithms] [cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Scytale
https://en.wikipedia.org/wiki/Scytale
A tool used to perform a transposition cipher, consisting of a cylinder with a strip of parchment wound around it on which is written a message. The ancient Greeks, and …
_________
_________
Math.ceil()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
Always rounds a number up to the next largest integer.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String.prototype.trim()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
Removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminato …
_________

*/
//Your code should go here:

