/*
####  Simple Minesweeper  ####

Given a 2D array of mines, replace the question mark with the number of mines that immediately surround it. This includes the diagonals, meaning it is possible for it to be surrounded by 8 mines maximum.
The key is as follows:
___
*) An empty space: "-"
*) A mine: "#"
*) Number showing number of mines surrounding it: "?"
___



[Examples]

___
minesweeper([
  ["-", "#", "-"],
  ["-", "?", "-"],
  ["-", "-", "-"]
]) ➞ [
  ["-", "#", "-"],
  ["-", "1", "-"],
  ["-", "-", "-"]
]

minesweeper([
  ["-", "#", "-"],
  ["#", "-", "?"],
  ["#", "#", "-"]
]) ➞ [
  ["-", "#", "-"],
  ["#", "-", "2"],
  ["#", "#", "-"]
]

minesweeper([
  ["-", "#", "#"],
  ["?", "#", ""],
  ["#", "?", "-"]
]) ➞ [
  ["-", "#", "#"],
  ["3", "#", ""],
  ["#", "2", "-"]
]

minesweeper([
  ["-", "-", "#"],
  ["?", "-", "-"],
  ["-", "-", "-"]
]) ➞ [
  ["-", "-", "#"],
  ["0", "-", "-"],
  ["-", "-", "-"]
]
_____



[Notes]

___
*) You will only be given 3x3 grids.
*) The question mark is not limited to the centre (there may be multiple question marks).
___



[arrays] [games] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

