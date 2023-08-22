/*
####  Persistence  ####

If you take an integer and form the product of its individual digits, you get a smaller number. Keep doing this and eventually you end up with a single digit.
The number of steps it takes to reach this point is known as the integer's multiplicative persistence. For example, 347 has a persistence of 3: 3*4*7 = 84, 8*4 = 32, 3*2 = 6.
Devise a function that returns the persistence of an integer.


[Examples]

___
persistence(9) ➞ 0

persistence(12) ➞ 1

persistence(6788) ➞ 6

persistence(678852) ➞ 2
_____



[Notes]

___
*) The smallest number with persistence 11 is 277777788888899.
*) A number has never been found, no matter how large, that has a persistence greater than 11.
___



[math] [numbers] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Turns a String into an array of strings, by separating the string at each instance of a specified separator string.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the …
_________

*/
//Your code should go here:

