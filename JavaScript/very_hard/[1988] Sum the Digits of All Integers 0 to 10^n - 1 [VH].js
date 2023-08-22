/*
####  Sum the Digits of All Integers 0 to 10^n - 1  ####

Create a function that takes an integer parameter, n, and returns the sum of all the digits in each integer in the range 0 to 10^n - 1 inclusive.
___
*) If n is 1, the range is 0 to 9.
*) if n is 2, the range is 0 to 99.
*) if n is 12, the range is 0 to 999999999999.
___

n will always be >= 1.
Because of JavaScript's representation of numbers, n will be limited to 125


[Examples]

___
sumDigitsInRange(1) ➞ 45

sumDigitsInRange(2) ➞ 900

sumDigitsInRange(3) ➞ 13500

sumDigitsInRange(8) ➞ 3600000000

sumDigitsInRange(13) ➞ 585000000000000
_____



[Notes]

The function should run quickly.


[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Number.prototype.toPrecision()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
Returns a string representing the Number object to the specified precision.
_________
_________
Recursive and Explicit Formulas
https://www.ck12.org/book/ck-12-math-analysis/section/7.1/
A recursive formula for a sequence allows you to find the value of the nth term in the sequence if you know the value of the (n-1)th term in the sequence. An explicit f …
_________
_________
parseFloat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
Parses an argument (converting it to a string first if needed) and returns a floating point number.
_________
_________
General Term of a Number Sequence
https://www.youtube.com/watch?reload=9&reload=9&v=MXEEfAZZ7Rs
Sequences may be defined in one of the following ways: listing the first few terms and assuming that the pattern represented continues indefinitely, giving a descriptio …
_________

*/
//Your code should go here:

