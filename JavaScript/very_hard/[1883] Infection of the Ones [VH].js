/*
####  Infection of the Ones  ####

Write a function that replaces every row and column that contains at least one 1 into a row/column that is filled entirely with 1s.


[Examples]

___
onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]) ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
]

onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
]

onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]) ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]
_____



[Notes]

___
*) You must mutate the original array.
*) Input matrices will have at least row and one column.
*) Bonus: Solve this without using any higher-order functions.
___



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

