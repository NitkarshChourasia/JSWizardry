/*
####  Parabolic Jumps  ####

When a bug jumps to a height y, its position can be plotted as a quadratic function with x as the time, and y as the vertical distance traveled. For example, for a bug that jumps 9 cm up and is back on the ground after 6 seconds, its trajectory can be plotted as:

Create a function that, given the max height of a vertical jump in cm and the current time in milliseconds, returns the current position of the bug rounded to two decimal places, and its direction ("up" or "down"). If the bug is already back on the ground, return 0 for the position and "None" for the direction.


[Examples]

___
bugJump(9, 1000) ➞ [5, "up"]

bugJump(9, 4000) ➞ [8, "down"]

bugJump(9, 5500) ➞ [2.75, "down"]

bugJump(9, 7000) ➞ [0, "None"]
_____



[Notes]

___
*) Time and position both start at 0.
*) You only need to translate the parabola (you don't need to scale it).
___



[math] [numbers] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

