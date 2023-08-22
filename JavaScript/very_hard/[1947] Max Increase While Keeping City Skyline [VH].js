/*
####  Max Increase While Keeping City Skyline  ####

In a 2 dimensional array, each value represents the height of a building located there. You are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings).
At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance.
Create a function that updates the heights of the buildings to the maximum possible under conditions: keep the original vertical and horizontal skylines; keep the zero heights equal to zero.


[Examples]

___
[
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0]
]

// Skyline viewed from top or bottom: [9, 4, 8, 7]
// Skyline viewed from left or right: [8, 7, 9, 3]

[
  [8, 0, 8, 7],
  [7, 4, 7, 7],
  [9, 4, 8, 7],
  [0, 3, 3, 0]
]

// Grid after increasing the height of buildings
// without affecting skylines.
_____



[Notes]

Height 0 is considered to be a protected park and nothing should be built on top of it.


[arrays] [loops] [math] 



-------------------------------------------------------------------
[Resources]
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Max Increase To Keep City Skyline
https://www.youtube.com/watch?v=ZiICxf-xgPk
Coding interview questions done in javascript.
_________

*/
//Your code should go here:

