/*
####  First Class, Second Class and Third Class Levers  ####

Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.


Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.


[Examples]

___
determineLever(["e", "f", "l"]) ➞ "first class lever"

determineLever(["e", "l", "f"]) ➞ "second class lever"

determineLever(["f", "e", "l"]) ➞ "third class lever"
_____



[Notes]

A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.


[arrays] [conditions] [objects] [physics] 



-------------------------------------------------------------------
[Resources]
_________
Template literals (Template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________
_________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.
_________
_________
How do I compare two arrays in JavaScript?
https://www.30secondsofcode.org/blog/s/javascript-array-comparison
Comparing two arrays in JavaScript using either the loose or strict equality operators (== or ===) will most often result in false, even if the two arrays contain the s …
_________

*/
//Your code should go here:

"use strict";

// Method 1 - Using if else if else statement.
function determineLeverIfElse(arr) {
    if (arr[1] === "f") {
        return "first class lever";
    } else if (arr[2] === "f") {
        return "second class lever";
    } else {
        return "third class lever";
    }
}


// Method 2 - Using ternary operator in function.
function determineLeverTernary(arr) {
    return arr[1] === "f" ? "first class lever" : arr[2] === "f" ? "second class lever" : "third class lever";
}

// Method 3 - Using ternary operator with indexOf() method in function.
function determineLeverTernaryIndexOf(arr) {
    return arr.indexOf("f") === 1 ? "first class lever" : arr.indexOf("f") === 2 ? "second class lever" : "third class lever";
}

function determineLever(arr) {
    let arrStr = arr.join("").toLowerCase();
    const leverTypeObj = { efl: "first class lever", elf: "second class lever", fel: "third class lever" };
    return leverTypeObj[arrStr];
} // Best way in my opinion.

if (require.main == module) {
    console.log("#### First Class, Second Class and Third Class Levers  ####\n");
    // Test cases.

    // Method 1 - Using if else if else statement.
    console.log("Method 1 - Using if else if else statement.");
    console.log(determineLeverIfElse(["e", "f", "l"]));
    console.log(determineLeverIfElse(["e", "l", "f"]));
    console.log(determineLeverIfElse(["f", "e", "l"]));
    console.log(); // Blank line for readability.

    // Method 2 - Using ternary operator in function.
    console.log("Method 2 - Using ternary operator in function.");
    console.log(determineLeverTernary(["e", "f", "l"]));
    console.log(determineLeverTernary(["e", "l", "f"]));
    console.log(determineLeverTernary(["f", "e", "l"]));
    console.log(); // Blank line for readability.

    // Method 3 - Using ternary operator with indexOf() method in function.
    console.log("Method 3 - Using ternary operator with indexOf() method in function.");
    console.log(determineLeverTernaryIndexOf(["e", "f", "l"]));
    console.log(determineLeverTernaryIndexOf(["e", "l", "f"]));
    console.log(determineLeverTernaryIndexOf(["f", "e", "l"]));
    console.log(); // Blank line for readability.



    // Method 4 - Using object and join() method in function for result output, the best way, here, in my opinion.
    console.log("Method 4 - Using obj and .join() method for result output.");
    console.log(determineLever(["e", "f", "l"]));
    console.log(determineLever(["e", "l", "f"]));
    console.log(determineLever(["f", "e", "l"]));
    console.log(); // Blank line for readability.

    // console.log(); // Blank line for readability.
    // Custom test cases.

    // Method 4 - Using object and join() method in function for result output, the best way, here, in my opinion.
    console.log("Custom test cases:\n"); // Blank line for readability.
    console.log("Method 4 - Using obj and .join() method for result output.");
    console.log(determineLever(["E", "F", "L"]));
    console.log(determineLever(["E", "L", "F"]));
    console.log(determineLever(["F", "E", "L"]));
}

// 21-09-2023
// complete.