/*
####  Check if an Integer is Divisible By Five  ####
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.


[Examples]

___
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Remainder (%)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
The remainder operator returns the remainder left over when one operand is divided by a second operand.
_________
_________
Number.isInteger()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Determines whether the passed value is an integer.
_________
_________
JavaScript Comparison and Logical Operators
https://www.w3schools.com/js/js_comparisons.asp
If the variable age is a value below 18, the value of the variable voteable 
 will be "Too young", otherwise the value of voteable will be "Old enough".
_________
_________
JavaScript Algorithm: Can We Divide It?
https://levelup.gitconnected.com/javascript-algorithm-can-we-divide-it-c86842cb5657
We are going to write a function that returns true or false if the parameter "number" is divisible by both a and b.
_________
_________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can …
_________
_________
Divisibility Calculator
https://www.mathwarehouse.com/arithmetic/numbers/divisibility-rules-and-tests.php
Divisibility tests and rules explained, defined and with examples for divisibility by 2,3,4,5,6,8,9,10, and 11.
_________
_________
Test If a Number Is a Power of 2
https://www.w3resource.com/javascript-exercises/javascript-math-exercise-13.php
Write a JavaScript function to test if a number is a power of 2.
_________

*/
//Your code should go here:


function DivisibleByFive(number) {
    return number % 5 === 0;
}

if (require.main == module) {
    console.log(DivisibleByFive(5));
    console.log(DivisibleByFive(-55));
    console.log(DivisibleByFive(37));
}


// 04 - 09 - 2023
// complete.