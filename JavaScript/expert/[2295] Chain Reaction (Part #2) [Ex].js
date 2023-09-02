/*
####  Chain Reaction (Part #2)  ####

This is a sequel to Chain Reaction (Part #1), with the same setup, but a different flavor.
As in the previous part, you will be given a rectangular array representing a "map" with three types of spaces:
___
*) "+" bombs: when activated, their explosion activates any bombs directly above, below, left, or right of the "+" bomb.
*) "x" bombs: when activated, their explosion activates any bombs placed in any of the four diagonal directions next to the "x" bomb.
*) Empty spaces "0".
___

The goal is simple: given a map, return the minimum number of bombs that need to be set off for all bombs to be destroyed by the chain reaction.
Let's look at some examples:
___
[
  ["+", "+", "+", "0", "+", "+", "+"],
  ["+", "+", "+", "0", "0", "+", "+"]
]
_____

For the map above, the answer is 2; to explode all bombs you just need to set off one "+" bomb in the right cluster and one in the left cluster.
___
[
  ["x", "0", "x"],
  ["x", "x", "x"]
]
_____

For the map above, the answer is 3; clearly setting off the three bottom "x" bombs is enough, and no less than three bombs suffice.
___
[
  ["x", "x", "x", "0", "x"],
  ["x", "x", "x", "x", "x"],
  ["x", "x", "x", "0", "x"]
]
_____

For the map above, the answer is 3; setting off the three rightmost bombs in the middle row will do the trick.


[Examples]

___
minBombsNeeded([
  ["+", "+", "+", "0", "+", "+", "+"],
  ["+", "+", "+", "0", "0", "+", "+"]
]) ➞ 2

minBombsNeeded([
  ["x", "0", "x"],
  ["x", "x", "x"]
]) ➞ 3

minBombsNeeded([
  ["x", "x", "x", "0", "x"],
  ["x", "x", "x", "x", "x"],
  ["x", "x", "x", "0", "x"]
]) ➞ 3
_____



[Notes]

___
*) Note that both "+" and "x" bombs have an "explosion range" of 1.
*) To limit the difficulty, in this challenge each map will have only "+" or only "x" bombs. The more challenging case of maps with both "+" and "x" bombs will be part 3!
*) Figuring out what to do is half the fun, but if you'd prefer to just handle the coding, a hint on to how to attack this challenge can be found in the comments.
___



[arrays] [games] 



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

