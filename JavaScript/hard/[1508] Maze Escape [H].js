/*
####  Maze Escape  ####

Given a two-dimensional array of maze and an array of directions. Your task is to follow the given directions.
___
*) If you can reach the endpoint before all your moves have gone, return "Finish".
*) If you hit any walls or go outside the maze border, return "Dead".
*) If you find yourself still in the maze after using all the moves, return "Lost".
___

The maze array will look like this:
___
maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1]
]

// 0 = Safe place to walk
// 1 = Wall
// 2 = Start Point
// 3 = Finish Point
// N = North, E = East, W = West and S = South
_____

See the below examples for a better understanding:


[Examples]

___
exitMaze(maze, ["N", "E", "E"]) ➞ "Dead"
// Hitting the wall should return "Dead".

exitMaze(maze, ["N", "N", "N", "E"]) ➞ "Lost"
// Couldn't reach the finish point.

exitMaze(maze, ["N", "W", "W", "W", "N", "N", "N", "N", "W", "W", "S", "S", "S", "S", "W", "W", "N", "N", "N", "N", "N", "N", "N"]) ➞ "Finish"
_____



[Notes]

N/A


[arrays] [games] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Compass
https://www.mathsisfun.com/measure/compass-north-south-east-west.html
A Compass Bearing tells us direction. The 4 main directions are North, South, East and West (going clockwise they are NESW).
_________

*/
//Your code should go here:

