/*
####  Rail Fence Cipher  ####

In Rail Fence Cipher encoding is done by placing each character successively in a diagonal along with a set of rails.
Create a function that takes two arguments; a string and the number of rails, and returns the encoded message.
___
message = "WEAREDISCOVEREDFLEEATONCE"
rails = 3

railFenceCipher(message, rails) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"
_____

In the above example, the given message to be decomposed in 3 rails:
___
W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C
    A       I       V       D       E       N
_____

Starting from the upper line, the encoded message will be:
___
"WECRLTEERDSOEEFEAOCAIVDEN"
_____



[Examples]

___
railFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3) ➞ "WECRLTEERDSOEEFEAOCAIVDEN"

railFenceCipher("EDABITISAMAZING", 4) ➞ "EIIDTSZNAIAAGBM"

railFenceCipher("WEWILLALLDIEONEDAY", 3) ➞ "WLLOAEILLDENDYWAIE"
_____



[Notes]

Rails will be >=2


[algorithms] [cryptography] [strings] 



-------------------------------------------------------------------
[Resources]
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
Rail Fence Cipher
https://crypto.interactive-maths.com/rail-fence-cipher.html
Is a transposition cipher that uses a table that looks a bit like an old rail fence viewed from above.
_________

*/
//Your code should go here:

