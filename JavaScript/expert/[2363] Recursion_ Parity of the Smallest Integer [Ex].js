/*
####  Recursion: Parity of the Smallest Integer  ####

Write a function that returns the smallest integer in an array with its corresponding index and its parity. Although these tasks can be equivocally achievable with the use of some built-in and Array functions, the purpose and intent of this challenge is for you to solve it recursively.


[Output Structure]

___
{"@index " + index_of_smallest: smallest_integer, "parity": "odd|even"}
_____



[Examples]

___
bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79, "parity": "odd"}

bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2, "parity": "even"}

bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}
_____



[Notes]

___
*) The use of indexOf() and min() are restricted.
*) You can read more about recursion (see Resources tab) if you aren't familiar with it or haven't fully understood the concept before taking up this challenge.
*) If you think recursion is fun, you can find a collection of those challenges here.
*) Another version of this challenge which is non-recursive can be found here.
___



[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
The important part is happening on line 4: return x * factorial(x — 1);. As you can see, the function is actually calling itself again ( factorial(x-1) ), but with a pa …
_________

*/
//Your code should go here:

