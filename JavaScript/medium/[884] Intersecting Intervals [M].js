/*
####  Intersecting Intervals  ####

Create a function that takes in an array of intervals and returns how many intervals overlap with a given point.
An interval overlaps a particular point if the point exists inside the interval, or on the interval's boundary. For example the point 3 overlaps with the interval [2, 4] (it is inside) and [2, 3] (it is on the boundary).
To illustrate:
___
countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) ➞ 3
// Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.
_____



[Examples]

___
countOverlapping([[1, 2], [2, 3], [3, 4]], 5) ➞ 0

countOverlapping([[1, 2], [5, 6], [5, 7]], 5) ➞ 2

countOverlapping([[1, 2], [5, 8], [6, 9]], 7) ➞ 2
_____



[Notes]

___
*) Each interval is represented as an array with a start point and an endpoint.
*) Intervals count as intersecting even if they only intersect at one point, i.e. [2, 3] and [3, 4] both intersect at point 3.
*) If it's helpful, you can draw these intervals on a line on a piece of paper.
___



[algorithms] [arrays] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________

*/
//Your code should go here:

