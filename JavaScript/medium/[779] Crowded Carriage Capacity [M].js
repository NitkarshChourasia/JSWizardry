/*
####  Crowded Carriage Capacity  ####

A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal proportion of the maximum capacity.
Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity. If no such carriage exists, return -1.


[Worked Example]

___
findASeat(200, [35, 23, 18, 10, 40]) ➞ 2

// There are 5 carriages which each have a maximum capacity of 40 (200 / 5 = 40).
// Index 0's carriage is too full (35 is 87.5% of the maximum).
// Index 1's carriage is too full (23 is 57.5% of the maximum).
// Index 2's carriage is good enough (18 is 45% of the maximum).
// Return 2.
_____



[Examples]

___
findASeat(20, [3, 5, 4, 2]) ➞ 3

findASeat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]) ➞ 0

findASeat(200, [35, 23, 40, 21, 38]) ➞ -1
_____



[Notes]

___
*) If a train can hold 200 passengers, and has 5 carriages, then that means each carriage can hold a maximum of 40 passengers each.
*) All carriage numbers will be positive integers, which will be able to divide evenly.
*) Remember to return -1 if no carriage is empty enough.
___



[interview] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element pas …
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
findIndex() Method
https://www.w3schools.com/jsref/jsref_findindex.asp
Returns the index of the first element in an array that pass a test (provided as a function). The findIndex() method executes the function once for each element presen …
_________
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays.
_________

*/
//Your code should go here:

