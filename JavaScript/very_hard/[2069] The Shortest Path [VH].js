/*
####  The Shortest Path  ####

Given a rectangular grid of m by n spaces, signaled by 0s, and a number of points, signaled by 1, 2, 3..., return the number of moves for the shortest path that starts at 1 and goes over all the other points in ascending order.


[Examples]

___
shortestPath([
  "001",
  "002",
  "003"
]) ➞ 2

shortestPath([
  "00000",
  "01006",
  "02000",
  "30050",
  "00004"
]) ➞ 13

shortestPath([
  "00020000",
  "01000000"
]) ➞ 3
_____



[Notes]

___
*) Only horizontal and vertical movements are allowed.
*) All movements from one place to an adjacent one count as 1 regardless of direction.
*) The points range from 1 to at most 9 with no repeating or missing digits.
___



[arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
_________

*/
//Your code should go here:

