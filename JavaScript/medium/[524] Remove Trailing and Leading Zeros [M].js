/*
####  Remove Trailing and Leading Zeros  ####

Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
___
*) Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
*) Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
___



[Examples]

___
removeLeadingTrailing("230.000") ➞ "230"

removeLeadingTrailing("00402") ➞ "402"

removeLeadingTrailing("03.1400") ➞ "3.14"

removeLeadingTrailing("30") ➞ "30"
_____



[Notes]

___
*) Return a string.
*) If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
*) If the number is 0, 0.0, 000, 00.00, etc... return "0".
___



[formatting] [numbers] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
Number Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
A wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type object number is created using …
_________
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________
_________
Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
Patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() method …
_________
_________
Regex Tutorial
https://www.rexegg.com/
Comprehensive resource covering basic to advanced uses of regex. Includes regex cheat sheet, tools, books and tricks.
_________

*/
//Your code should go here:

