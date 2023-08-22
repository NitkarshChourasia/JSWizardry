/*
####  When Will You Save a Million?  ####

You landed your dream job. They pay in geometric progression (see resources). In your first month of work, you will get your first paycheck firstMonth. For every month after, your paycheck will be multiplier times bigger than the previous paycheck.
Create a function that takes the firstMonth's paycheck and the multiplier and returns the number of months it took for you to save up more than one million. The problem assumes you save 100% of every paycheck.


[Examples]

___
millionInMonth(10, 2) ➞ 17

millionInMonth(100, 1.01) ➞ 464

millionInMonth(50, 100) ➞ 4
// Month 1 = 50 (paycheck 50)
// Month 2 = 5050 (paycheck 5,000 + 50 already saved)
// Month 3 = 505050 (paycheck 500,000 + 5,050 already saved)
// Month 4 = 50505050 (paycheck 50,000,000 + 505,050 already saved)
_____



[Notes]

___
*) Don't forget to return the result in the number of months.
*) Return when your savings are greater than 1,000,000.
___



[algebra] [loops] [math] 



-------------------------------------------------------------------
[Resources]
_________
Geometric Progression
https://en.wikipedia.org/wiki/Geometric_progression
A sequence of non-zero numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the common ratio. For example …
_________

*/
//Your code should go here:

