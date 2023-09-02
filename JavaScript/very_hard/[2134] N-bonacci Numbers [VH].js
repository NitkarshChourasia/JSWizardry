/*
####  N-bonacci Numbers  ####

N-bonacci numbers are generalisations of the fibonacci sequence, where the next term is always the sum of the previous N terms. By convention, the first (N-1) terms are all 0 and the Nth term is 1.
The initial 10 terms of the first 5 N-bonacci sequences are therefore:
___
*) 1-bonacci = 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...
*) 2-bonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
*) 3-bonacci = 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, ...
*) 4-bonaaci = 0, 0, 0, 1, 1, 2, 4, 8, 15, 29, ...
*) 5-bonacci = 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, ...
___

Write a function that returns the kth term of the N-bonacci sequence, for two integer arguments N and k.


[Examples]

___
bonacci(1, 10) ➞ 1

bonacci(2, 10) ➞ 34

bonacci(3, 10) ➞ 44

bonacci(4, 10) ➞ 29

bonacci(5, 10) ➞ 16
_____



[Notes]

N/A


[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
N-bonacci Numbers
http://oeis.org/wiki/N-bonacci_numbers
The N-bonacci numbers arise from a recurrence relation like that of the Fibonacci numbers but with N initial terms defined as instead of two initial terms, and where ea …
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
N-bonacci Numbers
https://www.geeksforgeeks.org/n-bonacci-numbers/
You are given two Integers N and M, and print all the terms of the series upto M-terms of the N-bonacci Numbers. For example, when N = 2, the sequence becomes Fibonacci …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________

*/
//Your code should go here:

