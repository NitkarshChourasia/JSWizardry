/*
####  Face Interval  ####

In mathematics, interval is the difference between the largest number and the smallest number in an array.
To illustrate:
___
A = (3, 5, 7, 23, 11, 42, 80)

Interval of A = 80 - 3 = 77
_____

Create a function that takes an array and returns ":)" if the interval of the array is equal to any other element; otherwise return ":(".


[Examples]

___
faceInterval([1, 2, 5, 8, 3, 9]) ➞ ":)"
// Array interval is equal to one of the other elements.

faceInterval([5, 2, 8, 3, 11]) ➞ ":("
// Array interval is not among the other elements.

faceInterval("bruh") ➞ ":/"
// "bruh" is not an array. It's string.
_____



[Notes]

___
*) Arrays won't contain any duplicate numbers.
*) If you're not given an array, return ":/"
___



[algorithms] [math] [sorting] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________

*/
//Your code should go here:

