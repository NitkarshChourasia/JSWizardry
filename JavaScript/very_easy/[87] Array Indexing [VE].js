/*
####  Array Indexing  ####

Given an index and an array, return the value of the array with the given index.


[Examples]

___
valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
_____



[Notes]

Math.floor() can be helpful.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Math.floor()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Returns the largest integer less than or equal to a given number.
_________
_________
Practical Use for JavaScript Bitwise Operators
http://rocha.la/JavaScript-bitwise-operators-in-practice
JavaScript bitwise operators are one of these features of JavaScript that we always forget about. It seems like we assume there is no good use for them in a client-side …
_________
_________
Math.trunc()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
Returns the integer part of a number by removing any fractional digits.
_________
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
eval() Function
https://www.w3schools.com/jsref/jsref_eval.asp
Evaluates or executes an argument. If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() exec …
_________

*/
//Your code should go here:

function valueAt(arr, i) {
    return arr[Math.floor(i)];
}

if (require.main == module) {
    // Test cases.

    console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
    console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
    console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));

}


// 08-09-2023
// complete.