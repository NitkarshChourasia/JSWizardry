/*
####  Right Rotation  ####

Create a function which takes 2 parameters:
___
*) A matrix mat with m rows and n columns, containing data of any type.
*) An integer parameter turns giving the number of clockwise 90 degree rotations by which to transform the matrix.
___

The function should return a new matrix with the elements rotated clockwise or counter-clockwise by the number of turns given.
For positive integers: 1 turn = 90° clockwise, 2 turns = 180° clockwise, 3 turns = 270° clockwise, 4 turns = 360° clockwise, etc.
For negative integers: -1 turn = 90° counter-clockwise, -2 turns = 180° counter-clockwise, -3 turns = 270° counter-clockwise, -4 turns = 360° counter-clockwise, etc.


[Examples]

___
rotateMatrix([
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9, 10, 11, 12]
]) ➞ [
  [ 9, 5, 1],
  [10, 6, 2],
  [11, 7, 3],
  [12, 8, 4]
]
# A clockwise rotation.
# Left to right columns become rows in bottom to top order.


rotateMatrix([["+", "-"], ["*", "/"]], -1) ➞ [["-", "/"], ["+", "*"]]
# A counter-clockwise rotation.
# Right to left columns become rows in top to bottom order.


rotateMatrix([[1, 2, 3], [4, 5, 6]], 4) ➞ [[1, 2, 3], [4, 5, 6]]
# A 360° turn returns all elements to their original positions.
_____



[Notes]

___
*) All given matrices (2-dimensional arrays) will have at least 1 row and at least 1 column.
*) Do not mutate the original matrix, the return value should be a new 2-dimensional array with values copied from the original array.
*) Do not import any libraries - the challenge is to come up with your own solution.
*) Make sure your solution is efficient enough to cope with a large number of turns
___



[algorithms] [arrays] [data_structures] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays...
_________

*/
//Your code should go here:

