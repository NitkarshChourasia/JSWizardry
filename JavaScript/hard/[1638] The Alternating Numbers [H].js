/*
####  The Alternating Numbers  ####

In this challenge, you have to establish if an integer num is Alternating. To be Alternating, num must be positive and every digit in its sequence must have a different parity than its next and its previous digit.
Given an integer num, implement a function that returns true is num is an Alternating number, or false if it's not.


[Examples]

___
isAlternating(123) ➞ true
// 1 is odd, 2 is even, 3 is odd

isAlternating(67) ➞ true
// 6 is even, 7 is odd

isAlternating(2380) ➞ false
// 2 is even, 3 is odd, 8 is even, 0 is even

isAlternating(75) ➞ false
// 7 is odd, 5 is odd
_____



[Notes]

___
*) A single-digit number is trivially considered Alternating, given the absence of neighboring digits.
*) The first digit has to be compared only to its next neighbor, and the last digit has to be compared only to its previous neighbor.
*) Every non-positive integer must be treated as false.
___



[numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

