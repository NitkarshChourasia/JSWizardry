/*
####  The Museum of Incredibly DULL Things  ####

A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.
Create a function that takes an array of integers and removes the smallest value.


[Examples]

___
removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]

removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]

removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]
_____



[Notes]

___
*) Don't change the order of the left over items.
*) If you get an empty array, return an empty array: [] ➞ []
*) If there are multiple items with the same value, remove item with lower index (3rd example).
___



[arrays] [formatting] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Remove Item From Specific Index From an Array
https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
Find the index of the array element you want to remove using indexOf, and then remove that index with splice.
_________
_________
filter() Method
https://www.w3schools.com/jsref/jsref_filter.asp
Creates an array filled with all array elements that pass a test (provided as a function). Note: filter() does not execute the function for array elements without valu …
_________
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

