/*
####  Sum of Decimals  ####

Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.
"Easy one!" he thinks, but soon he discovers that his function fails over fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?
Can you help Captain Obvious to debug his function and solve the exercise?


[Examples]

___
floatSum(0.3, 0.7) ➞ 1

floatSum(0.35, 0.75) ➞ 1.1

floatSum(1.234, 5.6789) ➞ 6.9129
_____



[Notes]

___
*) Given numbers can be either integer or float with 1 up to 6 decimals.
*) Don't round results!
*) Bonus: Can you resolve it using a simple math expression instead of a built-in method?
___



[bugs] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Imprecise Calculations
https://javascript.info/number#imprecise-calculations
Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store …
_________
_________
Floating Point Math
https://0.30000000000000004.com/
Your language isn't broken, it's doing floating point math. Computers can only natively store integers, so they need some way of representing decimal numbers. This repr …
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________
_________
JavaScript Numbers
https://www.w3schools.com/js/js_numbers.asp
JavaScript has only one type of number. Numbers can be written with or without decimals.
_________

*/
//Your code should go here:

