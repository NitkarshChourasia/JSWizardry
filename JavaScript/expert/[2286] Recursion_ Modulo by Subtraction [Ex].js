/*
####  Recursion: Modulo by Subtraction  ####

The modulo operation can also be done by repetitive subtraction or addition. In this challenge, you're going to create a function that mimics such an operation and returns the modulo of the two given numbers by recursively subtracting or adding them.


[Examples]

___
modulo(100, 25) ➞ 0

modulo(-51, -4) ➞ -3

modulo(3, 9) ➞ 3

modulo(-21, 5) ➞ -1

modulo(1024, 7) ➞ 2

modulo(273, -6) ➞ 3
_____



[Notes]

___
*) There will be no zero-values for the modulo divisor.
*) You're expected to solve this challenge using a recursive approach.
*) You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully assumed the concept behind it before taking up this challenge.
*) If you think recursion is fun, you can find a collection of those challenges here.
___



[math] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Understand Recursion in JavaScript
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________

*/
//Your code should go here:

