/*
####  Recursion: Extreme Indices and Values  ####

Write a function that extracts the upper and lower bounds of the elements in the array, value-wise, including its corresponding index, array-wise. Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for your to solve it recursively.


[Output Structure]

___
[{index: lower_bound}, {index: upper_bound}]
_____



[Examples]

___
extremes([107, 19, -18, -79, 36, 23, 97]) ➞ [{3: -79}, {0: 107}]

extremes([31, 7, 2, 13, 7, 9, 10, 13]) ➞ [{2: 2}, {0: 31}]

extremes([4, 4, 4, 4, 4, 4]) ➞ "No bounds!"
_____



[Notes]

___
*) Return "No bounds!" if the lower bound happens to be equal to its supposed upper bound (because logically and numerically, lower and upper bound values cannot be equal, thus, their respective names (see above example).
*) The use of Math's max() and min() functions are restricted.
*) You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
*) If you think recursion is fun, you can find a collection of those challenges here.
___



[arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
JavaScript Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
This tutorial shows you how to use recursion technique to develop a JavaScript recursive function, which is a function that calls itself.
_________

*/
//Your code should go here:

