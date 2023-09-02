/*
####  Bound Sort  ####

Create a function that returns true if an input array can be completely sorted by only sorting within the bounds [0, n] (inclusive), where n is smaller than or equal to the array's length, and false otherwise.


[Examples]

___
boundSort([1, 6, 5, 3, 8, 9], [0, 3]) ➞ true
// If [1, 6, 5, 3] is sorted to [1, 3, 5, 6], the array is completely sorted.

boundSort([1, 6, 5, 3, 8, 9], [0, 2]) ➞ false
// Even if [1, 6, 5] is sorted to [1, 5, 6], the array is still not completely sorted.

boundSort([1, 9, 2, 5, 7], [0, 4]) ➞ true

boundSort([1, 9, 2, 5, 7], [0, 3]) ➞ false
// Sorting from [0, 3] gives us [1, 2, 5, 9, 7], array still not completely sorted.
_____



[Notes]

___
*) Numbers in array will be unique.
*) The lower index of the bound will always be 0.
___



[arrays] [sorting] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent t …
_________
_________
Array.prototype.sort()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their se …
_________
_________
Array.prototype.concat()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Array.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified …
_________

*/
//Your code should go here:

