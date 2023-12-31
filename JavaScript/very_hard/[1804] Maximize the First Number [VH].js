/*
####  Maximize the First Number  ####

Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.
To illustrate:
___
maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
_____



[Examples]

___
maxPossible(523, 76) ➞ 763

maxPossible(9132, 5564) ➞ 9655

maxPossible(8732, 91255) ➞ 9755
_____



[Notes]

___
*) Each digit in the second number can only be used once.
*) Zero to all digits in the second number may be used.
___



[higher_order_functions] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.sort()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________
_________
Math.max()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________

*/
//Your code should go here:

