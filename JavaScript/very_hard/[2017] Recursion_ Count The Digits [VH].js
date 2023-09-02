/*
####  Recursion: Count The Digits  ####

Create a function that will recursively count the number of digits of a number. Conversion of the number to a string is not allowed, thus, the approach is recursive.


[Examples]

___
digitsCount(4666) ➞ 4

digitsCount(544) ➞ 3

digitsCount(121317) ➞ 6

digitsCount(0) ➞ 1

digitsCount(12345) ➞ 5

digitsCount(1289396387328L) ➞ 13
_____



[Notes]

___
*) All inputs are integers but some are in exponential form, deal with it accordingly.
*) You are expected to come up with a solution using the concept of recursion or the so-called recursive approach.
*) Check out the Resources for more topics about recursion to read on (if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge or unless otherwise).
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges alike can be found via this link.
___



[math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
Is a function that calls itself until it doesn’t. And this technique is called recursion.
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________

*/
//Your code should go here:

