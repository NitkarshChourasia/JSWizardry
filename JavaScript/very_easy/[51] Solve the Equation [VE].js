/*
####  Solve the Equation  ####

Create a function that takes an equation (e.g. "1+1"), and returns the answer.


[Examples]

___
equation("1+1") ➞ 2

equation("7*4-2") ➞ 26

equation("1+1+1+1+1") ➞ 5
_____



[Notes]

Supported operators are +, -, and *.


[language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
Never Use eval() Method!
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
is a dangerous function, which executes the code it's passed with the privileges of the caller. If you run eval() with a string that could be affected by a malicious pa …
_________
_________
Evaluate an Equation in Javascript, without eval()
https://stackoverflow.com/questions/11422513/evaluate-an-equation-in-javascript-without-eval
Solve this challenge without using eval.
_________
_________
eval() Function
https://www.w3schools.com/jsref/jsref_eval.asp
Evaluates or executes an argument. If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() execu …
_________

*/
//Your code should go here:

equation = input_equation => eval(input_equation);

function eqFunc(input_equation) {
    return eval(input_equation);

}


if (require.main == module) {
    console.log(equation("1+1"));
    console.log(equation("7*4-2"));
    console.log(equation("1+1+1+1+1"));

    console.log(); // Blank line for better code readability.

    console.log(eqFunc("1+1"));
    console.log(eqFunc("7*4-2"));
    console.log(eqFunc("1+1+1+1+1"));
}


// 04-09-2023
// complete.