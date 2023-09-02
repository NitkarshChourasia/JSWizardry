/*
####  Balancing Scales  ####

Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".


[Examples]

___
scaleTip([0, 0, "I", 1, 1]) ➞ "right"
// 0 < 2 so it will tip right

scaleTip([1, 2, 3, "I", 4, 0, 0]) ➞ "left"
// 6 > 4 so it will tip left

scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1]) ➞ "balanced"
// 15 = 15 so it will stay balanced
_____



[Notes]

___
*) The middle element will always be "I" so you can just ignore it.
*) Assume the numbers all represent the same unit.
*) Both sides will have the same number of elements.
*) There are no such things as negative weights in both real life and the tests!
___



[algorithms] [arrays] [conditions] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________

*/
//Your code should go here:

