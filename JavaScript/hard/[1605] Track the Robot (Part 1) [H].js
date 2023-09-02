/*
####  Track the Robot (Part 1)  ####

A robot has been given a list of movement instructions. Each instruction is either left, right, up or down, followed by a distance to move. The robot starts at [0, 0]. You want to calculate where the robot will end up and return its final position as an array.
To illustrate, if the robot is given the following instructions:
___
["right 10", "up 50", "left 30", "down 10"]
_____

It will end up 20 left and 40 up from where it started, so we return [-20, 40].


[Examples]

___
trackRobot(["right 10", "up 50", "left 30", "down 10"]) ➞ [-20, 40]

trackRobot([]) ➞ [0, 0]
// If there are no instructions, the robot doesn't move.

trackRobot(["right 100", "right 100", "up 500", "up 10000"]) ➞ [200, 10500]
_____



[Notes]

___
*) The only instructions given will be left, right, up or down.
*) The distance after the instruction is always a positive whole number.
___



[arrays] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________

*/
//Your code should go here:

