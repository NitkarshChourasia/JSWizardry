/*
####  Stalactites or Stalagmites?  ####

Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.
Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.


[Examples]

___
mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0]
]) ➞ "stalactites"

mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "stalagmites"

mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1]
]) ➞ "both"
_____



[Notes]

___
*) There won't be any examples where both stalactites and stalagmites meet (because those are called pillars).
*) There won't be any example of neither stalactites nor stalagmites.
*) In other words, if the first array has 1s, return "stalactites". If the last array has 1s, return "stalagmites". If both have them, return "both".
___



[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

