/*
####  Recursion: Fibonacci String  ####

A Fibonacci string is a precedence of the Fibonacci series. It works with any two characters of the English alphabet (as opposed to the numbers 0 and 1 in the Fibonacci series) as the initial items and concatenates them together as it progresses similarly to that of the Fibonacci series. See examples for more details.


[Examples]

___
fibStr(3, ["j", "h"]) ➞ "j, h, hj"

fibStr(5, ["e", "a"]) ➞ "e, a, ae, aea, aeaae"

fibStr(6, ["n", "k"]) ➞ "n, k, kn, knk, knkkn, knkknknk"
_____



[Notes]

___
*) All values for n will be at least 2.
*) It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
*) You can read more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge or unless otherwise.
*) A recursive approach is prone to Uncaught RangeError or exceeding the maximum call size of the stack, deal with it accordingly and appropriately.
*) An iterative version of this challenge can be found via this link.
*) A collection of challenges in recursion can be found via this link.
___



[recursion] [strings] 



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
Is a function that calls itself until it doesn’t. And this technique is called recursion. Suppose that you have a function called recurse(). The recurse() is a recursi …
_________

*/
//Your code should go here:

