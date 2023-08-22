/*
####  Recursion: String Compression from Character Array  ####

The function is given an array of characters. Recursively compress the array into a string using the following rules. For each group of consecutively repeating characters:
___
*) If the number of repeating characters is one, append the string with only this character.
*) If the number n of repeating characters x is greater than one, append the string with "x" + n.
___



[Examples]

___
compress(["t", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "s", "s", "s", "h"]) ➞ "te14s3h"

compress(["a", "a", "b", "b", "c", "c", "c"]) ➞ "a2b2c3"

compress(["a"]) ➞ "a"

compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) ➞ "ab12"

compress(["a", "a", "a", "b", "b", "a", "a"]) ➞ "a3b2a2"
_____



[Notes]

___
*) You are expected to solve this challenge using the concept of recursion.
*) Check out the Resources tab for more details on recursion.
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges in recursion can be found via this link
___



[arrays] [recursion] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Recursion and Stack
https://javascript.info/recursion
Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can …
_________
_________
Learn and Understand Recursion
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

