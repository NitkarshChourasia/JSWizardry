/*
####  Shiny Semiprimes: Brilliant Numbers  ####

In this challenge, you have to establish if a given number is Brilliant. A Brilliant number is a semiprime that can be obtained only by multiplicating two, and only two, different primes with the same number of digits.
A semiprime can be:
___
*) A composite number equal to the product of two different primes.
*) A composite number equal to the square of a prime.
___

Given an integer n, implement a function that returns true if n is a Brilliant number, or false if it's not.


[Examples]

___
isBrilliant(11) ➞ false
// 11 is a prime.

isBrilliant(9) ➞ true
// 9 is equal to the square of a prime: 3²

isBrilliant(21) ➞ true
// 21 is equal to the product of two different primes: 3 x 7
// 3 and 7 have the same digital length.

isBrilliant(22) ➞ false
// 22 is equal to the product of two different primes: 2 x 11
// 2 and 11 have different digital lengths.
_____



[Notes]

___
*) The given n will be a positive integer greater than 0.
*) Remember that a Brilliant number is a semiprime that can be obtained only with a single combination of different primes having the same digital length.
___



[higher_order_functions] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Brilliant numbers
https://www.alpertron.com.ar/BRILLIANT.HTM
Interesting problem about products of two primes of the same size.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Semi-primes
https://www.youtube.com/watch?v=XJl-ugl6tMM
What are semiprimes and its usage in Cryptography.
_________

*/
//Your code should go here:

