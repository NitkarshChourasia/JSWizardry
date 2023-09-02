/*
####  Jumbled Equations  ####

In this challenge, you are given an array of one or more arithmetic operators and a array of numbers. Take each of the operators and mate it with any three separate numbers in the array to create a valid equation. Your answer should contain all possible equations.


[Examples]

___
jumbled([["+"], [2, 1, 3]]) ➞ ["1+2=3"]

jumbled(["+", "*"], [36, 28, 71, 4, 12, 7, 11]]) ➞ ["4*7=28", "4+7=11"]

jumbled([["+", "-", "*", "**"], [1, 2, 3, 0]]) ➞ ["1+2=3", "2**0=1", "3**0=1", "3-1=2", "3-2=1"]
// Each equation must contain 3 discrete numbers from the array.
// "1+0=1" or "3-3=0" are not allowed.
_____



[Notes]

___
*) For operators with commutative properties, return only the equation with the smallest term first. "4*6=24" not "6*4=24".
*) Return your answer as an array sorted lexicographically.
___



[arrays] [loops] [sorting] 



-------------------------------------------------------------------
[Resources]


[No Resources]


*/
//Your code should go here:

