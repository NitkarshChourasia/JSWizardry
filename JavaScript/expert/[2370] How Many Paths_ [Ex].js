/*
####  How Many Paths?  ####

This challenge is an extension of Helen Yu's Can You Exit the Maze? and Can You Enter the Cave?. Most of the test cases come from her challenge with a few new ones of my own.
Instead of finding a path through the maze, you must find all connected paths - paths where you can walk from one cell to another either by doing up or down or left or right. Not diagonally.
The maze is represented by a 2D matrix, where 0s represent walkable areas, and 1s represents walls.
Write a function that will return the length of the longest connected path (each cell only counts once even if you must re-enter to fully walk the path) and the number of connected paths as a tuple.


[Examples]

___
howManyPaths([
  [0, 0, 0, 1, 0, 0, 1, 1],
  [0, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 1]
]) ➞ [9, 4]

// The longest path is in the lower right and there are
// four paths, upper left with 8, upper right with 5,
// lower left with 1.
_____

___
howManyPaths([
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0]
]) ➞ [20, 1]
_____

___
howManyPaths([
  [0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0]
]) ➞ [8, 2]
_____



[Notes]

This is a variation of a problem where I had to find all groups of connected customers (owners of the same account) across a bank's customer database in preparation to split the bank and 'sell' off some of the customers/accounts.


[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Multidimensional Array
http://www.javascripttutorial.net/javascript-multidimensional-array/
JavaScript does not provide the multidimensional array natively. However, you can create a multidimensional array by defining an array of elements, where each element i …
_________

*/
//Your code should go here:

