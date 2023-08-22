/*
####  Sum of Array Elements Except Itself  ####

An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.


[Clarification]

___
*) [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
*) [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
*) [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
*) [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]
___



[Examples]

___
arrEleSum([1, 2, 3, 2, 1]) ➞ [8, 7, 6, 7, 8]

arrEleSum([1, 2]) ➞ [2, 1]

arrEleSum([1, 2, 3]) ➞ [5, 4, 3]

arrEleSum([1, 2, 3, 4, 5]) ➞ [14, 13, 12, 11, 10]

arrEleSum([10, 20, 30, 40, 50, 60]) ➞ [200, 190, 180, 170, 160, 150]
_____



[Notes]

N/A


[arrays] 



-------------------------------------------------------------------
[Resources]
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Loops and Interation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________

*/
//Your code should go here:

