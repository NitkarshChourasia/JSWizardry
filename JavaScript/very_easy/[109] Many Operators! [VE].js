/*
####  Many Operators!  ####

Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.


[Examples]

___
operate(1, 2, "+") ➞ 3
1 + 2 = 3

operate(7, 10, "-") ➞ -3
7 - 10 = -3

operate(20, 10, "%") ➞ 0
20 % 10 = 0
_____



[Notes]

There will not be any divisions by zero.


[language_fundamentals] [math]



-------------------------------------------------------------------
[Resources]
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
Switch Statement
https://www.w3schools.com/js/js_switch.asp
Is used to perform different actions based on different conditions.
_________
_________
Arrow Function Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
_________
_________
Reasons Why You Should Never Use eval() in JavaScript
https://www.digitalocean.com/community/tutorials/js-eval
You may have never heard of the eval function in JavaScript, and that's probably for a good reason! It should almost never be used and here we explain why.
_________
_________
Eval() Function and Why to Never Use It
https://www.linuxscrew.com/javascript-eval
Executes a string as JavaScript. This is a massive security risk as, if used in production, it can allow third parties to execute their own code in your app.
_________

*/
//Your code should go here:

// The input will be string, can it be used directly by somehow converting it into operator something.
// Options are eval.
// Or switch case.
// if else if else.
// What and how to convert input num into any kind base num.


function operateEval(num1, num2, operator) {
    return eval(num1 + operator + num2);
} // The worst harmful method.

function operateSwitch(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 == 0) {
                return "Divide by zero error.";
            }
            return num1 / num2;
        case "%":
            return num1 % num2;
        default:
            return "Invalid operator.";
    }
} // The best method.

if (require.main == module) {
    // Test cases.
    console.log(operateEval(1, 2, "+"));
    console.log(operateEval(7, 10, "-"));
    console.log(operateEval(20, 10, "%"));

    console.log(); // Blank line for readability.

    console.log(operateSwitch(1, 2, "+"));
    console.log(operateSwitch(7, 10, "-"));
    console.log(operateSwitch(20, 10, "%"));
}

// 12-09-2023
// complete.