/*
####  Smiley Faces :)  ####

You will be given a string of characters containing only the following characters: ():
Create a function that returns a number based on the number of sad and smiley faces there are.
___
*) The happy faces :) and (: are worth 1.
*) The sad faces :( and ): are worth -1.
___



[Working Example]

___
happinessNumber(":):(") ➞ -1
// The first 2 characters are :)        +1      Total: 1
// The next 2 are ):                    -1      Total: 0
// The last 2 are :(                    -1       Total: -1
_____



[Examples]

___
happinessNumber(":):(") ➞ -1

happinessNumber("(:)") ➞ 2

happinessNumber("::::") ➞ 0
_____



[Notes]

All test cases will be valid.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Logical OR (||)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
The logical OR (||) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. It is typically used with Boolean ( …
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Regex Tester and Debugger
https://regex101.com/
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________

*/
//Your code should go here:

