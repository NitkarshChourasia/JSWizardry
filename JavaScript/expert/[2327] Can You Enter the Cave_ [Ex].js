/*
####  Can You Enter the Cave?  ####

You are playing a video game. Your screen can be represented as a 2D array, where 0s represent walkeable areas and 1s represent unwalkeable areas. You are currently searching for the entrance to a cave that is located on the right side of the screen. Your character starts anywhere in the leftmost column.
Create a function that determines if you can enter the cave. You can only move left, right, up, or down (not allowed to move diagonally).
To illustrate:
___
[
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0]
]
_____

You found the entrance! Function should output true.
___
[
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0]
]
_____

Nope, keep looking. Function should output false.


[Examples]

___
canEnterCave([
  [0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0]
]) ➞ false

// You cannot walk diagonally!


canEnterCave([
  [0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 0]
]) ➞ true


canEnterCave([
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 1, 1, 0]
]) ➞ false
_____



[Notes]

___
*) You are seeing the game screen from a birds-eye view.
*) Another way of thinking about it: You can enter the cave if you can move from the left side of the screen to the right side by only walking up, down or right.
*) The entrance is not necessarily the first square, you may have to search for it in the left hand column.
___



[arrays] [functional_programming] [games] 



-------------------------------------------------------------------
[Resources]
_________
True/False
https://processing.org/examples/truefalse.html
A Boolean variable has only two possible values: true or false. It is common to use Booleans with control statements to determine the flow of a program. In this example …
_________

*/
//Your code should go here:

