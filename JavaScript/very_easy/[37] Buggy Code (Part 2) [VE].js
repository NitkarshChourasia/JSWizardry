/*
####  Buggy Code (Part 2)  ####

Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


[Examples]

___
maxNum(3, 7) ➞ 7

maxNum(-1, 0) ➞ 0

maxNum(1000, 400) ➞ 1000
_____



[Notes]

___
*) READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
*) Don't overthink this challenge; it's not supposed to be hard.
___



[bugs] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
The Arguments Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Math.max() Function
https://www.tutorialspoint.com/math-max-function-in-javascript
Accepts multiple numbers and returns the largest numbers among them.
_________
_________
If Else and Else If
https://www.w3schools.com/js/js_if_else.asp
Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. …
_________

*/
//Your code should go here:


function maxNumTertiary(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

function maxNumIfElse(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return "The numbers are equal";
    }
}

function maxNumMethodUse(num1, num2) {
    return Math.max(num1, num2);
}

if (require.main == module) {
    console.log(maxNumTertiary(3, 7));
    console.log(maxNumIfElse(-1, 0));
    console.log(maxNumMethodUse(1000, 400));
}


// complete.