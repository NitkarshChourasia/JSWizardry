/*
####  Flipping Bits  ####

You will be given a list of 32-bit unsigned integers. Flip all the bits 1 -> 0 and 0 -> 1 and return the result as an unsigned integer.


[Worked Example]

___
n = 4
4 is 0100 in binary. We are working in 32 bits so:
00000000000000000000000000000100 = 4
11111111111111111111111111111011 = 4294967291
return 4294967291
_____



[Examples]

___
flippingBits(2147483647) ➞ 2147483648

flippingBits(1) ➞ 4294967294

flippingBits(4) ➞ 4294967291
_____



[Notes]

N/A


[bit_operations] [formatting] 



-------------------------------------------------------------------
[Resources]
_________
Number toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Converts a number to a string.
_________
_________
String.prototype.padStart()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

