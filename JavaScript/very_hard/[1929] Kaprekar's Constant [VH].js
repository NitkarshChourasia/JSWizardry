/*
####  Kaprekar's Constant  ####

6174 is known as one of Kaprekar's constants, after the Indian mathematician D. R. Kaprekar. Number 6174 is notable for the following rule:
___
*) Take any four-digit number, using at least two different digits (leading zeros are allowed).
*) Arrange the digits in descending and then in ascending order to get two four-digit numbers, adding leading zeros if necessary.
*) Subtract the smaller number from the bigger number.
*) Go back to step 2 and repeat.
___

The above process, known as Kaprekar's routine, will always reach its fixed point, 6174, in at most 7 iterations. Once 6174 is reached, the process will continue yielding 7641 – 1467 = 6174. For example, choose 3524:
___
5432 – 2345 = 3087
8730 – 0378 = 8352
8532 – 2358 = 6174
7641 – 1467 = 6174
_____

Write a recursive function that will return the number of times it will take to get from a number to 6174 (the above example would equal 3).
___
(1)5432 – 2345 = 3087,
(2)8730 – 0378 = 8352,
(3)8532 – 2358 = 6174
_____

495 would produce the following: 4950 to 9540 - 459, 9081 to 9810 - 189, 9621 to 9621 - 1269, 8352 to 8532 - 2358 answer: 4
For a 2 digit number, the following would be produced (stating with number 10 -> 100):
100 to 100 - 1, 990 to 990 - 99, 8910 to 9810 - 189, 9621 to 9621 - 1269, 8352 to 8532 - 2358 answer: 5


[Examples]

___
kaprekar(6621) ➞ 5

kaprekar(6554) ➞ 4

kaprekar(1234) ➞ 3
_____



[Notes]

If the subtracted number is less than 1000, add an extra zero to that number. The number 1111 will equal 0000, so this number (1111) is invalid. If you're still unclear, please check the comments section.


[arrays] [numbers] [recursion] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
6174 (number)
https://en.wikipedia.org/wiki/6174_(number)
Known as Kaprekar's constant after the Indian mathematician D. R. Kaprekar. This number is notable for the following rule: Take any four-digit number, using at least tw …
_________
_________
Kaprekar Routine Online Tool
https://www.dcode.fr/kaprekar-algorithm
Tool using the Kaprekar algorithm. It uses an integer N, and arranges its digits in ascending and descending order, before subtracting them.
_________
_________
Kaprekar's Routine
https://en.wikipedia.org/wiki/Kaprekar%27s_routine
In number theory, Kaprekar's routine is an iterative algorithm that, with each iteration, takes a natural number in a given number base, creates two new numbers by sort …
_________

*/
//Your code should go here:

