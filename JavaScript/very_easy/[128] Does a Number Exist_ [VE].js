/*
####  Does a Number Exist?  ####

Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.


[Examples]

___
validStrNumber("3.2") ➞ true

validStrNumber("324") ➞ true

validStrNumber("54..4") ➞ false

validStrNumber("number") ➞ false
_____



[Notes]

Accept numbers such as .5 and 0003.


[language_fundamentals] [numbers] [validation]



-------------------------------------------------------------------
[Resources]
_________
isNaN()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
Determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined i …
_________
_________
Number isNaN() Method
https://www.w3schools.com/jsref/jsref_isnan_number.asp
Is different from the global isNaN() function. The global isNaN() function converts the tested value to a Number, then tests it.
_________
_________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Takes truth to falsity and vice versa. It is typically used with boolean (logical) values. When used with non-Boolean values, it returns false if its single opera …
_________

*/
//Your code should go here:

"use strict";

function validStrNumber(n) {
    return !isNaN(n);
}

// Understanding these Nan functions, much more clearly.

function validStrNumberNumdotNan(n) {
    return !Number.isNaN(Number(n));
}

if (require.main == module) {

    console.log("####  Does a Number Exist?  ####");
    // Test cases.

    console.log("Method 1: isNaN()");
    console.log(validStrNumber("3.2")); // true
    console.log(validStrNumber("324")); // true
    console.log(validStrNumber("54..4")); // false
    console.log(validStrNumber("number")); // false

    console.log("Method 2: Number.isNaN()");
    console.log(validStrNumberNumdotNan("3.2")); // true
    console.log(validStrNumberNumdotNan("324")); // true
    console.log(validStrNumberNumdotNan("54..4")); // false
    console.log(validStrNumberNumdotNan("number")); // false


    console.log(); // Blank line for readability.
    console.log("Custom test cases:")
    // Custom test cases.

    console.log("Method 1: isNaN()");
    console.log(validStrNumber("0.5")); // true
    console.log(validStrNumber("0003")); // true

    console.log("Method 2: Number.isNaN()");
    console.log(validStrNumberNumdotNan("0.5")); // true
    console.log(validStrNumberNumdotNan("0003")); // true

}



// 17-09-2023
// complete.