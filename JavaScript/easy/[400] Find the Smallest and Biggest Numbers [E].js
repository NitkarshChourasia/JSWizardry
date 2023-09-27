/*
####  Find the Smallest and Biggest Numbers  ####

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.


[Examples]

___
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
_____



[Notes]

All test arrays will have at least one element and are valid.


[arrays] [language_fundamentals] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the smallest of zero or more numbers.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
Allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destru …
_________
_________
How to find the min/max element of an Array?
https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
How can I easily obtain the min or max element of a JavaScript Array? Example Psuedocode: let array = [100, 0, 50] array.min() //=> 0 array.max() //=> 100
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Rearranges the order of an array either numerically or alphabetically accordingly.
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters.
_________
_________
Array.pop()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________
_________
Array.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________

*/
//Your code should go here:


"use strict";

function minMaxMathWay(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}

function minMaxSortWay(arr) {
    arr.sort((a, b) => a - b);
    return [arr[0], arr[arr.length - 1]];
}

function minMaxShiftAndPopWay(arr) {
    arr.sort((a, b) => a - b);
    let min = arr.shift();
    let max = arr.pop();
    return [min, max];
}

function minMaxPushWay(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
} // Good program.

if (require.main == module) {
    // Title.
    console.log("####  Find the Smallest and Biggest Numbers  ####");
    // Test cases.

    // Math.min() and Math.max() way.
    console.log("Math.min() and Math.max() way."); // Math.min() and Math.max() way.
    console.log(minMaxMathWay([1, 2, 3, 4, 5])); // [1, 5]
    console.log(minMaxMathWay([2334454, 5])); // [5, 2334454]
    console.log(minMaxMathWay([1])); // [1, 1]

    // Array.prototype.sort() way.
    console.log("Array.prototype.sort() way."); // Array.prototype.sort() way.
    console.log(minMaxSortWay([1, 2, 3, 4, 5])); // [1, 5]
    console.log(minMaxSortWay([2334454, 5])); // [5, 2334454]
    console.log(minMaxSortWay([1])); // [1, 1]

    // Array.prototype.shift() and Array.prototype.pop() way.
    console.log("Array.prototype.shift() and Array.prototype.pop() way."); // Array.prototype.shift() and Array.prototype.pop() way.
    console.log(minMaxShiftAndPopWay([1, 2, 3, 4, 5])); // [1, 5]
    console.log(minMaxShiftAndPopWay([2334454, 5])); // [5, 2334454]
    console.log(minMaxShiftAndPopWay([1])); // [1, 1]

    // Array.prototype.push() way.
    console.log("Array.prototype.push() way."); // Array.prototype.push() way.
    console.log(minMaxPushWay([1, 2, 3, 4, 5])); // [1, 5]
    console.log(minMaxPushWay([2334454, 5])); // [5, 2334454]
    console.log(minMaxPushWay([1])); // [1, 1]

    // End of script.
}


// 27 September, 2023
// complete.