/*
####  Padovan Sequence  ####

In number theory, the Padovan sequence is the sequence of integers P(n) defined by the initial values:
___
P(0) = P(1) = P(2) = 1
_____

And the recurrence relation:
___
P(n) = P(n-2) + P(n-3)
_____

As with any sequence defined by a recurrence relation, Padovan numbers P(m) for m<0 can be defined by rewriting the recurrence relation as:
___
P(m) = P(m+3) - P(m+1)
_____



[Objective]

Create a function that takes two numbers, m and n, being m always negative and n always positive, and returns an array with the Padovan numbers between P(m) and P(n).


[Examples]

___
padovan(-1, 1) ➞ [0, 1, 1]

padovan(-10, 10) ➞ [2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12]

padovan(-50, 1) ➞ [-524, 245, 71, -279, 316, -208, 37, 108, -171, 145, -63, -26, 82, -89, 56, -7, -33, 49, -40, 16, 9, -24, 25, -15, 1, 10, -14, 11, -4, -3, 7, -7, 4, 0, -3, 4, -3, 1, 1, -2, 2, -1, 0, 1, -1, 1, 0, 0, 1, 0, 1, 1]
_____



[Notes]

N/A


[logic] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Padovan Sequence
https://en.wikipedia.org/wiki/Padovan_sequence
Is the sequence of integers P(n) defined by the initial values.
_________

*/
//Your code should go here:

