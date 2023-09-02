/*
####  Area of an Array  ####

Ben draws shape(s) with 1s in a array of arrays. Ben wants to calculate the area of the shape(s) he has drawn. However, his shapes are not always a valid shape. A valid shape should be enclosed.
If the shape is not enclosed (invalid), it would have an area of 0. If the shape is just a dot (a single '1' is enclosed on a point), it would be an infinitely small point with 0 area. Assume there will not be shapes inside of shapes.
*More about enclosed and closed shapes in the Notes below.


[Enclosed Shape]

___
area([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
]) ➞ 3


area([
  [0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0]
]) ➞ 6

// Diagonals can be traced as well.
_____



[Invalid Shape(s)]

___
area([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]) ➞ 0


area([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
]) ➞ 0


area([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0]
]) ➞ 0

// Doesn't really matter that there are more than
// one invalid shapes; they all have zero area anyway.
_____



[More Than One Valid Shape]

___
area([
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1]
]) ➞ 6

// Two shapes.


area([
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ 10

// Three shapes, diagonals can be traced.
_____



[A Mix of Enclosed and Invalid Shape(s)]

___
area([
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 1, 1]
]) ➞ 2

// Invalid shapes count as zero area.
_____



[Lines Protruding from a Valid Shape]

___
area([
  [1, 0, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0],
  [1, 0, 0, 1, 0, 0, 1]
]) ➞ 1

// We can see there is an enclosed shape in the center.
_____

You could think about this in two ways:
___
*) The protrusions are not part of the perimeter of the shape, neither are they enclosed, so they are Invalid shapes and have an area of 0.
*) The protrusions are part of the shape, but since they are single lines, hence they have an area of 0.
___



[Joint Shapes]

___
area([
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ 12

// Even though they share parts of their parameters,
// they are still enclosed as you can trace each shape
// without any interruptions.
_____



[Shapes Joint by Protrusion/Line]

___
area([
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1]
]) ➞ 2

// The joint doesn't really affect the validity of the
// two shapes on the left and right side, neither does
// it have any area.
_____



[Notes]

If a shape is enclosed, you can (imaging) taking a pencil and tracing it all the way around back to where you started, without running into any breaks. If there is a break in the shape, or you did not manage to get back to where you started without backtracking, that means it is not enclosed. For this test, you can trace across diagonal 1s, which means they are connected.


[algorithms] [arrays] [numbers] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

