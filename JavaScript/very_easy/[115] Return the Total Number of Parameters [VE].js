/*
####  Return the Total Number of Parameters  ####

Create a function that returns the total number of parameters passed in.


[Examples]

___
numberArgs("a", "b", "c") ➞ 3

numberArgs(10, 20, 30, 40, 50) ➞ 5

numberArgs(x, y) ➞ 2

numberArgs() ➞ 0
_____



[Notes]

___
*) How can you express the input parameter so it takes a variable number of arguments?
*) Check the Resources tab for additional info.
___



[language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
arguments.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/length
Contains the number of arguments passed to the function.
_________
_________
Rest Parameters & Spread Operator
https://javascript.info/rest-parameters-spread-operator
Many JavaScript built-in functions support an arbitrary number of arguments. For instance: Math.max(arg1, arg2, ..., argN) – returns the greatest of the arguments. Obje …
_________
_________
Parameters & Arguments in Javascript
https://codeburst.io/parameters-arguments-in-javascript-eb1d8bd0ef04
Is a parameter and an argument one and the same? Javascript is a functional language meaning that functions are the primary modular units of execution. Functions are ob …
_________
_________
arguments.length Tutorial
http://www.java2s.com/Tutorial/JavaScript/0140__Function/argumentslength.htm
The length property contains the number of arguments that were passed into the function. This number matches the number of elements in the arguments array associated wi …
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows functions to be called with a variable number of arguments.
_________

*/
//Your code should go here:

function numberArgsArguLen() {
    return arguments.length;
}

function numberArgsRestParam(...args) {
    return args.length;
}

function numberArgs(...args) {
    return [...args].length;
} // Explain this to yourself.

if (require.main == module) {
    console.log("####  Return the Total Number of Parameters  ####\n")
    // Test cases.

    console.log("Used Arguments.length\n");
    console.log(numberArgsArguLen("a", "b", "c"));
    console.log(numberArgsArguLen(10, 20, 30, 40, 50));
    console.log(numberArgsArguLen("x", "y"));
    console.log(numberArgsArguLen());

    console.log("Used Rest Parameter\n");
    console.log(numberArgsRestParam("a", "b", "c"));
    console.log(numberArgsRestParam(10, 20, 30, 40, 50));
    console.log(numberArgsRestParam("x", "y"));
    console.log(numberArgsRestParam());

    console.log("Used Spread Operator with Square bracket return\n");
    console.log(numberArgs("a", "b", "c"));
    console.log(numberArgs(10, 20, 30, 40, 50));
    console.log(numberArgs("x", "y"));
    console.log(numberArgs());
}

// 17-09-2023
// complete.
