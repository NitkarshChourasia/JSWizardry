/*
####  Do Classes Dream of Electric Ship?  ####

In this challenge, you have to build a Class that will store and manipulate the data of a simplified clone of Battleship, the popular strategy game.
The game is played on a square board, 5x5 sized. The rows of the grid are identified by uppercase letters from A to E (from top to bottom), and the columns are identified by numbers from 1 to 5 (from left to right).


[Rules of the Game]

___
*) There are two types of ship: the Patrol and the Cruiser. The Patrol occupies a single cell, the Cruiser occupies two cells, horizontally or vertically.
*) Three Patrols and three Cruisers will be placed randomly in the grid, without ships adjacent in rows and columns (see the notes below).
*) The user calls six different cells, trying to guess if there's a Patrol or a Cruiser in it.
*) Hits and misses are recorded on the board. For every hit Patrol or Cruiser, a point is gained, and if a Cruiser is sunk, two additional points are gained.
___



[Class "Battleship"]

Each instance in the Tests tab will be declared with two variable parameters so the constructor has to be initialized with:
___
*) scheme is the link to an array containing 9 strings being the coordinates indicating where the ships are placed in the grid.
*) input is the link to an array containing 6 strings being the guesses made by the user.
___



[What do you have to implement?]

The Tests will verify the existence and the correctness of the data through an instance that will use the Battleship Class created by you, calling its four different methods:
___
*) board() will return the final state of the board, based on the placement of the ship and the results of the user guesses, as a matrix of 5x5 size. To represent the graphic of the game, you will use four different characters:

○ = a blank space on the board.
● = a space occupied by a ship.
☼ = a miss (wrong guess).
☀ = a hit (a correct guess).
*) hits() will return the total number of hits made by the user (correct guesses), either on Patrols or on Cruisers.
*) sunk() will return the total number of sunk Cruisers (two adjacent guesses, in horizontal or vertical).
*) points() will return the total number of points gained by the user (1 for every hit, 2 for every sunk Cruiser).
___



[Examples]

___
// scheme =
["A1", "C1", "B2",
"B3", "D2", "E2",
"E4", "E5", "A5"]

// input = ["A1", "B2", "C3", "D4", "E5", "E4"]

battleship.board() ➞ [
  [☀, ○, ○, ○, ●],
  [○, ☀, ●, ○, ○],
  [●, ○, ☼, ○, ○],
  [○, ●, ○, ☼, ○],
  [○, ●, ○, ☀, ☀]
]

battleship.hits() ➞ 4
// Total hits.

battleship.sunk() ➞ 1
// Sunk Cruisers, not Patrols.

battleship.points() ➞ 6
// Hits + additional points given by Sunk Cruisers.
_____



[Notes]

___
*) If two cruisers are in the same row or the same column, there will be a blank cell between them, so that it will be possible to treat them as different ships.
*) The board is not given, you have to build it.
*) In the Examples above, the symbols of the board are not between quotation marks for readability, but they are strings. The set of characters used for the challenge is already in the Code tab.
___



[arrays] [classes] [data_structures] [games] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaS …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

