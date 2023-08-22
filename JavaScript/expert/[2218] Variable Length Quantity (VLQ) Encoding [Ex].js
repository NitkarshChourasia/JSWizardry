/*
####  Variable Length Quantity (VLQ) Encoding  ####

In this challenge you have to create functions to encode and decode variable-length quantities. A variable-length quantity (VLQ) is a universal code that uses an arbitrary number of binary octets (eight-bit bytes) to represent an arbitrarily large integer. A VLQ is essentially a base-128 representation of an unsigned integer with the addition of the eighth bit to mark continuation of bytes.
The way it works is fairly simple. As a big-endian series of bytes, the most significant bit (MSB) of each byte is a 1 to indicate that another VLQ byte follows. The remaining 7 bits of each byte make up the decoded value.


[Examples]

___
# ENCODE:
intToVlq(127) ➞ [127]
// numbers between 0 and 127 are unchanged
// binary: [01111111]

intToVlq(128) ➞ [129, 0]
// 1st byte = 1 + 128 equivalent to 1 * 128 with MSB set to 1 indicating byte follows
// 2nd byte = 0 
// 128 + 0 ➞ 128
// binary: [10000001, 00000000]

intToVlq(106903) ➞ [134, 195, 23]
// 1st byte = 128 + 6 ➞ 6 * 128^2 ➞ 98304
// 2nd byte = 128 + 67 ➞ 67 * 128 ➞ 8576
// 3rd byte = 23 ➞ 23
// 98304 + 8576 + 23 = 106903
// binary: [10000110, 11000011, 00010111]

# DECODE:
vlqToInt([229, 145, 63]) ➞ 1657023
// (229 - 128)*128^2 + (145 - 128)*128 + 63 = 1657023
_____



[Notes]

Integer values for encoding will be in the range 0 <= n <= 2^63


[algorithms] [bit_operations] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
Variable-Length Quantity
https://en.wikipedia.org/wiki/Variable-length_quantity#:~:text=A%20variable%2Dlength%20quantity%20(VLQ,to%20mark%20continuation%20of%20bytes.
A universal code that uses an arbitrary number of binary octets (eight-bit bytes) to represent an arbitrarily large integer. A VLQ is essentially a base-128 representat …
_________
_________
Decode a Variable-Length Quantity
https://codegolf.stackexchange.com/questions/189471/decode-a-variable-length-quantity
A variable-length quantity (also referred to as VLQ or uintvar) is a way to encode up to an integer value using only as many bytes as necessary. This was used in MIDI f …
_________

*/
//Your code should go here:

