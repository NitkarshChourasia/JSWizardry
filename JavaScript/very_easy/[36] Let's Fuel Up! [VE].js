/*
####  Let's Fuel Up!  ####

A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.


[Examples]

___
calculateFuel(15) ➞ 150

calculateFuel(23.5) ➞ 235

calculateFuel(3) ➞ 100
_____



[Notes]

___
*) Distance will be a number greater than zero.
*) Return 100 if the calculated fuel turns out to be less than 100.
___



[control_flow] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Conditional Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expre …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
if...else
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
Executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
_________

*/
//Your code should go here:


function calculateFuel(distance) {
    return distance * 10 < 100 ? 100 : distance * 10;
}

if (require.main == module) {
    console.log(calculateFuel(15));
    console.log(calculateFuel(23.5));
    console.log(calculateFuel(3));
}


// complete.