/*
####  Mega Milestones  ####

Given an number, return a string which contains varying amounts of the word 'MEGA' depending on the given number's order of magnitude.
___
*) If the number is less than 100, return "not a mega milestone".
*) Otherwise, start with the string "MEGA milestone".
*) For every order of magnitude over 100 that the number is, add the word "MEGA" to the start of the string.
___

See the examples below for further clarification!


[Examples]

___
howMuchMega(54) ➞ "not a mega milestone"

howMuchMega(143) ➞ "MEGA milestone"

howMuchMega(1000) ➞ "MEGA MEGA milestone"

howMuchMega(9999.9) ➞ "MEGA MEGA milestone"

howMuchMega(10000) ➞ "MEGA MEGA MEGA milestone"
_____



[Notes]

___
*) Large negative numbers can also be considered as MEGA, so use the absolute values.
*) You can expect decimal numbers as well as whole numbers.
___



[formatting] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number, that is Math.abs(x)=|x|={ x ifx>0 0 ifx=0 -x ifx<0.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Math.log10()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
If the value of x is less than 0, the return value is always NaN. Because log10() is a static method of Math, you always use it as Math.log10(), rather than as a metho …
_________
_________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
Is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number p …
_________

*/
//Your code should go here:

