/*
####  Wrong Number  ####

Mubashir needs your help to find out a wrong number in a 2D array.
Imagine a 2D array of numbers given below:
___
var arr = [
  [1, 2, 3, 6 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,45]
]
_____

You can notice that:
___
*) The end number of each row is the sum of each row's previous numbers.
*) The end number of each column is the sum of each column's previous numbers.
___

See below examples for a better understanding:
___
arr1 = [
  [2, 2, 3, 6 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,45]
]

// 2 is incorrect in the first row and first column.
// Replace it with 1.

arr2 = [
  [1, 2, 3, 7 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,45]
]

// 7 is incorrect in the first row and fourth column.
// Replace it with 6.

arr3 = [
  [1, 2, 3, 6 ],
  [4, 5, 6, 15],
  [7, 8, 9, 24],
  [12,15,18,46]
]

// 46 is incorrect in the fourth row and fourth column.
// Replace it with 45.
_____



[Examples]

___
wrongNumber(arr1) ➞ 1

wrongNumber(arr2) ➞ 6

wrongNumber(arr3) ➞ 45
_____



[Notes]

N/A


[algorithms] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________

*/
//Your code should go here:

