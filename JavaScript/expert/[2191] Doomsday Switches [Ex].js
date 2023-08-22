/*
####  Doomsday Switches  ####

Deep inside a secure mountain facility there exists a group of switches arranged in a horizontal row. The rightmost switch can be flipped on or off at any time. Any other switch can be toggled only if the switch to its immediate right is turned on and all other switches to the right are turned off.
All the switches are initially off. Improvise a function that accepts the number of switches, n, and returns the minimum number of switch toggles required to turn all the switches on.


[Examples]

___
switches(1) ➞ 1

switches(2) ➞ 2

switches(3) ➞ 5
// Minimal sequence for 3 switches:
// 000, 001, 011, 010, 110, 111

switches(4) ➞ 10
_____



[Notes]

N/A


[algorithms] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Recursion
https://en.wikipedia.org/wiki/Recursion
Recursion occurs when the definition of a concept or process depends on a simpler version of itself.[1] Recursion is used in a variety of disciplines ranging from lingu …
_________

*/
//Your code should go here:

