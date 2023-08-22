/*
####  Prime Gaps  ####

A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes. See this Resource for more information.
The prime numbers are not regularly spaced. For example gap between:
___
*) 2 and 3 is 1
*) 3 and 5 is 2
*) 7 and 11 is 4
___

Create a function with following parameters:
___
g (integer >= 2)
// Gap between the consecutive primes

a (integer > 2)
// Start of the search (a inclusive)

b (integer >= a)
// End of the search (b inclusive)
_____

... and returns the first pair of two prime numbers spaced with a gap of g between the limits a and b.
___
primeGaps(2, 3, 50) ➞ [3, 5]

// Between 2 and 50 we have the following pairs of 2-gaps primes:
// 3-5, 5-7, 11-13, 17-19, 29-31, 41-43.

[3, 5] is the first pair between 3 and 50 with a 2-gap.
_____



[Examples]

___
primeGaps(2, 5, 7) ➞ [5, 7]

primeGaps(2, 5, 5) ➞ null

primeGaps(4, 130, 200) ➞ [163, 167]
_____



[Notes]

Return null if consecutive prime numbers are not found with the required gap.


[algorithms] [functional_programming] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Prime Gaps
https://mathworld.wolfram.com/PrimeGaps.html
Is a run of n-1 consecutive composite numbers between two successive primes. Therefore, the difference between two successive primes p_k and p_(k+1) bounding a prime ga …
_________
_________
Prime Gap
https://en.wikipedia.org/wiki/Prime_gap#:~:text=A%20prime%20gap%20is%20the,n%2Dth%20prime%20numbers%2C%20i.e.
Is the difference between two successive prime numbers. The n-th prime gap, denoted gn or g(pn) is the difference between the (n + 1)-th and the n-th prime numbers, i.e.
_________

*/
//Your code should go here:

