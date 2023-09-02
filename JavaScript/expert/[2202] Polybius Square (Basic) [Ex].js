/*
####  Polybius Square (Basic)  ####

The Polybius Square cipher is a simple substitution cipher that makes use of a 5x5 square grid. The letters A-Z are written into the grid, with "I" and "J" typically sharing a slot (as there are 26 letters and only 25 slots).

To encipher a message, each letter is merely replaced by its row and column numbers in the grid.
Create a function that takes a plaintext or ciphertext message, and returns the corresponding ciphertext or plaintext.


[Examples]

___
polybius("Hi") ➞ "2324"

polybius("2324  4423154215") ➞ "hi there"

polybius("543445 14343344 522433 21422415331443 52244423 4311311114") ➞ "you dont win friends with salad"
_____



[Notes]

As "I" and "J" share a slot, both are enciphered into 24, but deciphered only into "I" (see third and fourth test).


[arrays] [cryptography] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
JavaScript Multidimensional Arrays
https://www.dyn-web.com/javascript/arrays/multidimensional.php
JavaScript multidimensional arrays defined and demonstrated. How to access elements, add and remove elements, and iterate over multidimensional arrays.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

