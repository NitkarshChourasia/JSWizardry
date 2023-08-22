/*
####  Largest Gap  ####

Given an array of integers, return the largest gap between elements of the sorted version of that array.
Here's an illustrative example. Consider the array:
___
[9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
_____

... which, after sorting, becomes the array:
___
[0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
_____

... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.


[Examples]

___
largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]) ➞ 11
// After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// Largest gap of 11 between 9 and 20

largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7]) ➞ 4
// After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// Largest gap of 4 between 7 and 11

largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9]) ➞ 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8
_____



[Notes]

N/A


[arrays] [math] [numbers] [sorting] 



-------------------------------------------------------------------
[Resources]
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
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________

*/
//Your code should go here:

