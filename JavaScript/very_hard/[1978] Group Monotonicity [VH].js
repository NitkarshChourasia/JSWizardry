/*
####  Group Monotonicity  ####

Create a function which returns the indices where the monotonicity of a 1-D array changes. If there are none, return an empty array. A monotonic array is one that is either non-increasing or non-decreasing.


[Examples]

___
groupMonotonic([0, 1]) ➞ []

groupMonotonic([0, 2, 1]) ➞ [1]

groupMonotonic([0, 1, 1, 0]) ➞ [2]
_____



[Notes]

___
*) Trivially, all points and line-segments are monotonic (see example #1).
*) Return the indices where each monotonic section stops, not where each new one begins: i.e. return the "peaks" of the triangles (see example #2).
*) Monotonic arrays are allowed to be constant (see example #3).
*) You can expect positive and negative values in the array.
___



[algorithms] [math] 



-------------------------------------------------------------------
[Resources]
_________
Monotonic Function
https://en.wikipedia.org/wiki/Monotonic_function
In mathematics, a monotonic function[1] [2](or monotone function[3]) is a function between ordered sets that preserves or reverses the given order. This concept first a …
_________

*/
//Your code should go here:

