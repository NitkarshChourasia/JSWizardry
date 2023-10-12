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

function helloWorld(num) {
    return num % 3 === 0 && num % 5 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : num % 5 === 0 ? "World" : `${num} Invalid for this function.`;
}

function helloWorld(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Hello World";
    }
    elif(num % 3 === 0) {
        return "Hello";
    }
    elif(num % 5 === 0) {
        return "World";
    }
    else {
        return `${num} Invalid for this function.`;
    }
}

function helloWorld(num) {
    switch (num) {
        case num % 3 === 0 && num % 5 === 0:
            return "Hello World";
        case num % 3 === 0:
            return "Hello";
        case num % 5 === 0:
            return "World";
        default:
            return `${num} Invalid for this function.`;
    }
}


let helloWorld = (num) => num % 3 === 0 && num % 5 === 0 ? "Hello World" : num % 3 === 0 ? "Hello" : num % 5 === 0 ? "World" : `${num} Invalid for this function.`;

if (require.main == module) {
    // Title.
    console.log("####  Hello; Hello World; World  ####");
    // Test cases.

    // End of script.
}