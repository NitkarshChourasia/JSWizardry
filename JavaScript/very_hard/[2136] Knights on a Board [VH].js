/*
####  Knights on a Board  ####

Write a function that returns true if the knights are placed on a chessboard such that no knight can capture another knight. Here, 0s represent empty squares and 1s represent knights.


[Examples]

___
cannotCapture([
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0]
]) ➞ true

cannotCapture([
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 1]
]) ➞ false
_____



[Notes]

___
*) Knights can be present in any of the 64 squares.
*) No other pieces except knights exist.
___



[arrays] [games] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Possible Moves of Knight
http://www.chesscorner.com/tutorial/basic/knight/knight.htm
The Knight moves in an L shape in any direction. We can say that it either moves two squares sideways and then one square up or down, or two squares up or down, and the …
_________
_________
Nested Arrays in JavaScript
https://www.elated.com/nested-arrays-in-javascript/
JavaScript allows you to nest arrays inside other arrays. This tutorial explains how to nest arrays in JavaScript, and how to work with nested arrays.
_________

*/
//Your code should go here:

