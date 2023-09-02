/*
####  Weird Numbers  ####

A weird number is a natural number that is abundant but not semiperfect. An abundant number is a number for which the sum of its proper divisors is greater than the number itself. A positive divisor of n which is different from n is called a proper divisor of n. A semiperfect number is a natural number n that is equal to the sum of all or some of its proper divisors.


[Objective]

Create a function that takes a number as an argument and returns:
___
*) If the number is prime and not abundant.
*) If the number is not abundant.
*) If the number is abundant but not weird.
*) If the number is weird.
___



[Examples]

___
weird(1) ➞ "1 is not abundant because the sum of its proper divisors - no proper divisors - is 0."

weird(2) ➞ "2 is prime and not abundant."

weird(9) ➞ "9 is not abundant because the sum of its proper divisors 1, 3 is 4."

weird(12) ➞ "12 is abundant but not weird because it can be obtained from the sum of its proper divisors: 2, 4, 6."

weird(70) ➞ "70 is weird."
_____



[Notes]

___
*) The number will always be greater than 0.
*) If the number is abundant, print the proper divisors with which you get the number, always running through the divisors from the smallest to the biggest, covering all possible combinations from the smallest possible lenght to the biggest possible lenght.
___



[math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Abundant Number
https://en.wikipedia.org/wiki/Abundant_number
Is a number that is smaller than the sum of its proper divisors. The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 …
_________
_________
Weird Number
https://en.wikipedia.org/wiki/Weird_number#:~:text=In%20number%20theory%2C%20a%20weird,sums%20to%20the%20number%20itself.
Is a natural number that is abundant but not semiperfect. In other words, the sum of the proper divisors (divisors including 1 but not itself) of the number is greater …
_________

*/
//Your code should go here:

