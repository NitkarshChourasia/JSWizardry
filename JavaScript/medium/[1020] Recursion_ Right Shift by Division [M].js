/*
####  Recursion: Right Shift by Division  ####

The right shift operation is similar to floor division by powers of two, thus, the process is repetitive and can be done recursively.
Sample calculation using the right shift operator ( >> ):
___
80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
_____

Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.


[Examples]

___
shiftToRight(80, 3) ➞ 10

shiftToRight(-24, 2) ➞ -6

shiftToRight(-5, 1) ➞ -3

shiftToRight(4666, 6) ➞ 72

shiftToRight(3777, 6) ➞ 59

shiftToRight(-512, 10) ➞ -1
_____



[Notes]

___
*) There will be no negative values for the second parameter y.
*) This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
*) You are expected to solve this challenge via recursion.
*) A non-recursive version of this challenge can be found in here.
*) If you think recursion if fun, here is a collection of such challenges.
___



[bit_operations] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
Recursion and Stack
https://javascript.info/recursion
Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can …
_________
_________
JavaScript Bitwise Operations
https://www.w3schools.com/js/js_bitwise.asp
This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.
_________

*/
//Your code should go here:

