/*
####  Multi-division  ####

Create a function, that will for a given a, b, c, do the following:
___
*) Add a to itself b times.
*) Check if the result is divisible by c.
___



[Examples]

___
abcmath(42, 5, 10) ➞ false
// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
// 1344 is not divisible by 10

abcmath(5, 2, 1) ➞ true

abcmath(1, 2, 3) ➞ false
_____



[Notes]

___
*) In the first step of the function, a doesn't always refer to the original a.
*) "if the result is divisible by c", means that if you divide the result and c, you will get an integer (5, and not 4.5314).
*) The second test is correct.
___



[algebra] [loops] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element.
_________
_________
While Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
_________

*/
//Your code should go here:

