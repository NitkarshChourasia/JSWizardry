/*
####  The Smiths  ####

In numbers theory, a positive composite integer is a Smith number if its digital root is equal to the digital root of the sum of its prime factors, with factors being counted by multiplicity. Trivially, every prime is also a Smith number, having just one prime factor that is equal to itself. If two Smith numbers are consecutive in the integer series, then they are Smith brothers. Any other number will not be a Smith.
Given a positive integer number, implement a function that returns:
___
*) "Youngest Smith" if the given number is the lower element of a couple of Smith brothers.
*) "Oldest Smith" if the given number is the higher element of a couple of Smith brothers.
*) "Single Smith" if the given number is a Smith number without another Smith number adjacent, lower or higher.
*) "Trivial Smith" if the given number is a prime.
*) "Not a Smith" if the given number is not a Smith number.
___



[Examples]

___
smithType(22) ➞ "Single Smith"
// Digital root of 22 = 2 + 2 = 4
// Sum of prime factors of 22 = 2 + 11 = 13
// Digital root of 13 = 1 + 3 = 4
// Is a Smith  number without a brother

smithType(7) ➞ "Trivial Smith"
// The given number is a prime

smithType(728) ➞ "Youngest Smith"
// Digital root of 728 = 7 + 2 + 8 = 17 = 1 + 7 = 8
// Sum of prime factors of 728 = 2 + 2 + 2 + 7 + 13 = 26
// Digital root of 26 = 2 + 6 = 8
// The number 729 is a Smith number, so 728 is the youngest brother  

smithType(6) ➞ "Not a Smith"
// Digital root of 6 = 6
// Sum of prime factors of 6 = 2 + 3 = 5
// Digital root of 5 = 5
_____



[Notes]

___
*) The prime factors are counted by multiplicity, they don't have to be unique (see example #3).
*) Two Smith numbers are brothers if they are adjacent and if they are composite, a Trivial Smith (a prime) can't be the brother of a Smith number! Look at example #1: 22 is a Single Smith, despite the next one, 23 (a prime), being a Trivial Smith.
*) The digital root is the reiterated sum of the digits of a number until a single digit is reached. You can find more info in the Resources tab.
*) All given integers will be greater than zero.
___



[higher_order_functions] [loops] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Digital Root
https://en.wikipedia.org/wiki/Digital_root
The digital root (also repeated digital sum) of a natural number in a given number base is the (single digit) value obtained by an iterative process of summing digits, …
_________
_________
Smith Number
https://en.wikipedia.org/wiki/Smith_number
A composite number for which, in a given number base, the sum of its digits is equal to the sum of the digits in its prime factorization in the given number base. In th …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

