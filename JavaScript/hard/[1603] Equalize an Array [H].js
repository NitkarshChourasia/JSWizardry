/*
####  Equalize an Array  ####

Mubashir needs your help to equalize (make all array elements the same) an array.
Create a function that takes an array of integers arr and a constant c and returns minimum number of operations required to equalize the given array.


[Rules]

___
*) You can choose any integer x to equalize the given array.
*) Pick a contiguous subarray of length not greater than the given c
___



[Examples]

___
arr = [1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1], c = 2
equalize(arr, c) ➞ 4
You have chosen x = 1 (change all values of the array to 1)

[1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1]
[1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1] -> Step 1
[1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1] -> Step 2
[1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1] -> Step 3
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] -> Step 4
_____



[Notes]

N/A


[algorithms] [arrays] [logic] [loops] 



-------------------------------------------------------------------
[Resources]
_________
While Loop
https://www.w3schools.com/js/js_loop_while.asp
Can execute a block of code as long as a specified condition is true.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________

*/
//Your code should go here:

