/*
####  Priority Sort  ####

Given an array and a set, return a sorted array with its items in ascending order but prioritize the elements in the set over the other items in the array.


[Examples]

___
prioritySort([5, 4, 3, 2, 1], new Set([2, 3])) ➞ [2, 3, 1, 4, 5]

prioritySort([5, 4, 3, 2, 1], new Set([3, 6])) ➞ [3, 1, 2, 4, 5]

prioritySort([-5, -4, -3, -2, -1, 0], new Set([-4, -3])) ➞ [-4, -3, -5, -2, -1, 0]
_____



[Notes]

___
*) If the array is empty, return an empty array.
*) If the set is empty there is nothing to prioritize, but the array should still be sorted.
*) The set may contain values that are not in the array.
*) The array may contain duplicates.
*) The array and the set will only contain integer values.
___



[conditions] [language_fundamentals] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Map.prototype.has()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
Returns a boolean indicating whether an element with the specified key exists or not.
_________

*/
//Your code should go here:

