/*
####  Among Us Imposter Formula  ####

Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.


[Examples]

___
imposterFormula(1, 10) ➞ "10%"

imposterFormula(2, 5) ➞ "40%"

imposterFormula(1, 8) ➞ "13%"
_____



[Notes]

The player limit is 10 and the imposter count can only go up to 3.


[algebra] [math] 



-------------------------------------------------------------------
[Resources]
_________
Math.round()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
Returns the value of a number rounded to the nearest integer.
_________
_________
Make a Number a Percentage
https://stackoverflow.com/questions/8522673/make-a-number-a-percentage
How to make a number a percentage.
_________
_________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
_________

*/
//Your code should go here:


function imposterFormula(imposter, player) {
    if imposter => 3 && player => 10 {
        return `${Math.round(100 * (imposter / player))}%`;
    }
    else {
        return "The player limit is 10 and the imposter count can only go up to 3 only."
    }
}


if (require.main == module) {
    console.log(imposterFormula(1, 10));
    console.log(imposterFormula(2, 5));
    console.log(imposterFormula(1, 8));
}

// 06-09-2023
// complete.
