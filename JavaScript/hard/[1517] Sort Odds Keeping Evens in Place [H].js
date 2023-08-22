/*
####  Sort Odds Keeping Evens in Place  ####

Write a function that sorts only the odd numbers in an array in ascending order, keeping the even numbers in their current place.
For example, if our input array is: [5, 2, 6, 6, 1, 4, 9, 3]:
___
[_, 2, 6, 6, _, 4, _, _]  // keep evens in place.

// Sort odds: [5, 1, 9, 3] => [1, 3, 5, 9]

[1, 2, 6, 6, 3, 4, 5, 9]  // final array.
_____



[Examples]

___
oddSort([7, 5, 2, 3, 1]) ➞ [1, 3, 2, 5, 7]

oddSort([3, 7, 0, 9, 3, 2, 4, 8]) ➞ [3, 3, 0, 7, 9, 2, 4, 8]

oddSort([2, 2, 8, 4]) ➞ [2, 2, 8, 4]

oddSort([7, 9, 7]) ➞ [7, 7, 9]
_____



[Notes]

Arrays may contain duplicate numbers.


[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

