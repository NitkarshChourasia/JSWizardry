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

function longBurp(num) {
    if num >= 1{
        return `Bu$(r.repeat(num))p`;
    }
    return "Invalid input";
}

function longBurp(num) {
    return num >= 1 ? `Bu$(r.repeat(num))p` : "Invalid input";
}

let longBurp = (num) => num >= 1 ? `Bu$(r.repeat(num))p` : "Invalid input";

if (require.main == module) {
    // Title.
    console.log("####  Burrrrrrrp  ####");
    // Test cases.

    // End of script.
}
