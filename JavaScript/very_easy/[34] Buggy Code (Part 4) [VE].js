/*
####  Buggy Code (Part 4)  ####

Emmy has written a function that returns a greeting to users. However, she's in love with Nitkarsh, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
Can you help her?


[Examples]

___
greeting("Matt") ➞ "Hello, Matt!"

greeting("Helen") ➞ "Hello, Helen!"

greeting("Nitkarsh") ➞ "Hello, my Love!"
_____



[Notes]

___
*) READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
*) Don't overthink this challenge; it's not supposed to be hard.
___



[bugs] [conditions] [strings]



-------------------------------------------------------------------
[Resources]
_________
Sequencing Order of Commands in JavaScript
https://stackoverflow.com/questions/21171479/sequencing-order-of-commands-in-javascript
Inside my demo function, I have a fadeout function. This function animate an image by fading it out and it runs for few seconds. I want an alert to run only after this …
_________
_________
Execute Statement After Return Statement in JavaScript
https://stackoverflow.com/questions/14102912/execute-statement-after-return-statement-in-javascript
The return statement ends a function, you cannot execute code after it.
_________
_________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy f …
_________
_________
Use Curly Brackets to Use Variables Within a String Without Concatenating
https://www.codegrepper.com/code-examples/javascript/javascript+string+concatenation+using+curly+brackets
Use curly brackets to use variables within a string without concatenating.
_________
_________
For Simple "If, Then" Statements, Make a Habit of Using Ternary Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Using conditional ternary operator, something that would take 3 or 4 lines of code can be written in a single line. Its good practice to rewrite any if-then statement i …
_________

*/
//Your code should go here:

function greeting(name) {
    return name === "Nitkarsh" ? "Hello, my Love!" : `Hello, ${name}!`;
}


if (require.main == module) {

    console.log(greeting("Matt"));
    console.log(greeting("Helen"));
    console.log(greeting("Nitkarsh"));
}


// complete.