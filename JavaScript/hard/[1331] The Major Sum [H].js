/*
####  The Major Sum  ####

Create a function that takes an integer array and return the biggest between positive sum, negative sum, or 0s count. The major is understood as the greatest absolute.
arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:
___
*) Positive sum = 1+2+3+4 = 10
*) Negative sum = (-3)+(-2) = -5
*) 0s count = 2 (there are two zeros in array)
___



[Examples]

___
majorSum([1, 2, 3, 4, 0, 0, -3, -2]) ➞ 10

majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]) ➞ -27

majorSum([0, 0, 0, 0, 0, 1, 2, -3]) ➞ 5
// Because -3 < 1+2 < 0sCount = 5
_____



[Notes]

___
*) All numbers are integers.
*) There aren't empty arrays.
*) All tests are made to return only one value.
___



[arrays] [conditions] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

