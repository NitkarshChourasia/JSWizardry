/*
####  Less or Equal  ####

Mubashir needs your help in a simple task.
Given an array of integers arr and an integer k, find the lowest positive integer x so that exactly k elements of the given array are less than or equal to x. Return null if the condition does not match.
See below examples for a better understanding:


[Examples]

___
lessEqual([3, 7, 6, 1, 10, 3, 20], 4) ➞ 6
// 1, 3, 3, 6 = 4 elements
// All elements are less than or equal to 6

lessEqual([3, 7, 6, 1, 10, 3, 20], 2) ➞ null
// 1, 3 = 2 elements
// Not possible to return 3 because we have another 3 in the array

lessEqual([3, 7, 5, 1, 10, 3, 20], 4) ➞ 5
// 1, 3, 3, 5 = 4 elements
// All elements are less than or equal to 5

lessEqual([10, 15, 20, 25], 0) ➞ 1
// k = 0
_____



[Notes]

___
*) All numbers of the given array and k will be ≥ 0.
*) Understanding the description of this challenge is the hardest part.
___



[interview] [logic] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

