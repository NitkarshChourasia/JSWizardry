/*
####  Keyword Cipher  ####

A Keyword Cipher is a monoalphabetic cipher that uses a keyword to provide encryption on the given string of the message.
Create a function that takes two arguments: a string message and a string key, and returns an encoded message.
For the encryption key, the keyword is placed at the beginning, followed by the rest of the characters in the alphabet in order (in other words, with the keyword characters removed):
___
A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z
K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z
_____

The encrypted message substitutes each plaintext character with the encryption key character in the corresponding position.
Return the given message encrypted against the key:
___
message = "ABCHIJ"
key = "KEYWORD"

keywordCipher(key, message) ➞ "KEYABC"
// A = K, B = E, C = Y, H = A, I = B, J = C
_____



[Examples]

___
keywordCipher("keyword", "abchij") ➞ "keyabc"

keywordCipher("purplepineapple", "abc") ➞ "pur"

keywordCipher("mubashir", "edabit") ➞ "samucq"
_____



[Notes]

___
*) Don't forget to remove duplicates after concatenating the string with the keyword.
*) Non-alphabetic characters must be left as they are.
___



[cryptography] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

