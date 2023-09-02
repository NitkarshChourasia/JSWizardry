/*
####  Cumulative Array Sum  ####

Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.


[Examples]

___
cumulativeSum([1, 2, 3]) ➞ [1, 3, 6]

cumulativeSum([1, -2, 3]) ➞ [1, -1, 2]

cumulativeSum([3, 3, -2, 408, 3, 3]) ➞ [3, 6, 4, 412, 415, 418]
_____



[Notes]

Return an empty array if the input is an empty array.


[arrays] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Creating an array of cumulative sum in JavaScript?
https://stackoverflow.com/questions/20477177/creating-an-array-of-cumulative-sum-in-javascript
This is an example of what I need to do: var myarray = [5, 10, 3, 2]; var result1 = myarray[0]; var result2 = myarray[1] + myarray[0]; var result3 = myarray[2] + myar …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
_________

*/
//Your code should go here:

