/*
####  Ruth and Aaron  ####

Two consecutive integers a and b are considered a Ruth-Aaron pair if the sum of the prime factors of a is equal to the sum of the prime factors of b.
Two definitions exist:

___
P24 = [2, 3]  // sum = 5

P25 = [5]  // sum = 5, equal to 24

P8 = [2]  // sum = 2

P9 = [3]  // sum = 3
_____


___
P24 = [2, 2, 2, 3]  // sum = 9

P25 = [5, 5]  // sum = 10

P8 = [2, 2, 2]  // sum = 6

P9 = [3, 3]  // sum = 6, equal to 8
_____

If two consecutive numbers have only distinct prime factors and have equal sums of prime factors, they are considered Ruth-Aaron pairs by both definitions.
___
P77 = [7, 11]  // sum = 18

P78 = [2, 3, 13]  // sum = 18
_____

Create a function that takes a number n and returns:



[Examples]

___
ruthAaron(5) ➞ ["Ruth", 3]

ruthAaron(25) ➞ ["Aaron", 1]

ruthAaron(9) ➞ ["Aaron", 2]

ruthAaron(11) ➞ false
_____



[Notes]

N/A


[math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Ruth–Aaron Pair
https://en.wikipedia.org/wiki/Ruth%E2%80%93Aaron_pair
In mathematics, a Ruth–Aaron pair consists of two consecutive integers (e.g., 714 and 715) for which the sums of the prime factors of each integer are equal.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________

*/
//Your code should go here:

