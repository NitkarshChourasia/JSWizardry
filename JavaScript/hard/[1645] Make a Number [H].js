/*
####  Make a Number  ####

In this challenge, you have to find all the subsequences of consecutive numbers that, when their numbers are added between them, are equals to the given number.
Given a positive integer n, implement a function that returns a matrix containing every sequence of consecutive numbers smaller than n, sorted ascendingly by their first term, whose sum is equal to n.


[Examples]

___
makeNumber(9) ➞ [ [2, 3, 4], [4, 5] ]

makeNumber(8) ➞ []

makeNumber(100) ➞ [ [9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22] ]
_____



[Notes]

If no sequence sum is equal to the given n, return an empty array (see example #2).


[arrays] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.from()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
for
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a bl …
_________
_________
While Statement
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________

*/
//Your code should go here:

