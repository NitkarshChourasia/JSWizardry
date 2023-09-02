/*
####  N Differences  ####

Write a function that transforms an array into an array of its differences repeatedly until there exists only one element left. A difference is A[n+1] - A[n].
To illustrate:
___
[5, 1, 9, 3, 4, 0]

[-4, 8, -6, 1, -4]
// 1 - 5 = -4; 9 - 1 = 8; 3 - 9 = -6; etc.

[12, -14, 7, -5]

[-26, 21, -12]

[47, -33]

-80
_____



[Examples]

___
nDifferences([5, 1, 9, 3, 4, 0]) ➞ -80

nDifferences([1, 1, 1, 1]) ➞ 0

nDifferences([5, 8, 8]) ➞ -3
_____



[Notes]

Each array will have at least two elements.


[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
Array.prototype.map()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion
Are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a …
_________
_________
Array.prototype.filter()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
While Loop
https://www.w3schools.com/js/js_loop_while.asp
The while loop loops through a block of code as long as a specified condition is true.
_________

*/
//Your code should go here:

