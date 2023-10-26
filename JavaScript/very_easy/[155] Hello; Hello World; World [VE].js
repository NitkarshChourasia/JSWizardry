/*
####  Hello; Hello World; World  ####

Write a function that takes an integer and:
___
*) If the number is a multiple of 3, return "Hello".
*) If the number is a multiple of 5, return "World".
*) If the number is a multiple of both 3 and 5, return "Hello World".
___



[Examples]

___
helloWorld(3) ➞ "Hello"

helloWorld(5) ➞ "World"

helloWorld(15) ➞ "Hello World"
_____



[Notes]

Don't forget to return the result.


[conditions] [math] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________
_________
Breaking Down the Shortest Possible FizzBuzz Answer
https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
If you’re new to programming, FizzBuzz is a classic programming task, usually used in software development interviews to determine if a candidate can code. Here’s the c …
_________
_________
Fizz Buzz Test Lore
http://wiki.c2.com/?FizzBuzzTest
The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper …
_________
_________
Conditional Statements
https://www.geeksforgeeks.org/else-statement-javascript/#:~:text=if%2Delse%3A%20The%20if%20statement,if%20the%20condition%20is%20false.
Decision Making in programming is similar to decision making in real life. In programming also we face some situations where we want a certain block of code to be execu …
_________

*/
//Your code should go here:

"use strict";

// Method 1: ternary operators (f).
function helloWorldTernary(num) {
    return num % 3 === 0 && num % 5 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : num % 5 === 0 ? "World" : `Input ${num} is invalid for this function.`;
}

// Method 2: if-elif-else statements (f).
function helloWorldIfElifElse(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Hello World";
    }
    else if (num % 3 === 0) {
        return "Hello";
    }
    else if (num % 5 === 0) {
        return "World";
    }
    else {
        return `Input ${num} is invalid for this function.`;
    }
}


// Method 3: switch statement (f).
function helloWorldSwitch(num) {
    switch (true) {
        case num % 3 === 0 && num % 5 === 0:
            return "Hello World";
        case num % 3 === 0:
            return "Hello";
        case num % 5 === 0:
            return "World";
        default:
            return `Input ${num} is invalid for this function.`;
    }
}


// Method 4: Arrow function and ternary operators. 
let helloWorldArrow = (num) => num % 3 === 0 && num % 5 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : num % 5 === 0 ? "World" : `Input ${num} is invalid for this function.`;

if (require.main == module) {
    // Title.
    console.log("####  Hello; Hello World; World  ####");
    // Test cases.

    console.log("Method 1: ternary operators (f).");
    console.log(helloWorldTernary(3)); // Hello
    console.log(helloWorldTernary(5)); // World
    console.log(helloWorldTernary(15)); // Hello World
    console.log(helloWorldTernary(2)); // 2 Invalid for this function.


    console.log("Method 2: if-elif-else statements (f).");
    console.log(helloWorldIfElifElse(3)); // Hello
    console.log(helloWorldIfElifElse(5)); // World
    console.log(helloWorldIfElifElse(15)); // Hello World
    console.log(helloWorldIfElifElse(2)); // 2 Invalid for this function.


    console.log("Method 3: switch statement (f).");
    console.log(helloWorldSwitch(3)); // Hello
    console.log(helloWorldSwitch(5)); // World
    console.log(helloWorldSwitch(15)); // Hello World
    console.log(helloWorldSwitch(2)); // 2 Invalid for this function.


    console.log("Method 4: Arrow function and ternary operators.");
    console.log(helloWorldArrow(3)); // Hello
    console.log(helloWorldArrow(5)); // World
    console.log(helloWorldArrow(15)); // Hello World
    console.log(helloWorldArrow(2)); // 2 Invalid for this function.

    // End of script.
}

// 26-October-2023
// complete.