/*
####  No Intersecting Ones  ####

A no-intersecting ones matrix is one where no two ones exist on the same row or column.
To illustrate:
___
[
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
]
_____

The array below is not a non-intersecting ones matrix:
___
[
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

// Column 2 has two 1s.
_____

Write a function that returns true if a 2D matrix is a no-intersecting ones matrix and false otherwise.


[Examples]

___
noIntersectingOnes([
  [0, 1],
  [1, 0]
]) ➞ true

noIntersectingOnes([
  [1, 1],
  [0, 0]
]) ➞ false

noIntersectingOnes([
  [0, 0, 0, 1],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ true
_____



[Notes]

N/A


[arrays] [higher_order_functions] [validation] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

