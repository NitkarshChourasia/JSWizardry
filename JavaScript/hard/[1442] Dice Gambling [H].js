/*
####  Dice Gambling  ####

Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:



[Examples]

___
rolls([1, 2, 3]) ➞ 4
// The second roll, 2, counts as 0 as a result of rolling 1.

rolls([2, 6, 2, 5]) ➞ 17
// The 2 following the 6 was multiplied by 2.

rolls([6, 1, 1]) ➞ 8
// The first roll makes the second roll worth 2, but the
// second roll was still 1 so the third roll doesn't count.
_____



[Notes]

Even if a 6 is rolled after a 1, 6 isn't summed but the 6's "effect" still takes place.


[algorithms] [conditions] [games] [math] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________

*/
//Your code should go here:

