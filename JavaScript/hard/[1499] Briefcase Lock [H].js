/*
####  Briefcase Lock  ####

A briefcase has a 4-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards.
Create a function that returns the smallest number of turns it takes to transform the lock from the current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.
To illustrate:
___
*) current-lock: 4089
*) target-lock: 5672
___

What is the minimum number of turns it takes to transform 4089 to 5672?
___
4 ➞ 5
4 ➞ 5  // Forward Turns: 1 <- Min
4 ➞ 3 ➞ 2 ➞ 1 ➞ 0 ➞ 9 ➞ 8 ➞ 7 ➞ 6 ➞ 5  // Backward Turns: 9

0 ➞ 6
0 ➞ 1 ➞ 2 ➞ 3 ➞ 4 ➞ 5 ➞ 6  // Forward Turns: 6
0 ➞ 9 ➞ 8 ➞ 7 ➞ 6  // Backward Turns: 4  <- Min

8 ➞ 7
8 ➞ 9 ➞ 0 ➞ 1 ➞ 2 ➞ 3 ➞ 4 ➞ 5 ➞ 6 ➞ 7  // Forward Turns: 9
8 ➞ 7  // Backward Turns: 1  <- Min

9 ➞ 2
9 ➞ 0 ➞ 1 ➞ 2  // Forward Turns: 3  <- Min
9 ➞ 8 ➞ 7 ➞ 6 ➞ 5 ➞ 4 ➞ 3 ➞ 2  // Backward Turns: 7
_____

It takes 1 + 4 + 1 + 3 = 9 minimum turns to change the lock from 4089 to 5672.


[Examples]

___
minTurns("4089", "5672") ➞ 9

minTurns("1111", "1100") ➞ 2

minTurns("2391", "4984") ➞ 10
_____



[Notes]

___
*) Both locks are in string format.
*) A 9 rolls forward to 0, and a 0 rolls backwards to a 9.
___



[arrays] [higher_order_functions] 



-------------------------------------------------------------------
[Resources]
_________
String​.prototype​.split()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
_________
_________
Math.abs()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________
_________
Minimum Rotations to Unlock a Circular Lock
https://www.geeksforgeeks.org/minimum-rotations-unlock-circular-lock/
You are given a lock which is made up of n-different circular rings and each ring has 0-9 digit printed serially on it. Initially all n-rings together show a n-digit in …
_________
_________
Number.parseInt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
Parses a string argument and returns an integer of the specified radix or base.
_________

*/
//Your code should go here:

