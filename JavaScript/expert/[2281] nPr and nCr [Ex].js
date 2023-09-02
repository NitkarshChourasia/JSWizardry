/*
####  nPr and nCr  ####

Write a function that efficiently calculates nPr (number of permutations of r items from a set of size n) and another function that efficiently calculates nCr (number of combinations of r items from a set of size n, regardless of order).
___
*) The formula for calculating nPr is n!/(n-r)! ("!" is the factorial operation).
*) The formula for calculating nCr is n!/(r!(n-r)!).
___

Your functions should work efficiently for cases where n! or r! are very large compared to the result. Simply calculating the factorials and dividing will cause your program to time out. See if you can think of a more efficient method.


[Examples]

___
// Permutations

nPr(7, 4) ➞ 840
nPr(300, 3) ➞ 26730600

// Combinations

nCr(7, 4) ➞ 35
nCr(300, 3) ➞ 4455100
nCr(300, 297) ➞ 4455100
_____



[Notes]

___
*) n and r will always be positive integers where n >= r.
*) Think about what factors will cancel out when dividing the factorials.
___



[algebra] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Factorial
https://en.wikipedia.org/wiki/Factorial
In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n: {\displaystyle n!=n\cdot (n-1)\c …
_________
_________
Permutation and Combination Calculator
https://ncalculators.com/statistics/permutation-combination-calculator.htm
An online math tool that determines the number of combinations and permutations that result when we choose r objects from a set of n objects. It is necessary to follow …
_________

*/
//Your code should go here:

