/*
####  Generate Floats  ####

Python's range function can only generate a list of integers, your task is to generate a list of floats. Generate a list of values between 0 and an endpoint n spaced at i intervals.


[Examples]

___
genValues(2, 0.25) ➞ [0.0, 0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0]

genValues(1, 0.1) ➞ [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]

genValues(20, 2) ➞ [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
_____



[Notes]

___
*) The endpoint will always be a positive integer.
*) This function should also work for generating integers (last example).
___



[loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Problem With Decimal Calculations
https://stackoverflow.com/questions/5037839/avoiding-problems-with-javascripts-weird-decimal-calculations#5037927
In the first answer it is nicely explained how to use workarounds like toFixed() or Math.round() to fix this problem.
_________

*/
//Your code should go here:

