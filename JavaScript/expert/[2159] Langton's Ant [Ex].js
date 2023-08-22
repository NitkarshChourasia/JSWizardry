/*
####  Langton's Ant  ####

Langton's ant is a two-dimensional Turing machine invented in the late 1980s. The ant starts out on a grid of black and white cells and follows a simple set of rules that has complex emergent behavior.

The ant can travel in any of the four cardinal directions on each step. The ant moves according to the following rules:
___
*) At a white square (1), turn 90° right, flip the color of the square, and move forward one unit.
*) At a black square (0), turn 90° left, flip the color of the square, and move forward one unit.
*) The grid has no limits and therefore if the ant moves outside the borders, the grid should be expanded with 0s, respectively maintaining the rectangle shape.
___

Create a function Langton's Ant with the following parameters:
___
grid - a two-dimensional array of 1s and 0s
// representing white and black cells respectively

column - horizontal position of the ant

row - ant's vertical position

n - number of iterations

direction - ant's current direction
// 0 - north, 1 - east, 2 - south, 3 - west
// default value will be 0
_____

... and returns the state of the grid after n iterations.


[Examples]

___
langtons_ant([[1]], 0, 0, 1, 0) ➞ [[0, 0]]
// Initially facing north (0), at the first iteration the ant turns
// right because it stands on a white square, 1. After that, it flips
// the square and moves forward.

langtons_ant([[0]], 0, 0, 1, 0) ➞ [[0, 1]]

langtons_ant([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 2, 2, 10, 1) ➞ [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 1], [0, 0, 0, 1]]
_____



[Notes]

N/A


[algorithms] [arrays] [games] 



-------------------------------------------------------------------
[Resources]
_________
Langton's Ant
https://en.wikipedia.org/wiki/Langton%27s_ant
Is a two-dimensional universal Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a squa …
_________

*/
//Your code should go here:

