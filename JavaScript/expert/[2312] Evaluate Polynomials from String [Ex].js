/*
####  Evaluate Polynomials from String  ####

You will be given a polynomial expression in string form. The expression will contain any of the following operations, written using standard mathematical notation for a single variable, "x", as illustrated in the examples below:
___
*) addition: x + 1
*) subtraction: x – 2
*) multiplication: 3x
*) division: x / 4
*) exponentation: x^5
*) brackets: x(x + 1)
___

Your task is to write a function that can evaluate such a polynomial for a given value of x. You will receive two arguments: the polynomial string and the input number.
If the mathematical expression contains an error, you should return "invalid".


[Examples]

___
evalPolynomial("x+1", 5) ➞ 6

evalPolynomial("5x^2", 3) ➞ 45

evalPolynomial("(x(x+1))/2", 4) ➞ 10

evalPolynomial("4(x + 3))/2", 5) ➞ "invalid"
// Invalid because parentheses not balanced.
_____



[Notes]

The string will not contain spaces.


[algebra] [strings] 



-------------------------------------------------------------------
[Resources]
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________

*/
//Your code should go here:

