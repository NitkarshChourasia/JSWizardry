/*
####  Buggy Code  ####

The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.


[Examples]

___
has_bugs(true) ➞ "Sad day."

has_bugs(false) ➞ "It's a good day."
_____



[Notes]

Don't overthink this challenge (look at the syntax and correct it).


[bugs] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Strings
https://www.javascript.com/learn/strings#:~:text=Enclosing%20quotation%20marks&text=That%20means%20strings%20containing%20single,need%20to%20use%20single%20quotes.&text=%22It's%20six%20o'clock.,to%20escape%20the%20quotation%20marks.
Are values made up of text and can contain letters, numbers, symbols, punctuation, and even emoji. Learn javascript string functions, how to insert variables into a str …
_________
_________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
if else else if
https://www.w3schools.com/js/js_if_else.asp
Use if to specify a block of code to be executed, if a specified condition is true Use else to specify a block of code to be execute....
_________
_________
Single Quotes vs. Double Quotes in Strings
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#single_quotes_vs._double_quotes
In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay ...
_________
_________
How to Use Shorthand for If/else Statement
https://bobbyhadz.com/blog/javascript-use-shorthand-for-if-else-statement
Use the ternary operator to use a shorthand for an if else statement. The ternary operator starts with a condition that is followed by a question mark ?, then a value t …
_________

*/
//Your code should go here:

function hasBugs(flag) {
    return flag ? "Sad day." : "It's a good day.";
}

if (require.main == module) {
    console.log(hasBugs(true));
    console.log(hasBugs(false));
}

// 04-09-2023
// complete.