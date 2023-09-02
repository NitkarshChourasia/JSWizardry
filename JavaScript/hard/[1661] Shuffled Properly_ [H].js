/*
####  Shuffled Properly?  ####

Given an array of 10 numbers, return whether or not the array is shuffled sufficiently enough. In this case, if 3 or more numbers appear consecutively (ascending or descending), return false.


[Examples]

___
isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4]) ➞ false
// 1, 2, 3 appear consecutively

isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10]) ➞ false
// 9, 8, 7, 6 appear consecutively

isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9]) ➞ true
// No consecutive numbers appear

isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10]) ➞ true
// No consecutive numbers appear
_____



[Notes]

___
*) Only steps of 1 in either direction count as consecutive (i.e. a sequence of odd and even numbers would count as being properly shuffled (see example #4)).
*) You will get numbers from 1-10.
___



[arrays] [loops] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which th …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

