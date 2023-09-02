/*
####  What Gives a Bad Mood?  ####

The factors said to have the greatest impact on someone's mood are: weather, meals, and sleep. Your task is, given an array of sub-arrays of different values for: Mood, Weather, Meals, and Sleep, determine which other variable has had the greatest impact on the mood.


[Examples]

___
greatestImpact([
  [1, 1, 3, 10],
  [1, 1, 3, 10],
  [1, 1, 3, 10]
]) ➞ "Weather"

// As it was always low but all others were high.

greatestImpact([
  [10, 10, 3, 10],
  [10, 10, 3, 10],
  [10, 10, 3, 10]
]) ➞ "Nothing"

// As all were always high.
_____



[Notes]

The mood will always go from 1 to 10, the weather will always go from 1 to 10, the meals will always go from 1 to 3, and the sleep will always go from 1 to 10. In cases of mood and weather, 1 is negative and 10 is positive. All sub-arrays values will be in the order [Mood, Weather, Meals, Sleep].


[algorithms] [arrays] 



-------------------------------------------------------------------
[Resources]
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
filter
https://developer.mozilla.org/en-US/docs/Web/CSS/filter
Applies graphical effects like blur or color shift to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders.
_________

*/
//Your code should go here:

