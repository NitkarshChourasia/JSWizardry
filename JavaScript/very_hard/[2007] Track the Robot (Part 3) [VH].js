/*
####  Track the Robot (Part 3)  ####

A robot moves around a 2D grid. At the start, it is at [0, 0], facing east. It is controlled by a sequence of instructions:
___
*) . means take one step forwards in the current direction.
*) < means turn 90 degrees anticlockwise.
*) > means turn 90 degrees clockwise.
___

Your job is to process the instructions and return the final position of the robot.


[Example]

For example, if the robot is given the sequence of instructions ..<.<., then:
___
*) Step 1: . It still faces east, and is at [1, 0].
*) Step 2: . It still faces east, and is at [2, 0].
*) Step 3: < It now faces north, and is still at [2, 0].
*) Step 4: . It still faces north, and is at [2, 1].
*) Step 5: < It now faces west, and is still at [2, 1].
*) Step 6: . It still faces west, and is now at [1, 1].
___

So, trackRobot("..<.<.") returns [1, 1].


[Notes]

___
*) The instruction strings will only contain the three valid characters ., < or >.
*) You will always be passed a string (but the string might be empty).
___



[algorithms] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
_________

*/
//Your code should go here:

