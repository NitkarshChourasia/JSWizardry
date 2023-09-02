/*
####  Binary to ASCII Conversion  ####

Create a function that takes a string of 1's and 0's (binary) as an argument and return the equivalent decoded ASCII text. Characters can be in the range of "00000000" to "11111111", which means every eight digits of binary input represents a single character.
___
*) a = 01100001
*) b = 01100010
*) c = 01100011
___

If you were to combine these characters into the string "abc", the corresponding binary would be 011000010110001001100011. Use the resources tab for more info on how to approach this.


[Examples]

___
binaryConversion("011001010110010001100001011000100110100101110100") ➞ "edabit"

binaryConversion("001100010011001000110011") ➞ "123"

binaryConversion("010010000110010101101100011011000110111100111111") ➞ "Hello?"
_____



[Notes]

If you are given an empty string as input, you must also return an empty string. Otherwise, the input will always be a valid binary string.


[formatting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Convert a Binary String into a Readable String and Vice Versa
https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript
A binary code is a representation of a text, computer processor instructions, or other data using a two symbol system, often the binary number system is 0 and 1. The bi …
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created by using the specified sequence of Unicode values.
_________
_________
How exactly does binary code get converted into letters?
https://stackoverflow.com/questions/6826516/how-exactly-does-binary-code-get-converted-into-letters
Out of curiosity, how exactly does binary code get converted into letters? I know there are sites that automatically convert binary to words for you but I wanna underst …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Number.parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
Parses a string argument and returns an integer of the specified radix or base.
_________

*/
//Your code should go here:

