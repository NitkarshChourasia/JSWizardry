/*
####  Recursion: Exact Factorial Bounds  ####

Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not an exact bound!".


[Examples]

___
isExact(6) ➞ [6, 3]

isExact(24) ➞ [24, 4]

isExact(125) ➞ "Not an exact bound!"

isExact(720) ➞ [720, 6]

isExact(1024) ➞ "Not an exact bound!"

isExact(40320) ➞ [40320, 8]
_____



[Notes]

___
*) It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
*) You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
*) There will be no exceptions to handle. All inputs are positive integers.
*) A recursive approach is prone to Uncaught RangeError or exceededing the maximum call size of the stack.
*) A non-recursive version of this challenge (of lesser difficulty and the total liberty of not using a recursive approach) can be found here.
*) If you think recursion is fun, you can find a collection of those challenges here.
___



[math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function By Example
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

