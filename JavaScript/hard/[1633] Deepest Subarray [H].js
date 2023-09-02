/*
####  Deepest Subarray  ####

You are given an array which may contain subarrays. Your task is to find the depth of the deepest subarray.
___
*) [a] = 1 depth
*) [[a]] = 2 depth
*) [[[a]]] = 3 depth, etc
___



[Examples]

___
deepest([1, [2, 3], 4, [5, 6]]) ➞ 2

deepest([[[[[[[[[[1]]]]]]]]]]) ➞ 10

deepest([1, 4, [1, 4, [1, 4, [1, 4, [5]]]]]) ➞ 5
_____



[Notes]

N/A


[arrays] [functional_programming] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________

*/
//Your code should go here:

