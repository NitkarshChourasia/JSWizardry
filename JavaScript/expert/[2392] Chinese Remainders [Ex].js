/*
####  Chinese Remainders  ####

Create a function that finds a number n so that n mod y = x, given an array of x-y pairs, where (0 ≤ n ≤ product of all y's).
This challenge is related to the Chinese Remainder Theorem, which states that there is one and only one integer n that is congruent with a number of divisors (called moduli) and their remainders for n so long as those moduli are coprime, where n is comprised between 0 and the product of all moduli.
For example, there is only one value between 0 and 3 × 4 × 5 = 60 for n so that:
___
*) n mod 3 = 0
*) n mod 4 = 3
*) n mod 5 = 4
___

Here, n = 39 because 39 mod 3 = 0, 39 mod 4 = 3, and 39 mod 5 = 4, and 3 and 4 are coprime, and so are 3 and 5, and 4 and 5. The numbers -21 and 99 would also be congruent with the moduli and remainders given, but we will not be considering those as they aren't in the range (0, 60).
Your input will be an array with a number of tuples in the form (remainder, modulo) and the output should be a number n congruent with those moduli and remainders.


[Examples]

___
remainders([[0, 3], [3, 4], [4, 5]]) ➞ 39
// 39 mod 3 = 0, 39 mod 4 = 3 and 39 mod 5 = 4

remainders([[1, 2],  [8, 9]]) ➞ 17
// 17 mod 2 = 1 and 17 mod 9 = 8

remainders([[0, 15], [7, 16], [2, 17]]) ➞ 2535
// 2535 mod 15 = 0, 2535 mod 16 = 7 and 2535 mod 17 = 2
_____



[Notes]

___
*) You don't need to check for co-primality. Assume all moduli in the input will be coprime.
*) An input will be at least one tuple.
*) Test cases will include large numbers (check for efficiency).
___



[algorithms] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Chinese Remainder Theorem
https://en.wikipedia.org/wiki/Chinese_remainder_theorem
The Chinese remainder theorem states that if one knows the remainders of the Euclidean division of an integer n by several integers, then one can determine uniquely the …
_________
_________
What is modular arithmetic?
https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic
When we divide two integers we will have an equation that looks like the following ...
_________

*/
//Your code should go here:

