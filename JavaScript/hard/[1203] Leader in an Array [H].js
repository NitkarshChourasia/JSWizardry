/*
####  Leader in an Array  ####

Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.


[Examples]

___
leader([2, 3, 20, 15, 8, 3]) ➞ [20, 15, 8, 3]
// Note that 20 is greater than all the elements to it's
// right side, similarly 15 and so on.

leader([2, 3, 20, 15, 8, 25, 3]) ➞ [25, 3]
// Note that 20 cannot be added because it is not greater than 25.

leader([1, 2, 3, 4, 5]) ➞ [5]
// 5 is technically greater than the (zero) remaining items.

leader([8, 7, 1, 2, 10, 3, 5]) ➞[10, 5]
// 10 is greater than all items to the right of it, so include.
// 3 is not greater than all items to the right of it, so exclude.
// 5 is greater than the remaining items, so include.
_____



[Notes]

Add elements in the new array in the same order they occur in the input array.


[arrays] [language_fundamentals] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________

*/
//Your code should go here:

