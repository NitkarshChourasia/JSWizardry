/*
####  Longest Consecutive Run  ####

A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.
To illustrate:
___
longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
_____



[Examples]

___
longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// Longest consecutive-run: [1, 2, 3].

longestRun([5, 4, 2, 1]) ➞ 2
// Longest consecutive-run: [5, 4] and [2, 1].

longestRun([3, 5, 7, 10, 15]) ➞ 1
// No consecutive runs, so we return 1.
_____



[Notes]

If there aren't any consecutive runs (there is a gap between each integer), return 1.


[arrays] [control_flow] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Set.prototype.has()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Returns a boolean asserting whether an element is present with the given value in the Set object or not.
_________

*/
//Your code should go here:

