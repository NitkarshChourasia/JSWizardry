/*
####  Is the Number Even or Odd?  ####

Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.


[Examples]

___
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even"

isEvenOrOdd(19) ➞ "odd"
_____



[Notes]

___
*) Dont forget to return the result.
*) Input will always be a valid integer.
*) Expect negative integers (whole numbers).
*) Tests are case sensitive (return "even" or "odd" in lowercase).
___



[conditions] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Remainder - Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
Returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
_________
_________
Testing Whether a Value Is Odd or Even
https://stackoverflow.com/questions/6211613/testing-whether-a-value-is-odd-or-even?answertab=votes#tab-top
That is OK if n is with certain parameters, but fails for many scenarios. So I set out to create robust functions that deliver correct results for as many scenarios as …
_________
_________
Arrow Functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. Arrow functions are always …
_________
_________
Conditional (Ternary) Operator
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.
_________
_________
What is an even or an odd number?
https://www.mathsisfun.com/numbers/even-odd.html
Even: Any integer that can be divided exactly by 2 is an even number. Odd: Any integer that cannot be divided exactly by 2 is an odd number.
_________
_________
Check if a Number is Odd or Even in JavaScript
https://subinsb.com/check-if-number-is-odd-or-even-in-php-javascript/
Odd numbers and even numbers are used in programming languages. To check if a number is even or odd needs brilliant code. In this post, you will be introduced to checkN …
_________

*/
//Your code should go here:

function isEvenOrOdd(number) {
    return number % 2 ? "odd" : "even";
}


if (require.main == module) {
    console.log(isEvenOrOdd(3));
    console.log(isEvenOrOdd(146));
    console.log(isEvenOrOdd(19));
}

// 08-09-2023
// complete.