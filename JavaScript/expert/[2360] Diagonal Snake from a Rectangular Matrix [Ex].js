/*
####  Diagonal Snake from a Rectangular Matrix  ####

The function is given a rectangular array of arrays of numbers. Make an array from these numbers in the order of connecting diagonals like a snake before the strike. Starting from the left-up corner:
___
*) First diagonal, going up: [0][0]
*) Second diagonal, going down: [0][1] -> [1][0]
*) Third diagonal, going up: [2][0] -> [1][1] -> [0][2]
*) etc, alternate between going up and going down
*) Last diagonal: [rows - 1][cols -1]
___



[Examples]

___
diagonalSnake([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ [1, 2, 4, 7, 5, 3, 6, 8, 9]

diagonalSnake([[3], [2]]) ➞ [3, 2]

diagonalSnake([[9]]) ➞ [9]

diagonalSnake([]) ➞ []

diagonalSnake([[9, 8, 7]]) ➞ [9, 8, 7]
_____



[Notes]

N/A


[algorithms] [arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

