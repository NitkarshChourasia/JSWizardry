/*
####  Centroid of a Triangle  ####

If you have a triangular shape cut from a piece of cardboard, the centroid of the triangle would be the spot where it balances on the point of a pencil. The location of the centroid is easy to calculate if you know the x, y coordinates of the vertices:
___
*) The x coordinate of the centroid is at (x1 + x2 + x3) / 3
*) The y coordinate of the centroid is at (y1 + y2 + y3) / 3
___

x1, y1, x2, y2, x3, y3 are the coordinates of the three vertices.
Create a function that calculates the position of the centroid given the coordinates of the vertices. Round the answers to two decimal places. If the three points given do not form a triangle, return false.


[Examples]

___
centroid(0, 0, 3, 0, 3, 3) ➞ [2.0, 1.0]

centroid(2, 2, 8, -2, 0, -3) ➞ [3.33, -1.0]

centroid(1, 1, 2, 2, 3, 3) ➞ false
_____



[Notes]

___
*) The arguments are given in the order shown above: x1, y1, x2, y2, x3, y3.
*) If the three points do not form a triangle, they must lie in a straight line.
___



[algebra] [math] 



-------------------------------------------------------------------
[Resources]
_________
Centroid of a Triangle
https://brilliant.org/wiki/triangles-centroid/
Is the intersection of the three medians, or the "average" of the three vertices. It has several important properties and relations with other parts of the triangle, in …
_________
_________
Collinear
https://mathworld.wolfram.com/Collinear.html
Three or more points P_1, P_2, P_3, ..., are said to be collinear if they lie on a single straight line L. A line on which points lie, especially if it is related to a …
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#Examples
Formats a number using fixed-point notation.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Check Whether Triangle Is Valid or Not if Three Points Are Given
https://www.geeksforgeeks.org/check-whether-triangle-is-valid-or-not-if-three-points-are-given/#:~:text=Approach%3A%20The%20key%20observation%20in,is%20not%20equal%20to%20zero.
Given coordinates of three points in a plane P1, P2 and P3, the task is to check if the three points form a triangle or not.
_________
_________
What is the formula for finding collinear points?
https://www.nextgurukul.in/questions-answers-forum/question/academic/what-is-the-formula-for-finding-collinear-points/89861
What is the formula for finding collinear points?
_________

*/
//Your code should go here:

