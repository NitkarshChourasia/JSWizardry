/*
####  Is It a Right-Angled Triangle?  ####

Find out if a right-angled triangle can be made given some facts about the shape.
___
*) Given varying information about a shape, create a function that returns true if the shape could be a right-angle triangle and false if not.
*) You will be given an array of numbers and a string stating whether the numbers are angles or sides.
*) The information may indicate more than one possible shape, but we just need to know if these details could be found in a right-angled triangle.
___



[Examples]

___
isRightAngle([30, 60], "angle") ➞ true
// A third angle could be 90

isRightAngle([20, 20, 20, 20], "angle") ➞ false
// More than 3 sides

isRightAngle([4, 5, 3], "side") ➞ true
// 3**2 + 4**2 = 5**2

isRightAngle([4, 5], "side") ➞ true
// Third side may be 3
_____



[Notes]

Check the Resources for more info on right-angle triangles.


[geometry] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Right Triangle
https://en.wikipedia.org/wiki/Right_triangle
A triangle in which one angle is a right angle (that is, a 90-degree angle). The relation between the sides and angles of a right triangle is the basis for trigonometry.
_________

*/
//Your code should go here:

