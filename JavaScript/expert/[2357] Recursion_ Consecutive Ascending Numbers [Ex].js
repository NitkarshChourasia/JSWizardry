/*
####  Recursion: Consecutive Ascending Numbers  ####

Write a function that will return true if a given string (divided and grouped into a size) will contain a set of consecutive ascending numbers, otherwise, return false.


[Examples]

___
ascending("123124125") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 3's : 123, 124, 125

ascending("101112131415") ➞ true
// Contains a set of consecutive ascending numbers
// if grouped into 2's : 10, 11, 12, 13, 14, 15

ascending("32332432536") ➞ false
// Regardless of the grouping size, the numbers can't be consecutive.

ascending("326325324323") ➞ false
// Though the numbers (if grouped into 3's) are consecutive but descending.

ascending("666667") ➞ true
// Consecutive numbers: 666 and 667.
_____



[Notes]

___
*) A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges in recursion can be found via this link.
___



[arrays] [numbers] [recursion] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Recursion and Stack
https://javascript.info/recursion
Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can …
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
Recursive Functions
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________

*/
//Your code should go here:

