/*
####  Smallest Missing Positive Integer  ####

Given an array of integers, return the smallest positive integer not present in the array.
Here is a representative example. Consider the array:
___
[-2, 6, 4, 5, 7, -1, 7, 1, 3, 6, 6, -2, 9, 10, 2, 2]
_____

After reordering, the array becomes:
___
[-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7, 7, 9, 10]
_____

... from which we see that the smallest missing positive integer is 8.


[Examples]

___
minMissPos([-2, 6, 4, 5, 7, -1, 1, 3, 6, -2, 9, 10, 2, 2]) ➞ 8
// After sorting, the array becomes [-2, -2, -1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 9, 10]
// So the smallest missing positive integer is 8

minMissPos([5, 9, -2, 0, 1, 3, 9, 3, 8, 9]) ➞ 2
// After sorting, the array becomes [-2, 0, 1, 3, 3, 5, 8, 9, 9, 9]
// So the smallest missing positive integer is 2

minMissPos([0, 4, 4, -1, 9, 4, 5, 2, 10, 7, 6, 3, 10, 9]) ➞ 1
// After sorting, the array becomes [-1, 0, 2, 3, 4, 4, 4, 5, 6, 7, 9, 9, 10, 10]
// So the smallest missing positive integer is 1
_____



[Notes]

For the sake of clarity, recall that 0 is not considered to be a positive number.


[arrays] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Set
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Loops and iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Offer a quick and easy way to do something repeatedly. This chapter of the JavaScript Guide introduces the different iteration statements available to JavaScript.
_________
_________
How to sort an array numerically?
https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958#:~:text=sort((a%2Cb)%3D,sorting%20by%20using%20the%20syntax%20%5B%E2%80%A6
Ever try to sort an array of integers in JavaScript using .sort() and get a weird result, where the order was not numeric? The array got sorted in lexicographical order …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is r …
_________

*/
//Your code should go here:

