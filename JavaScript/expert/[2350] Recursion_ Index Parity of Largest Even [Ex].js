/*
####  Recursion: Index Parity of Largest Even  ####

Finding an even integer in an array is kind of trivial and superficial to most programming enthusiasts. This challenge will take it to the next level.
Write a function that returns the largest even integer in an array with its corresponding index and the parity of that index, but determining the parity of that index is limited to not using the modulo operator %. Therefore, devise a way to resolve it.
Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for your to solve it recursively.


[Output Structure]

___
{"@odd|even index " + index_of_largest: largest_integer}
_____



[Examples]

___
bitwiseIndex([107, 19, 36, -18, -78, 24, 97]) ➞ {"@even index 2": 36}

bitwiseIndex([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@even index 6": 10}

bitwiseIndex([4, 4, 4, 4, 4, 4]) ➞ {"@even index 0": 4}

bitwiseIndex([-31, -7, -13, -7, -9, -13]) ➞ "No even integer found!"
_____



[Notes]

___
*) The use of the modulo operator %, indexOf() and max() functions are restricted.
*) You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
*) If you think recursion is fun, you can find a collection of those challenges here.
*) A non-recursive version of this challenge can be found here.
___



[arrays] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Check Whether the Number Is Odd or Even Without Using Mod Operator
https://www.faceprep.in/c/check-whether-the-number-is-odd-or-even-without-using-mod-operator/
It is very simple to find if the given number is either odd or even without using the modulus operator. Even without using the modulus operator, a number can be checked …
_________

*/
//Your code should go here:

