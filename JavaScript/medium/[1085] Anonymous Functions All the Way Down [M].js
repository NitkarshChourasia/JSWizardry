/*
####  Anonymous Functions All the Way Down  ####

Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".


[Examples]

___
lambdaDepth(0) ➞ "edabit"

lambdaDepth(1)() ➞ "edabit"

lambdaDepth(2)()() ➞ "edabit"

typeof lambdaDepth(2)() ➞ "function"
_____



[Notes]

___
*) num will always be a non-negative integer.
*) If num == 0, return "edabit".
*) If num > 0, return a function.
*) All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.
___



[functional_programming] [higher_order_functions] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Arrow Function Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
A syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow fun …
_________
_________
eval
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________

*/
//Your code should go here:

