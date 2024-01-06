/*
####  The Fifth Argument  ####

Create a function that has some arguments and returns the type of the fifth argument. In case the arguments were less than 5, return "Not enough arguments".


[Examples]

___
fifth(1, 2, 3, 4, 5) ➞ "number"

fifth("a", 2, 3, true, "five") ➞ "string"

fifth() ➞ "Not enough arguments"
_____



[Notes]

Be warned that ES6 arrow functions (const myFunc = ()=>...) do not have their own arguments object.


[conditions] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
The arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
An Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Finding Type
https://stackoverflow.com/questions/4456336/finding-variable-type-in-javascript
In Java, you can use instanceOf or getClass() on a variable to find out its type. How do I find out a variable's type in JavaScript which isn't strongly-typed? For ex …
_________
_________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
JavaScript Rest Parameter
https://www.geeksforgeeks.org/javascript-rest-operator/
An improved way to handle function parameter, allowing us to more easily handle various input as parameters in a function. The rest parameter syntax allows us to repres …
_________

*/
//Your code should go here:

"use strict";

// Method 1: if else.
function fifthIfElse() {
    if (arguments.length >= 5) {
        return typeof arguments[4];
    }
    else {

        return "Not enough arguments";
    }
}


// Method 2: Ternary.
function fifthTernary() {
    return arguments.length >= 5 ? typeof arguments[4] : "Not enough arguments";
} // Best method in this case.


// Method 3: Switch.
function fifthSwitch() {
    switch (arguments.length) {
        case 5:
            return typeof arguments[4];
        default:
            return "Not enough arguments";
    }
}


// Method 4: Arrow.
let fifthArrow = (...args) => args.length >= 5 ? typeof args[4] : "Not enough arguments";


if (require.main == module) {
    // Title
    console.log("####  The Fifth Argument  ####");
    // Test cases.

    // Method 1: if else.
    console.log("Method 1: if else.");
    console.log(fifthIfElse(1, 2, 3, 4, 5)); // "number"
    console.log(fifthIfElse("a", 2, 3, true, "five")); // "string"
    console.log(fifthIfElse()); // "Not enough arguments"


    // Method 2: Ternary.
    console.log("Method 2: Ternary.");
    console.log(fifthTernary(1, 2, 3, 4, 5)); // "number"
    console.log(fifthTernary("a", 2, 3, true, "five")); // "string"
    console.log(fifthTernary()); // "Not enough arguments"


    // Method 3: Switch.
    console.log("Method 3: Switch.");
    console.log(fifthSwitch(1, 2, 3, 4, 5)); // "number"
    console.log(fifthSwitch("a", 2, 3, true, "five")); // "string"
    console.log(fifthSwitch()); // "Not enough arguments"

    // Method 4: Arrow.
    console.log("Method 4: Arrow.");
    console.log(fifthArrow(1, 2, 3, 4, 5)); // "number"
    console.log(fifthArrow("a", 2, 3, true, "five")); // "string"
    console.log(fifthArrow()); // "Not enough arguments"

    // End of script.
}


// 06-October-2023
// complete.