/*
####  Using Arrow Functions  ####

Create a function that returns the given argument, but by using an arrow function.
An arrow function is constructed like so:
___
arrowFunc=(\/parameters\/)=>//code here
_____



[Examples]

___
arrowFunc(3) ➞ 3

arrowFunc("3") ➞ "3"

arrowFunc(true) ➞ true
_____



[Notes]

Check the Resources tab for more information on arrow functions.


[data_structures] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
JavaScript Arrow Function
https://www.programiz.com/javascript/arrow-function
Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. If …
_________
_________
Arrow Functions
https://www.w3schools.com/js/js_arrow_function.asp
Arrow functions allow us to write shorter function syntax.
_________
_________
Arrow Functions
https://javascript.info/arrow-functions-basics
…This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.
_________
_________
Arrow Functions
https://www.javascripttutorial.net/es6/javascript-arrow-function/
Provide you with an alternative way to write a shorter syntax compared to the function expression.
_________

*/
//Your code should go here:


const arrowFunc = (arg) => arg;


if (require.main == module) {
    console.log(arrowFunc(3))
    console.log(arrowFunc("3"))
    console.log(arrowFunc(true))
}

// complete.