/*
####  Switch on the Gravity  ####

Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.


[Examples]

___
switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]

switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]
_____



[Notes]

Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed to the rigid blocks in Tetris.


[arrays] [logic] [loops] [physics] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In …
_________

*/
//Your code should go here:

