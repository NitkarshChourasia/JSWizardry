/*
####  Collatz Conjecture  ####

A Collatz sequence is generated like this. Start with a positive number. If it's even, halve it. If it's odd, multiply it by three and add one. Repeat the process with the resulting number. The Collatz Conjecture is that every sequence eventually reaches 1 (continuing past 1 just results in an endless repeat of the sequence: 4, 2, 1).
The length of the sequence from starting number to 1 varies widely.
Create a function that takes a number as an argument and returns an array of two elements — the number of steps in the Collatz sequence of the number, and the highest number reached.


[Examples]

___
collatz(2) ➞ [2, 2]
// seq = [2, 1]

collatz(3) ➞ [8, 16]
// seq = [3, 10, 5, 16, 8, 4, 2, 1]

collatz(7) ➞ [17, 52]
// seq = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]

collatz(8) ➞ [4, 8]
// seq = [8, 4, 2, 1]
_____



[Notes]

(Improbable) Bonus: Find a positive starting number that doesn't reach 1, and score a place in Math history plus a cash prize.


[control_flow] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
while
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________

*/
//Your code should go here:

