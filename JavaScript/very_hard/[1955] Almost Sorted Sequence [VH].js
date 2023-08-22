/*
####  Almost Sorted Sequence  ####

An almost-sorted sequence is a sequence that is strictly increasing or strictly decreasing if you remove a single element from the array (no more, no less). Write a function that returns true if an array is almost-sorted, and false otherwise.
For example, if you remove 80 from the first example, it is perfectly sorted in ascending order. Similarly, if you remove 7 from the second example, it is perfectly sorted in descending order.


[Examples]

___
almostSorted([1, 3, 5, 9, 11, 80, 15, 33, 37, 41] ) ➞ true

almostSorted([6, 5, 4, 7, 3]) ➞ true

almostSorted([6, 4, 2, 0]) ➞ false
// Sequence is already sorted.

almostSorted([7, 8, 9, 3, 10, 11, 12, 2]) ➞ false
// Requires removal of more than 1 item.
_____



[Notes]

___
*) Completely sorted arrays should return false.
*) Arrays will always be > 3 in length (to remove ambiguity).
*) Numbers in each input array will be unique - don't worry about "ties".
___



[arrays] [sorting] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________

*/
//Your code should go here:

