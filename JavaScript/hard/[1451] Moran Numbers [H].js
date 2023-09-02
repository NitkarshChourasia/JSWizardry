/*
####  Moran Numbers  ####

A Harshad number is a number which is divisible by the sum of its digits. For example, 132 is divisible by 6 (1+3+2).
A subset of the Harshad numbers are the Moran numbers. Moran numbers yield a prime when divided by the sum of their digits. For example, 133 divided by 7 (1+3+3) yields 19, a prime.
Create a function that takes a number and returns "M" if the number is a Moran number, "H" if it is a (non-Moran) Harshad number, or "Neither".


[Examples]

___
moran(132) ➞ "H"

moran(133) ➞ "M"

moran(134) ➞ "Neither"
_____



[Notes]

N/A


[algebra] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Harshad Number
https://www.youtube.com/watch?v=9zfk6urIqEc
A Harshad number in a given number base is an integer that is divisible by the sum of its digits when written in that base.
_________
_________
Moran Numbers
http://www.numbersaplenty.com/set/Moran_number/
A number n is a Moran number if n divided by the sum of its digits gives a prime number. For example, 111 is a Moran number because 111/(1+1+1) = 37 and 37 is a prime n …
_________
_________
Harshad Numbers
http://oeis.org/wiki/Harshad_numbers
In mathematics, a harshad number (or Niven number) in a given number base is an integer that is divisible by the sum of its digits when written in that base. Harshad nu …
_________
_________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________

*/
//Your code should go here:

