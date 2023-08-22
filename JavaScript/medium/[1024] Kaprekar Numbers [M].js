/*
####  Kaprekar Numbers  ####

A Kaprekar Number is a positive integer that is equal to a number formed by first squaring, then splitting and summing its two lexicographical parts:
___
*) If the quantity of digits of the squared number is even, the left and right parts will have the same length.
*) If the quantity of digits of the squared number is odd, then the right part will be the longer half, with the left part being the shorter or equal to zero if the quantity of digits is equal to 1.
___

Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.


[Examples]

___
isKaprekar(3) ➞ false
// n² = "9"
// Left + Right = 0 + 9 = 9 ➞ 9 !== 3

isKaprekar(5) ➞ false
// n² = "25"
// Left + Right = 2 + 5 = 7 ➞ 7 !== 5

isKaprekar(297) ➞ true
// n² = "88209"
// Left + Right = 88 + 209 = 297 ➞ 297 === 297
_____



[Notes]

Trivially, 0 and 1 are Kaprekar Numbers being the only two numbers equal to their square. Any number formed only by digits equal to 9 will always be a Kaprekar Number.


[numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Kaprekar Number
https://en.wikipedia.org/wiki/Kaprekar_number
A natural number in a given number base is a p-Kaprekar number if the representation of its square in that base can be split into two parts, where the second part has d …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
String.prototype.substring()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
Number Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
A wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type object number is created using …
_________
_________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow#:~:text=Description-,The%20Math.,(%20Math%20has%20no%20constructor).
Returns the base to the exponent power, that is, baseexponent.
_________

*/
//Your code should go here:

