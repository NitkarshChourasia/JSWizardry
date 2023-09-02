/*
####  Block the Square in Tic Tac Toe  ####

Create a function that returns a number which can block the player from reaching 3 in a row in a game of Tic Tac Toe. The number given as an argument will correspond to a grid of Tic Tac Toe: topleft is 0, topright is 2, bottomleft is 6, and bottomright is 8.
___
*) Create a function that takes two numbers a, b and returns another number.
*) This number should be the final one in a line to block the player from winning.
___



[Examples]

___
blockPlayer(0, 3) ➞ 6

blockPlayer(0, 4) ➞ 8

blockPlayer(3, 5) ➞ 4
_____



[Notes]

The values given will always have two filled squares in a line.


[algorithms] [games] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

