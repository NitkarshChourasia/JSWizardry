/*
####  Check if One Array can be Nested in Another  ####

Create a function that returns true if the first array can be nested inside the second and false otherwise.
arr1 can be nested inside arr2 if:



[Examples]

___
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false
_____



[Notes]

Note the strict inequality (see example #3).


[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
How to Get Min or Max of an Array
https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
This article describes how to use destructuring to get the minimum and maximums of an array. But what if we have array of number and we would like to find min and max v …
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

function canNest(arr1, arr2) {
    eq1 = Math.min(...arr1) > Math.min(...arr2);
    eq2 = Math.max(...arr1) < Math.max(...arr2);
    return eq1 && eq2;
}

if (require.main == module) {
    // Title.
    console.log("#### Check if One Array can be Nested in Another ####")

    // Test cases.
    console.log(canNest([1, 2, 3, 4], [0, 6])) // true
    console.log(canNest([3, 1], [4, 0])) // true
    console.log(canNest([9, 9, 8], [8, 9])) // false
    console.log(canNest([1, 2, 3, 4], [2, 3])) // false

    // End of script.
}

// 27 September, 2023.
// complete.

