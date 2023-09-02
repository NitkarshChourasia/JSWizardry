/*
####  Gold Distribution  ####

A group of pirates each have a distribution of gold coins, which can be represented as an array:
___
[3, 9, 4, 5, 5]
// Pirate 1 has 3 gold, Pirate 2 has 9 gold, etc.
_____

The difference between each pirate's share of gold and that of the richest pirate is represented as:
___
[6, 0, 5, 4, 4]
// Since 6 = 9 - 3, 0 = 9 - 9, 4 = 9 - 5, etc.
_____

Pirates have a keen sense of fairness, and a pirate will kill the others if he deems his share to be too little. Each pirate has a unique inequality threshold - the maximum difference he is willing to tolerate before he kills his comrades.
Using the above gold distribution:
___
[5, 0, 5, 5, 5]
// Pirates killed, since 5 < 6.
// 5 is Pirate 1's inequality distribution and 6 is his gold difference.

[7, 0, 5, 5, 5]
// Pirate 1 is satisfied, since 7 > 6.
// All other pirates are satisfied as well.
_____

Given a distribution of coins and an array of inequality thresholds, create a function that returns true if any pirates are killed, or false otherwise.


[Examples]

___
piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5]) ➞ false

piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]) ➞ true

piratesKilled([3, 3, 10], [7, 7, 0]) ➞ false

piratesKilled([3, 3, 10], [6, 6, 0]) ➞ true
_____



[Notes]

___
*) A pirate kills if the difference in his share of gold from the richest pirate is strictly greater than his inequality threshold.
*) Gold and inequality distribution arrays are both ordered the same. (e.g. Pirate 1 is index 0 for both arrays, Pirate 2 is index 1 for both arrays, etc).
___



[arrays] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
JavaScript Array Iteration Methods
https://www.w3schools.com/js/js_array_iteration.asp
Array iteration methods operate on every array item.
_________
_________
Math Object
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
Math is a built-in object that has properties and methods for mathematical constants and functions. Not a function object.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

