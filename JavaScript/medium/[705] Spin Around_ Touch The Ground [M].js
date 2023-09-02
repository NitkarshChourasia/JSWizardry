/*
####  Spin Around, Touch The Ground  ####

Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.


[Examples]

___
spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

spinAround(["left", "right", "left", "right"]) ➞ 0

spinAround(["right", "right", "right", "right", "right", "right", "right", "right"]) ➞ 2

spinAround(["left", "left", "left", "left"]) ➞ 1
_____



[Notes]

___
*) Return a positive number.
*) All tests will only include the words "right" and "left".
___



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________

*/
//Your code should go here:

