/*
####  Generate All Nonconsecutive Binary Strings  ####

Create a function to generate all nonconsecutive binary strings where nonconsecutive is defined as a string where no consecutive ones are present, and where n governs the length of each binary string.


[Examples]

___
generateNonconsecutive(1) ➞ "0 1"

generateNonconsecutive(2) ➞ "00 01 10"

generateNonconsecutive(3) ➞ "000 001 010 100 101"

generateNonconsecutive(4) ➞ "0000 0001 0010 0100 0101 1000 1001 1010"
_____



[Notes]

N/A


[formatting] [interview] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of th …
_________
_________
How to Display Integer as Binary
https://steve-mu.medium.com/how-to-display-integer-as-binary-in-javascript-197b58447ff5
First, it uses toString(2) method and converts an integer to a binary string. Then it adds preceding zeros in front of it so that it looks more like a proper binary. Fo …
_________

*/
//Your code should go here:

