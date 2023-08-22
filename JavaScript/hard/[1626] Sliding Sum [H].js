/*
####  Sliding Sum  ####

Create a function that returns the subarrays of n consecutive elements from the original element that sum up to k. The function will have the following form: slidingSum(arr, n, k)
To illustrate:
___
slidingSum([3, 4, 1, 9, 9, 0, 3, 5, 4], 3, 8) ➞ [[3, 4, 1], [0, 3, 5]]
// Where [3, 4, 1] and [0, 3, 5] are the only subarrays that sum to 8 with length 3.
_____



[Examples]

___
slidingSum([1, 4, 2, 3, 5, 0], 2, 5) ➞ [[1, 4], [2, 3], [5, 0]]

slidingSum([5, 5, 5, 5, 5], 1, 5) ➞ [[5], [5], [5], [5], [5]]

slidingSum([5, 5, 5, 5, 5], 5, 24) ➞ []
_____



[Notes]

Return an empty array if no subarrays satisfy the (n,k) condition.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

