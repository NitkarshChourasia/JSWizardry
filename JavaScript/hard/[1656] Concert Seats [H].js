/*
####  Concert Seats  ####

Create a function that determines whether each seat can "see" the front-stage. A number can "see" the front-stage if it is strictly greater than the number before it.
Everyone can see the front-stage in the example below:
___
// FRONT STAGE
[[1, 2, 3, 2, 1, 1],
[2, 4, 4, 3, 2, 2],
[5, 5, 5, 5, 4, 4],
[6, 6, 7, 6, 5, 5]]

// Starting from the left, the 6 > 5 > 2 > 1, so all numbers can see.
// 6 > 5 > 4 > 2 - so all numbers can see, etc.
_____

Not everyone can see the front-stage in the example below:
___
// FRONT STAGE
[[1, 2, 3, 2, 1, 1], 
[2, 4, 4, 3, 2, 2], 
[5, 5, 5, 10, 4, 4], 
[6, 6, 7, 6, 5, 5]]

// The 10 is directly in front of the 6 and blocking its view.
_____

The function should return true if every number can see the front-stage, and false if even a single number cannot.


[Examples]

___
canSeeStage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) ➞ true

canSeeStage([
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 2]
]) ➞ true

canSeeStage([
  [2, 0, 0], 
  [1, 1, 1], 
  [2, 2, 2]
]) ➞ false

canSeeStage([
  [1, 0, 0],
  [1, 1, 1],
  [2, 2, 2]
]) ➞ false

// Number must be strictly smaller than
// the number directly behind it.
_____



[Notes]

___
*) Numbers must be strictly greater than the number in front of it.
*) All numbers within the arrays will be whole numbers greater than or equal to zero.
___



[arrays] [loops] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
For Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Nested Loops
https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/loops-AXTrhsNFlqOT/other-loops-TGMULWNaNwKK/nested-loops-KmSLuCTELJOD
A composition of loops is called a nested loop. The most common type of nested loops will be one loop inside another. The first loop is usually called the outer loop wh …
_________

*/
//Your code should go here:

