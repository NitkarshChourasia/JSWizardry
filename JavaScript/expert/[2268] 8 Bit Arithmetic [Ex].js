/*
####  8 Bit Arithmetic  ####

You will be given a simple string expression representing an addition or subtraction in 8-bit 2's complement arithmetic. Write a function that returns the result in base 10 followed by a binary representation. If any of the values are outside the range of 8-bit 2's complement, return "Overflow".


[Examples]

___
eightBit("3 + 12") ➞ [15, "11 + 1100 = 1111"]

eightBit("3 - 12") ➞ [-9, "11 - 1100 = 11110111"]

eightBit("-18 - 6") ➞ [-24, "11101110 - 110 = 11101000"]

eightBit("65 + 70") ➞ "Overflow"

eightBit("-127 + 127") ➞ [0, "10000001 + 1111111 = 0"]
_____



[Notes]

Numbers in 8-bit 2's complement notation can range from -128 to 127. The eighth (leftmost) bit signifies a negative number. See Resources for details.


[bit_operations] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Arithmetic Operations on Binary Numbers
https://www.doc.ic.ac.uk/~eedwards/compsys/arithmetic/index.html
We will concentrate on addition and subtraction for Two's Complement representation. The nice feature with Two's Complement is that addition and subtraction of Two's c …
_________
_________
Two's Complement Notation
https://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html
Is used for signed numbers on most modern computers. This notation allows a computer to add and subtract numbers using the same operations (thus we do not need to imple …
_________

*/
//Your code should go here:

