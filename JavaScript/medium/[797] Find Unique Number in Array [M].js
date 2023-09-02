/*
####  Find Unique Number in Array  ####

Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.


[Examples]

___
findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

findSingleNumber([2]) ➞ 2

findSingleNumber([]) ➞ null

findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]) ➞ 8

findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]) ➞ 101
_____



[Notes]

___
*) Don't forget to return the result.
*) Be aware this challenge includes two validations:
Empty input should return null (example #3).
Single item arrays should return that item (example #2).
*) There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
*) If you're stuck or your solution is over complicated check the Resources tab.
___



[arrays] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
Array.prototype.find()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is ret …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Get First Property of an Object That Matches the Condition
https://stackoverflow.com/questions/37557823/get-first-property-of-an-object-that-matches-the-condition
I’m glad you’re using ES6. In this case you can use Object.keys to get an array of all the object’s keys and Array.prototype.find to find the first element with a speci …
_________

*/
//Your code should go here:

