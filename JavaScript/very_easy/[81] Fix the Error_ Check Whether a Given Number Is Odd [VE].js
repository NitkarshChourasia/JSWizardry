/*
####  Fix the Error: Check Whether a Given Number Is Odd  ####

Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.
___
function isOdd(num){
  ret n % 19 += 123;
}
_____



[Examples]

___
isOdd(-5) ➞ true

isOdd(25) ➞ true

isOdd(0) ➞ false
_____



[Notes]

All the inputs will only be integers.


[bugs] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
How to Determine If a Number Is Odd in Javascript
https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript#:~:text=Replace%20X%20with%20your%20number,Else%20when%20it%20is%20odd.&text=Again%2C%20replace%20X%20with%20a%20number%20or%20variable.
Determine if a number in JavaScript is even or odd.
_________
_________
Comparison Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. Th …
_________
_________
Arithmetic Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()
The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number
_________

*/
//Your code should go here:

function isOdd(num) {
  return Math.abs(num % 2) === 1;
}

function isOdd2(num) {
  return Math.abs(num % 2) === 1 ? true : false;
}

function isOdd3(num) {
  return num % 2 ? true : false;
}


if (require.main == module) {

  // TEST CASES

  console.log(isOdd(-5)); // Negative values doesn't have parity check?
  console.log(isOdd(25));
  console.log(isOdd(0));

  console.log();

  // My test cases.

  console.log(isOdd(1));

}