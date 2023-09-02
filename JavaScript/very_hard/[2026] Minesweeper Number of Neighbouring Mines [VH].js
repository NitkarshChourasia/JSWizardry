/*
####  Minesweeper Number of Neighbouring Mines  ####

Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.


[Examples]

The input may look like this:
___
[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
_____

The 0 represents an empty space . The 1 represents a mine.
You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:
___
[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
_____



[Notes]

___
*) Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
*) A wikipedia page explaining how Minesweeper works is available in the Resources tab.
___



[arrays] [functional_programming] [games] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
_________
_________
Minesweeper (video game)
https://en.wikipedia.org/wiki/Minesweeper_(video_game)
Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________

*/
//Your code should go here:

