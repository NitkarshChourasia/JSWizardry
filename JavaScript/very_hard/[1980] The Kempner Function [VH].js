/*
####  The Kempner Function  ####

The Kempner Function, applied to a composite number, permits to find the smallest integer greater than zero whose factorial is exactly divided by the number.
___
kempner(6) ➞ 3

1! = 1 % 6 > 0
2! = 2 % 6 > 0
3! = 6 % 6 === 0

kempner(10) ➞ 5

1! = 1 % 10 > 0
2! = 2 % 10 > 0
3! = 6 % 10 > 0
4! = 24 % 10 > 0
5! = 120 % 10 === 0
_____

A Kempner Function applied to a prime will always return the prime itself.
___
kempner(2) ➞ 2
kempner(5) ➞ 5
_____

Given an integer n, implement a Kempner Function.


[Examples]

___
kempner(6) ➞ 3

kempner(10) ➞ 5

kempner(2) ➞ 2
_____



[Notes]

___
*) Try solving this recursively, with an approach oriented to higher-order functions.
*) If you need to get more confident with recursion and factorials, try this challenge.
___



[higher_order_functions] [math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Kempner Function
https://en.wikipedia.org/wiki/Kempner_function
Defined for a given positive integer n to be the smallest number s such that n divides the factorial s! For example, the number 8 does not divide 1!, 2!, 3!, but does d …
_________
_________
BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
Is a primitive wrapper object used to represent and manipulate primitive bigint values — which are too large to be represented by the number primitive.
_________

*/
//Your code should go here:

