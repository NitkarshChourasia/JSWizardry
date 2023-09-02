/*
####  Can You Make the Numbers?  ####

You are given an array representing the number of 0s, 1s, 2s, ..., 9s you have. The function will look like:
___
can_build([#0s, #1s, #2s, ..., #9s], [num1, num2, ...])
_____

Write a function that returns true if you can build the following numbers using only the digits you have.


[Examples]

___
canBuild([0, 1, 2, 2, 3, 0, 0, 0, 1, 1], [123, 444, 92]) ➞ true

// You have: one 1, two 2s, two 3s, three 4s, one 8 and one 9
// Using only these digits, you can build 123, 444, and 92

canBuild([10, 2, 3, 8, 5, 8, 5, 5, 3, 1], [11, 2, 22, 49, 444, 998, 87, 44]) ➞ false

canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], []) ➞ true

canBuild([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3]) ➞ false
_____



[Notes]

N/A


[arrays] [higher_order_functions] [loops] 



-------------------------------------------------------------------
[Resources]
_________
How to find the number of times a value occurs in an Array in JavaScript?
https://stackoverflow.com/questions/37365512/count-the-number-of-times-a-same-value-appears-in-a-javascript-array
I would like to know if there is a native javascript code that does the same thing as this...
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

