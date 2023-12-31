/*
####  Using Ternary Operators  ####

The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.
It is written in the format:
___
condition ? result_if_true : result_if_false
_____

Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.
For example:
___
is_nice = true

// Using ternary operator.
state = is_nice ? "nice" : "not nice"

// Equivalent code using multi-line if statements.
if (is_nice)
  state = "nice"
else
  state = "not nice"
_____

Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.


[Examples]

___
yeah_nope(true) ➞ "yeah"

yeah_nope(false) ➞ "nope"
_____



[Notes]

N/A


[conditions] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________

*/
//Your code should go here:

function yeah_nope(bool) {
  return bool ? "yeah" : "nope";
}

if (require.main == module) {
  console.log(yeah_nope(true));
  console.log(yeah_nope(false));
}

// 05-09-2023
// complete.