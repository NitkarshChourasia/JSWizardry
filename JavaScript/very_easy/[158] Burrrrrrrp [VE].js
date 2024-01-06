/*
####  Burrrrrrrp  ####

Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.


[Examples]

___
longBurp(3) ➞ "Burrrp"

longBurp(5) ➞ "Burrrrrp"

longBurp(9) ➞ "Burrrrrrrrrp"
_____



[Notes]

___
*) Expect num to always be >= 1.
*) Remember to use a capital "B".
*) Don't forget to return the result.
___



[math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Template Literals (template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
String literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
String.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
_________
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser. Read about breaks in a later chapte …
_________
_________
Expressions and Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String
In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another s …
_________

*/
//Your code should go here:

"use strict";

function longBurpSFuncIf(num) {
    if (num >= 1) {
        return `Bu${"r".repeat(num)}p`;
    }
    return "Invalid input";
}

function longBurpSFucnTernary(num) {
    return num >= 1 ? `Bu$("r".repeat(num))p` : "Invalid input";
}

let longBurpArrowFuncTernary = (num) => num >= 1 ? `Bu$("r".repeat(num))p` : "Invalid input";

if (require.main == module) {
    // Title.
    console.log("####  Burrrrrrrp  ####");
    // Test cases.

    // Method 1: Using standard function and if statement.

    console.log("Method 1: Using standard function and if statement.");
    console.log(longBurpSFuncIf(3)); // Burrrp
    console.log(longBurpSFuncIf(5)); // Burrrrrp
    console.log(longBurpSFuncIf(9)); // Burrrrrrrrrp
    // Invalid input.
    console.log(longBurpSFuncIf(0)); // Invalid input

    // Method 2: Using standard function and ternary operator.

    console.log("Method 2: Using standard function and ternary operator.");
    console.log(longBurpSFucnTernary(3)); // Burrrp
    console.log(longBurpSFucnTernary(5)); // Burrrrrp
    console.log(longBurpSFucnTernary(9)); // Burrrrrrrrrp
    // Invalid input.
    console.log(longBurpSFucnTernary(0)); // Invalid input

    // Method 3: Using arrow function and ternary operator.
    console.log("Method 3: Using arrow function and ternary operator.");
    console.log(longBurpArrowFuncTernary(3)); // Burrrp
    console.log(longBurpArrowFuncTernary(5)); // Burrrrrp
    console.log(longBurpArrowFuncTernary(9)); // Burrrrrrrrrp
    // Invalid input.
    console.log(longBurpArrowFuncTernary(0)); // Invalid input

    // End of script.
}

// 26-October-2023
// complete.