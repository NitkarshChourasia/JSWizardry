/*
####  Recursion: Array Summation  ####

Create a function that sums up all the elements in the array recursively. The use of the array's built-in reduce() function is not allowed, thus, the approach is recursive.


[Examples]

___
recurAdd([1, 2, 3, 4, 10, 11]) ➞ 31

recurAdd([-3, 4, 11, 10, 21, 32, -9]) ➞ 66

recurAdd([-21, -7, 19, 3, 4, -8]) ➞ -10
_____



[Notes]

___
*) You're expected to solve this challenge using a recursive approach.
*) You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
*) If you think recursion is fun, you can find a collection of those challenges here.
___



[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Understand Recursion in JavaScript
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________

*/
//Your code should go here:

