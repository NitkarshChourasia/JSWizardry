/*
####  Sort Positives, Keep Negatives  ####

Write a function that sorts the positive numbers in ascending order, and keeps the negative numbers untouched.


[Examples]

___
posNegSort([6, 3, -2, 5, -8, 2, -2]) ➞ [2, 3, -2, 5, -8, 6, -2]

posNegSort([6, 5, 4, -1, 3, 2, -1, 1]) ➞ [1, 2, 3, -1, 4, 5, -1, 6]

posNegSort([-5, -5, -5, -5, 7, -5]) ➞ [-5, -5, -5, -5, 7, -5]

posNegSort([]) ➞ []
_____



[Notes]

___
*) If given an empty array, you should return an empty array.
*) Integers will always be either positive or negative (0 isn't included in the tests).
___



[algorithms] [control_flow] [interview] [loops] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
How to Insert an Item Into an Array at a Specific Index
https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
arr.splice(index, 0, item); will insert item into arr at the specified index (deleting 0 items first, that is, it's just an insert).
_________

*/
//Your code should go here:

