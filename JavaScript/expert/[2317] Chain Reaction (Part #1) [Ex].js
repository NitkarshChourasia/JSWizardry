/*
####  Chain Reaction (Part #1)  ####

In this challenge you will be given a rectangular array representing a "map" with three types of spaces:
___
*) "+" bombs: When activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
*) "x" bombs: When activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
*) Empty spaces "0".
___

Consider the grid:
___
[
  ["+", "+", "0", "x", "x", "+", "0"],
  ["0", "+", "+", "x", "0", "+", "x"]
]
_____

If the top left "+" bomb explodes, the resulting chain reaction will blow up bombs in the order given by the numbers below:
___
[
  ["1", "2", "0", "x", "6", "8", "0"],
  ["0", "3", "4", "5", "0", "7", "8"]
]
_____

Note that there are two 8's since two of the bombs explode at the same time. Also, note that one of the "x" bombs in the top row does not explode.
Write a function that determines if the chain reaction started when the top left bomb explodes destroys all bombs or not.


[Examples]

___
allExplode([
  ["+", "+", "+", "+", "+", "+", "x"]
]) ➞ true

allExplode([
  ["+", "+", "+", "+", "+", "0", "x"]
]) ➞ false

allExplode([
  ["+", "+", "0", "x", "x", "+", "0"],
  ["0", "+", "+", "x", "0", "+", "x"]
]) ➞ false

allExplode([
  ["x", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "x"]
]) ➞ false

allExplode([
  ["x", "0", "x"],
  ["0", "x", "0"],
  ["x", "0", "x"]
]) ➞ true
_____



[Notes]

___
*) Both "+" and "x" bombs have an "explosion range" of 1.
*) Part #2 can be found here.
___



[arrays] [games] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________

*/
//Your code should go here:

