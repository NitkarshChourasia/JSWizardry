/*
####  The Perrin Sequence  ####

Each number in the Perrin sequence is created by summing the numbers two positions and three positions before it. The first three numbers are (3, 0, 2), and the sequence is extended as follows:
___
P(0) P(1) P(2) P(3) P(4) P(5) P(6) P(7) ... P(n)
3, 0, 2, 3, 2, 5, 5, 7, ...
_____

Given a value for n, return the Perrin number P(n).


[Examples]

___
perrin(1) ➞ 0

perrin(8) ➞ 10

perrin(26) ➞ 1497
_____



[Notes]

Check the Resources tab for a further explanation of the Perrin sequence.


[algorithms] [arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Perrin Number
https://en.wikipedia.org/wiki/Perrin_number
In mathematics, the Perrin numbers are defined by the recurrence relation P(n) = P(n − 2) + P(n − 3) for n > 2, with initial values P(0) = 3, P(1) = 0, P(2) = 2. The se …
_________
_________
Perrin Numbers
https://everything2.com/title/Perrin+numbers
The Perrin numbers are a sequence of numbers similar to the Fibonacci numbers in that successive numbers are derived from two previous adjacent numbers, only in this ca …
_________

*/
//Your code should go here:

