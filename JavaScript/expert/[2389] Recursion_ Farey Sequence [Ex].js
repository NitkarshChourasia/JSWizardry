/*
####  Recursion: Farey Sequence  ####

The Farey sequence of order n is the set of all fractions with a denominator between 1 and n (reduced to its lowest terms and ordered ascendingly). Given an n, write a function that returns the Farey sequence as an array with a string representation of each fraction of the form "numerator/denominator".


[Examples]

___
farey(1) ➞ ["0/1", "1/1"]

farey(5) ➞ ["0/1", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "1/1"]

farey(7) ➞ ["0/1", "1/7", "1/6", "1/5", "1/4", "2/7", "1/3", "2/5", "3/7", "1/2", "4/7", "3/5", "2/3", "5/7", "3/4", "4/5", "5/6", "6/7", "1/1"]
_____



[Notes]

___
*) The sequence should always start with "0/1" and end with "1/1".
*) It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
*) You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or hasn't fully understood the concept behind it before taking up this challenge or unless otherwise.
*) There will be no exceptions to handle, all inputs are positive integers.
*) A recursive approach is prone to Uncaught RangeError or exceededing the maximum call size of the stack.
*) Optional: Try to solve this with the least lines of code.
*) If you think recursion is fun, you can find a collection of those challenges here.
___



[arrays] [logic] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
Is a function that calls itself until it doesn’t. And this technique is called recursion. Suppose that you have a function called recurse(). The recurse() is a recursi …
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________
_________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Is a global object that is used in the construction of arrays; which are high-level, list-like objects.
_________

*/
//Your code should go here:

