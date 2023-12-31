/*
####  Matchstick Houses  ####

This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.


[Examples]

___
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436
_____



[Notes]

___
*) Step 0 returns 0 matchsticks.
*) The input (step) will always be a non-negative integer.
*) Think of the input (step) as the total number of houses that have been connected together.
___



[algebra] [logic] [math] 



-------------------------------------------------------------------
[Resources]
_________
Matchstick Patterns
https://www.transum.org/Maths/Activity/Matchstick_Patterns/
Describe the sequences of matchstick patterns with a formula. This exercise will help you interpret mathematical relationships both algebraically and geometrically.
_________
_________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
JavaScript Math Object
https://www.w3schools.com/Js/js_math.asp
Allows you to perform mathematical tasks on numbers.
_________
_________
Recursion
https://www.sitepoint.com/recursion-functional-javascript/#:~:text=Recursion%20is%20a%20technique%20for,to%20looping%20is%20the%20default.
Is a technique for iterating over an operation by having a function call itself repeatedly until it arrives at a result.
_________
_________
For
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Loops and Iteration
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
Loops offer a quick and easy way to do something repeatedly.
_________
_________
Arithmetic Progression
https://byjus.com/maths/arithmetic-progression/
Is a sequence of numbers such that the difference between the consecutive terms is constant. For instance, the sequence 5, 7, 9, 11, 13, 15.. . is an arithmetic progres …
_________

*/
//Your code should go here:

function matchHouses(step) {
    formula = 6 * step - (step - 1);
    return formula;
}

if (require.main == module) {
    // Title.
    console.log("####  Matchstick Houses  ####");
    // Test cases.

    console.log(matchHouses(1)); // 6
    console.log(matchHouses(4)); // 21
    console.log(matchHouses(87)); // 436

    // End of script.
}

// 26 September, 2023.
// complete.