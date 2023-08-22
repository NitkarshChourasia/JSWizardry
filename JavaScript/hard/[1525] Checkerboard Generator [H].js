/*
####  Checkerboard Generator  ####

Create a checker board generator, which takes as inputs n and 2 elements to generate an n x n checkerboard with those two elements as alternating squares.


[Examples]

___
checkerBoard(2, 7, 6) ➞ [
  [7, 6],
  [6, 7]
]

checkerBoard(3, "A", "B") ➞ [
  ["A", "B", "A"],
  ["B", "A", "B"],
  ["A", "B", "A"]
]

checkerBoard(4, "c", "d") ➞ [
  ["c", "d", "c", "d"],
  ["d", "c", "d", "c"],
  ["c", "d", "c", "d"],
  ["d", "c", "d", "c"]
]

checkerBoard(4, "c", "c") ➞ "invalid"
_____



[Notes]

___
*) Both elements can be either strings or integers.
*) The first element should be on the upper left corner of the checker board. e.g. "c", not "d" should be element [0][0] for example 3.
*) Return "invalid" if both inputs are identical (see example 4).
___



[arrays] [games] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.fill()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
_________

*/
//Your code should go here:

