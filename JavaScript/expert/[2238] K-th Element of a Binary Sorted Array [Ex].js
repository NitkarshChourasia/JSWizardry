/*
####  K-th Element of a Binary Sorted Array  ####

Given two positive integers n and k, generate all binaries between the integers 0 and (2^n) - 1 , inclusive. These binaries will be sorted in descending order according to the number of existing 1s on it, if there is a tie, we choose the lowest numerical value. Return the k-th element from the sorted array created.
For n = 3 and k = 5 for example, the numbers from 0 to 7 (7 = (2^3) - 1), make the binary array:
___
["0", "1", "10", "11", "100", "101", "110", "111"]
_____

When sorted by the rules, we have:
___
["111", "11", "101", "110", "1", "10", "100", "0"]
_____

And "1" is the fifth element on it.


[Examples]

___
kthBinaryArray(3, 5) ➞ "1"
// ["111", "11", "101", "110", "1", "10", "100", "0"]

kthBinaryArray(4, 10) ➞ "1010"
// ["1111", "111", "1011", "1101", "1110", "11", "101", "110", "1001", "1010", "1100", "1", "10", "100", "1000", "0"]
_____



[Notes]

N/A


[algorithms] [data_structures] [logic] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
Returns a string representing the object.
_________

*/
//Your code should go here:

