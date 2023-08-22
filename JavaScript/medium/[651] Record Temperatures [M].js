/*
####  Record Temperatures  ####

You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.
The records array contains the all-time record low/high temperatures for that day of the week.
___
[[record low, record high], ...]
_____

The current week array contains the daily low/high temperatures for each day of the current week.
___
[[daily low, daily high], ...]
_____

A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.
Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.
___
*) There may be multiple record temperatures in a week.
*) If there are no broken records return the original records array.
___



[Example]

___
//             sun       mon      tues       wed      thur      fri       sat
recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
            [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])

➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
_____

The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.


[Notes]

___
*) There won't be a record high and record low set on the same day.
*) Index 0 will always be the low and index 1 will always be the high [low, high].
*) For reference these temps are °F but you do not need to convert any temperatures.
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
How do I compare two arrays in JavaScript?
https://www.30secondsofcode.org/blog/s/javascript-array-comparison
Comparing two arrays in JavaScript using either the loose or strict equality operators (== or ===) will most often result in false, even if the two arrays contain the s …
_________
_________
How to compare two arrays in JavaScript?
https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
In Javascript, to compare two arrays we need to check that the length of both arrays should be same, the objects present in it are of the same type and each item in one …
_________

*/
//Your code should go here:

