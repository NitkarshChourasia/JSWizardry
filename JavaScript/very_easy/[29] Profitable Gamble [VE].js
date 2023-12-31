/*
####  Profitable Gamble  ####

Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.
To illustrate:
___
profitableGamble(0.2, 50, 9)
_____

... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.


[Examples]

___
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true
_____



[Notes]

A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.


[conditions] [math] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value. The standard arithmetic operators are a …
_________
_________
Arithmetic Operators
https://www.w3schools.com/js/js_arithmetic.asp
A typical arithmetic operation operates on two numbers.
_________
_________
Arrow Function
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
if-else and else-if
https://www.w3schools.com/js/js_if_else.asp
Very often when you write code, you want to perform different actions for different decisions. You can use conditional statements in your code to do this. Use if to spe …
_________

*/
//Your code should go here:


function profitableGamble(prob, prize, pay) {
    return (prob * prize) > pay;
}

if (require.main == module) {
    console.log(profitableGamble(0.2, 50, 9))
    console.log(profitableGamble(0.9, 1, 2))
    console.log(profitableGamble(0.9, 3, 2))
}

// complete.