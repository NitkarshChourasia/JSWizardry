/*
####  Straight Digital Numbers  ####

In this challenge, you have to establish if the digits of a given number form a straight arithmetic sequence (either increasing or decreasing). A straight sequence has an equal step between every pair of digits.
Given an integer n, implement a function that returns:
___
*) "Not Straight" if n is lower than 100 or if its digits are not an arithmetic sequence.
*) "Trivial Straight" if n has a single repeating digit.
*) An integer being the step of the sequence if the n digits are a straight arithmetic sequence.
___



[Examples]

___
straightDigital(123) ➞ 1
// 2 - 1 = 1 | 3 - 2 = 1

straightDigital(753) ➞ -2
// 5 - 7 = -2 | 3 - 5 = -2

straightDigital(666) ➞ "Trivial Straight"
// There's a single repeating digit (step = 0).

straightDigital(124) ➞ "Not Straight"
// 2 - 1 = 1 | 4 - 2 = 2
// A valid sequence has always the same step between its digits.

straightDigital(99) ➞ "Not Straight"
// The number is lower than 100.
_____



[Notes]

___
*) The step of the sequence can be either positive or negative (see example #2).
*) Trivia: there are infinite straight digital numbers, but only 96 of them are made of at least two different digits.
___



[math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

