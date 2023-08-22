/*
####  Parity of the Smallest Integer  ####

Write a function that returns the smallest integer in an array with its corresponding index and its parity. Even though this challenge can be achieved easily with the modulo operator %, indexOf() and min() methods, these have been restricted to augment the challenge's level of difficulty.


[Output Structure]

___
{"@index " + index_of_smallest: smallest_integer, "parity": "odd|even"}
_____



[Examples]

___
bitwiseOneZero([107, 19, -18, -79, 36, 23, 97]) ➞ {"@index 3": -79, "parity": "odd"}

bitwiseOneZero([31, 7, 2, 13, 7, 9, 10, 13]) ➞ {"@index 2": 2, "parity": "even"}

bitwiseOneZero([3, 3, 3, 3, 3, 3]) ➞ {"@index 0": 3, "parity": "odd"}
_____



[Notes]

___
*) The set of limitations imposed on this challenge dictates the level of difficulty.
*) Another version of this challenge that deals with recursion can be found here.
___



[arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Parity Without %
https://stackoverflow.com/questions/44713703/check-odd-numbers-without-modulo-operator
A stackoverflow thread demonstrating how to determine parity using bitwise &.
_________

*/
//Your code should go here:

