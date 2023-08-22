/*
####  Digital Egomania: the Self-Describing Numbers  ####

In this challenge, you have to establish if a given number is self-describing. To be self-describing, a positive number must have an even quantity of digits, because it has to be split into separated pairs of adjacent digits x and y, and each pair can be interpreted as a declaration: among the digits of the number, there are x instances of the digit equal to y.
If we take as an example the self-describing number 10123331, we can see how it has an even quantity of digits and it can be split into four pairs:
___
*) [1, 0] ➞ This pair declares that among the digits of the number there is 1 instance of 0
*) [1, 2] ➞ This pair declares that among the digits of the number there is 1 instance of 2
*) [3, 3] ➞ This pair declares that among the digits of the number there are 3 instances of 3
*) [3, 1] ➞ This pair declares that among the digits of the number there are 3 instances of 1
___

If every "declaration" represented by the pairs is true (as in the above example), then the number is self-describing.
Given a non-negative integer num, implement a function that returns true if num is a self-describing number, or false if it's not.


[Examples]

___
isSelfDescribing(10123331) ➞ true
// See the Instructions

isSelfDescribing(224444) ➞ true
// Pair [2, 2] is true (two times 2 into num)
// Pair [4, 4] is true (four times 4 into num)
// Pair [4, 4] is true (same as previous)

isSelfDescribing(2211) ➞ false
// Pair [2, 2] is true (two times 2 into num)
// Pair [1, 1] is false! It declares: one time 1 into num...
// ...but 2211 has two instances of 1 among its digits

isSelfDescribing(333) ➞ false
// Odd quantity of digits, it can't be splitted
_____



[Notes]

___
*) Pairs can be repeated (see example #2), but they have to be true in any case.
*) Remember to consider the totality of the digits of the number, when checking if a pair represents a true declaration (see example #3).
*) You can expect always valid non-negative integers as input.
___



[arrays] [conditions] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string/match
Retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Self Describing Numbers
http://www.numbersaplenty.com/set/self-describing_number/
A number $n$ is called self-describing if it has an even number of digits, so that the digits can be divided into adjacent pairs $n=q_1d_1, q_2d_2, dots,q_kd_k$ and …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

