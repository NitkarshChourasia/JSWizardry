/*
####  Working 9 to 5  ####

Write a function that calculates overtime and pay associated with overtime.
___
*) Working 9 to 5: regular hours
*) After 5pm is overtime
___

Your function gets an array with 4 values:
___
*) Start of working day, in decimal format, (24-hour day notation)
*) End of working day. (Same format)
*) Hourly rate
*) Overtime multiplier
___

Your function should spit out:
___
*) $ + earned that day (rounded to the nearest hundreth)
___



[Examples]

___
overTime([9, 17, 30, 1.5]) ➞ "$240.00"

overTime([16, 18, 30, 1.8]) ➞ "$84.00"

overTime([13.25, 15, 30, 1.5]) ➞ "$52.50"
_____

2nd example explained:
___
*) From 16 to 17 is regular, so 1 * 30 = 30
*) From 17 to 18 is overtime, so 1 * 30 * 1.8 = 54
*) 30 + 54 = $84.00
___



[algebra] [arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expre …
_________
_________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs cal …
_________

*/
//Your code should go here:

