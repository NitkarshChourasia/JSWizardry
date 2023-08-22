/*
####  Left Shift by Powers of Two  ####

The left shift operation is similar to multiplication by powers of two.
Sample calculation using the left shift operator (<<):
___
10 << 3 = 10 * 2^3 = 10 * 8 = 80
-32 << 2 = -32 * 2^2 = -32 * 4 = -128
5 << 2 = 5 * 2^2 = 5 * 4 = 20
_____

Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.


[Examples]

___
shiftToLeft(5, 2) ➞ 20

shiftToLeft(10, 3) ➞ 80

shiftToLeft(-32, 2) ➞ -128

shiftToLeft(-6, 5) ➞ -192

shiftToLeft(12, 4) ➞ 192

shiftToLeft(46, 6) ➞ 2944
_____



[Notes]

___
*) There will be no negative values for the second parameter y.
*) This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
*) Alternatively, you can solve this challenge via recursion.
*) A recursive version of this challenge can be found via this link.
___



[bit_operations] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Exponentiation (**)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation#:~:text=The%20exponentiation%20operator%20(%20**%20)%20returns,also%20accepts%20BigInts%20as%20operands.
Returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow, except it also accepts BigInts as operands.
_________
_________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow#:~:text=The%20Math.-,pow()%20function%20returns%20the%20base%20to%20the%20exponent%20power,always%20use%20it%20as%20Math.&text=If%20the%20base%20is%20negative,integer%2C%20the%20result%20is%20NaN.
Returns the base to the exponent power, that is, baseexponent.
_________
_________
Left shift (<<)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift
Shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.
_________

*/
//Your code should go here:

