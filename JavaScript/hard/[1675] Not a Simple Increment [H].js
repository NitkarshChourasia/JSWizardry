/*
####  Not a Simple Increment  ####

Create a function that takes three integer parameters: a number n, number of iterations, and step. You have to implement an algorithm, which increases the given number as explained below:
___
n = 143726, iterations = 16, step = 3
simpleIncrement(n, iterations, step) ➞ 243826
_____

Step 1: We start from the first digit and increment the 4th digit because the step is 3.
___
s - Starting Position
* - current increased position

Position: s - - - - - ➞ - - - * - -
Number:   1 4 3 7 2 6 ➞ 1 4 3 8 2 6
_____

Step 2: Repeat step #1 with the updated starting position.
___
s - Starting Position
* - current increased position

Position: - - - s - - ➞ * - - - - -
Number:   1 4 3 8 2 6 ➞ 2 4 3 8 2 6
_____

___
*) Remember, if the number overflows, the current position gets shifted to the right.
___

___
9 9 9 ➞ - - p   // before overflow position will be at 3rd digit
1 0 0 0 ➞ - - - p   // after overflow position will be at 4th digit
_____

___
*) More examples on overflow:
___

___
9 ➞ 10
799 ➞ 800 (If you increased the second 9) or 809 (if you increased the first 9)
99000 ➞ 100000 (If you increased the second 9) or 109000 (if you increased the first 9)
_____



[Examples]

___
simpleIncrement(1673, 2, 16) ➞ 3673

simpleIncrement(99, 99, 99) ➞ 198

simpleIncrement(99, 99, 98) ➞ 4734
_____



[Notes]

N/A


[algorithms] [logic] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
Returns a string representing the specified object.
_________
_________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________

*/
//Your code should go here:

