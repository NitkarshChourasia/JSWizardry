/*
####  Repeat String  ####

Create a function that takes a string txt and a number n and returns the repeated string n number of times.
If given argument txt is not a string, return Not A String !!


[Examples]

___
repeatString("Nitkarsh", 2) ➞ "MubashirMubashir"

repeatString("Matt", 3) ➞ "MattMattMatt"

repeatString(1990, 7) ➞ "Not A String !!"
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[conditions] [language_fundamentals] [logic] [strings] 



-------------------------------------------------------------------
[Resources]
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
String.prototype.repeat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
_________
_________
Strings
https://www.w3schools.com/js/js_strings.asp
Used for storing and manipulating text.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________
_________
JavaScript String Methods
https://www.w3schools.com/js/js_string_methods.asp
String methods help you to work with strings.
_________
_________
Conditional (Ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________

*/
//Your code should go here:

"use strict"

function repeatString(txt, n) {
    if (typeof txt !== "string") {
        return "Not A String !!";
    }
    else {
        return txt.repeat(n);
    }
}

if (require.main == module) {
    console.log("####  Repeat String  ####\n")
    // Test cases.
    console.log(repeatString("Nitkarsh", 2));
    console.log(repeatString("Matt", 3));
    console.log(repeatString(1990, 7));
}


// 12-09-2023
// complete.