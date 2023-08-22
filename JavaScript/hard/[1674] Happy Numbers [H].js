/*
####  Happy Numbers  ####

You are given an array of 0s and 1s, like the one below:
___
[0, 1, 0, 0, 0, 1, 1, 1, 0, 1]

// The first element, a 0, and the last element, a 1 are both unhappy.
// The second element, a 1 is unhappy.
// The second-to-last element, a 0 is unhappy.
// All other numbers in this array are happy.
_____

A 1 is unhappy if the digit to its left and the digit to its right are both 0s. A 0 is unhappy if the digit to its left and the digit to its right are both 1s. If a number has only one neighbor, it is unhappy if its only neighbor is different. Otherwise, a number is happy.
Write a function that takes in an array of 0s and 1s and outputs the portion of numbers which are happy. The total portion of numbers which are happy can be represented as:
___
portion of happy numbers = (happy 0s + happy 1s) / total numbers
_____

In the example above, 0.6 is the number of happy numbers.


[Examples]

___
portionHappy([0, 1, 0, 1, 0]) ➞ 0

portionHappy([0, 1, 1, 0]) ➞ 0.5

portionHappy([0, 0, 0, 1, 1]) ➞ 1

portionHappy([1, 0, 0, 1, 1]) ➞ 0.8
_____



[Notes]

___
*) Remember: a 0 border number is unhappy if its only neighbor is a 1 and vice versa.
*) An array will contain at least two elements.
___



[arrays] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
isNaN()
https://www.w3schools.com/jsref/jsref_isNaN.asp
Determines whether a value is an illegal number (Not-a-Number).
_________

*/
//Your code should go here:

