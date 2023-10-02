/*
####  AND, OR and NOT  ####

You will need to write three unfinished logic gates. Continue to write the three logic gates: AND, OR, and NOT.


[Examples]

___
AND(1, 1) ➞ 1
AND(0, 0) ➞ 0

OR(1, 0) ➞ 1
OR(1, 1) ➞ 1

NOT(0) ➞ 1
NOT(1) ➞ 0
_____



[Notes]

Check the Resources tab for some help.


[conditions] [logic] 



-------------------------------------------------------------------
[Resources]
_________
Unary Plus Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
Precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
_________
_________
Inverter (logic gate)
https://en.wikipedia.org/wiki/Inverter_(logic_gate)
In digital logic, an inverter or NOT gate is a logic gate which implements logical negation. The truth table is shown on the right.
_________
_________
OR gate
https://en.wikipedia.org/wiki/OR_gate
Is a digital logic gate that implements logical disjunction – it behaves according to the adjacent truth table. A HIGH output (1) results if one or both the inputs to …
_________
_________
Bitwise
https://www.w3schools.com/js/js_bitwise.asp
JavaScript stores numbers as 64 bits floating point numbers, but all bitwise 
 operations are performed on 32 bits binary numbers.
_________
_________
AND gate
https://en.wikipedia.org/wiki/AND_gate
Is a basic digital logic gate that implements logical conjunction - it behaves according to the truth table to the right. A HIGH output(1) results only if all the input …
_________
_________
Logic Gates, Truth Tables and Boolean Algebra
https://www.youtube.com/watch?v=JQBRzsPhw2w
This electronics video provides a basic introduction into logic gates, truth tables, and simplifying boolean algebra expressions. It discusses logic gates such as the …
_________
_________
Logical Operators and Comparison Operators
https://www.programiz.com/javascript/comparison-logical
A guide on how to structure comparison operators and logical operators...
_________
_________
Logic Gates
https://www.geeksforgeeks.org/logic-gates-in-python/
Is an elementary building block of any digital circuits. It takes one or two inputs and produces output based on those inputs. Outputs may be high (1) or low (0). Logic …
_________

*/
//Your code should go here:

"use strict";



let ANDArrow = (a, b) => a && b;

let ORArrow = (a, b) => a || b;

let NOTArrow = (a) => a == true ? 0 : 1;



function ANDFunc(a, b) {
    return a && b;
}

function ORFunc(a, b) {
    return a || b;
}

function NOTFunc(a) {
    return !a;
}

function NOTFunc(a) {
    return a == true ? 0 : 1;
}


if (require.main == module) {
    // Title.
    console.log("####  AND, OR and NOT  ####");
    // Test cases.
    // Logic gates implemented with Arrow functions.
    console.log("ANDArrow function");
    console.log(ANDArrow(1, 1)); // 1
    console.log(ANDArrow(0, 0)); // 0
    console.log(ANDArrow(1, 0)); // 0

    console.log("ORArrow function");
    console.log(ORArrow(1, 0)); // 1
    console.log(ORArrow(1, 1)); // 1
    console.log(ORArrow(0, 0)); // 0

    console.log("NOTArrow function");
    console.log(NOTArrow(0)); // 1
    console.log(NOTArrow(1)); // 0

    // Logic gates implemented with functions.

    console.log("ANDFunc function");
    console.log(ANDFunc(1, 1)); // 1
    console.log(ANDFunc(0, 0)); // 0
    console.log(ANDFunc(1, 0)); // 0

    console.log("ORFunc function");
    console.log(ORFunc(1, 0)); // 1
    console.log(ORFunc(1, 1)); // 1
    console.log(ORFunc(0, 0)); // 0

    console.log("NOTFunc function");
    console.log(NOTFunc(0)); // 1
    console.log(NOTFunc(1)); // 0
}

// 26 September, 2023.
// Complete.