/*
####  Ulam Sequence  ####

The Ulam sequence starts with:
___
ulam = [1, 2]
_____

The next number in the sequence is the smallest positive number that is equal to the sum of 2 distinct numbers (that are already in the sequence) exactly one way. Trivially, this is 3, as there are only 2 numbers in the starting sequence.
___
ulam = [1, 2, 3]
_____

The next number is 4, which is the sum of 3+1. 4 is also 2+2, but this equation does not count, as the 2 addends have to be distinct.
___
ulam = [1, 2, 3, 4]
_____

The next number cannot be 5, as 5 = 1 + 4, but also 5 = 2 + 3. There should only be one way to make an Ulam number from 2 distinct addends found in the sequence. The next number is 6 (2+4). There are 2 ways to make 7 (1+6 or 3+4), so the next is 8 (2+6). And so on.
___
ulam = [1, 2, 3, 4, 6, 8, 11, 13, 16, 18, 26, 28, 36, 38, 47, 48, 53, …]
_____

Create a function that takes a number n and returns the nth number in the Ulam sequence.


[Examples]

___
ulam(4) ➞ 4

ulam(9) ➞ 16

ulam(206) ➞ 1856
_____



[Notes]

N/A


[algebra] [logic] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Ulam Number
https://en.wikipedia.org/wiki/Ulam_number
An Ulam number is a member of an integer sequence devised by and named after Stanislaw Ulam, who introduced it in 1964.[1] The standard Ulam sequence (the (1, 2)-Ulam s …
_________
_________
Ulam Number Sequence
https://www.geeksforgeeks.org/ulam-number-sequence/
An Ulam number is the member of an Integer sequence that starts with the term U1 = 1 and U1 = 2 and then for every n > 2, Un is defined is smallest positive integer gre …
_________

*/
//Your code should go here:

