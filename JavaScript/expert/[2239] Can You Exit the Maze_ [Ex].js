/*
####  Can You Exit the Maze?  ####

A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.
Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.


[Examples]

___
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
_____



[Notes]

___
*) In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
*) There can be dead ends in a maze - one exit path is sufficient.
___



[arrays] [functional_programming] [games] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
_________
Minimum Cost Path Problem
https://algorithms.tutorialhorizon.com/dynamic-programming-minimum-cost-path-problem/
Given a 2D-matrix where each cell has a cost to travel. You have to write an algorithm to find a path from left-top corner to bottom-right corner with minimum travel co …
_________

*/
//Your code should go here:

