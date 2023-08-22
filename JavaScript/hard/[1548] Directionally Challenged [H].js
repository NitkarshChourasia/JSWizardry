/*
####  Directionally Challenged  ####

Suppose you are directionally challenged, and get lost easily. As a result, sometimes you walk in circles or make U-turns. You might take a sub-optimal route. Create a function that returns the difference in length between your path and the optimal path. Both paths reach the same destination.
You start at (0,0) and reach your destination by the end of the input array.
A demonstration:
___
Your route: ["N", "S", "E", "W", "E", "E", "E", "N"]  // 8
Optimal route: ["E", "E", "E", "N"] (or ["N", "E", "E", "E"], etc.) // 4
// Difference in length: 8 - 4 = 4

// Explanation: Your "S" cancels out your "N" and your "W" cancels out your "E" leaving you back at (0,0)
_____



[Examples]

___
routeDiff(["N", "E", "S", "W"]) ➞ 4
// You"ve just walked in a circle! You are back at the origin. Your optimal path was `[]`.

routeDiff(["N", "N", "N", "E", "N", "E"]) ➞ 0
// No improvements here!

routeDiff(["N", "S", "N", "S", "E", "W", "E", "E"]) ➞ 6
_____



[Notes]

Remember that a N cancels out a S, and an E cancels out a W


[arrays] [control_flow] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
_________

*/
//Your code should go here:

