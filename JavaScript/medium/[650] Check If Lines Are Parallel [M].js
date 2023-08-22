/*
####  Check If Lines Are Parallel  ####

Given two lines, determine whether or not they are parallel.
Lines are represented by an array [a, b, c], which corresponds to the line ax+by=c.


[Examples]

___
linesAreParallel([1, 2, 3], [1, 2, 4]) ➞ true
// x+2y=3 and x+2y=4 are parallel.

linesAreParallel([2, 4, 1], [4, 2, 1]) ➞ false
// 2x+4y=1 and 4x+2y=1 are not parallel.

linesAreParallel([0, 1, 5], [0, 1, 5]) ➞ true
// Lines are parallel to themselves.
_____



[Notes]

___
*) Two lines are parallels if they have the same slope. If the slopes are different, the lines are not parallel.
*) All test cases use valid input (no lists of the wrong size, for example).
*) All coefficients will be integers (whole numbers).
___



[algebra] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Finding Parallel and Perpendicular Lines
https://www.mathsisfun.com/algebra/line-parallel-perpendicular.html
How do we know if they are really the same line? Check their y-intercepts (where they cross the y-axis) as well as their slope.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
Figure out if Two Lines Are Parallel
https://www.wikihow.com/Figure-out-if-Two-Lines-Are-Parallel#Using-the-Slope-Intercept-Formula
Parallel lines are two lines in a plane that will never intersect (meaning they will continue on forever without ever touching).
_________
_________
Point-Slope Equation of a Line
https://www.mathsisfun.com/algebra/line-equation-point-slope.html
The equation is useful when we know: one point on the line: (x1,y1) and the slope of the line: m, and want to find other points on the line. y − y1 = m(x − x1).
_________
_________
Convert from Standard to Slope Intecept Form
https://sciencing.com/how-to-find-slope-from-an-equation-13712210.html
A linear equation is one that relates the first power of two variables, x and y, and its graph is always a straight line. The standard form of such an equation is...
_________
_________
Parallel Lines
https://www.montereyinstitute.org/courses/Algebra1/COURSE_TEXT_RESOURCE/U04_L2_T1_text_final.html
Parallel lines are two or more lines that never intersect. Examples of parallel lines are all around us, in the two sides of this page and in the shelves of a bookcase. …
_________

*/
//Your code should go here:

