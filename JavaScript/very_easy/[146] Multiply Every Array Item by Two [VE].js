/*
####  Multiply Every Array Item by Two  ####

Create a function that takes an array with numbers and return an array with the elements multiplied by two.


[Examples]

___
getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
_____



[Notes]

N/A


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
How do I multiply each member of an array by a scalar in JavaScript?
https://stackoverflow.com/questions/8454977/how-do-i-multiply-each-member-of-an-array-by-a-scalar-in-javascript
For example, how do I achieve the following without iterating over the array? var a = [1, 2, 3] * 5; // a should equal [5, 10, 15]
_________
_________
Array.prototype.map()
https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
JavaScript Loops Explained: For Loop, While Loop, Do...while Loop, and More
https://www.freecodecamp.org/news/javascript-loops-explained-for-loop-for/
Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false when analysed. A loop will continue running until …
_________

*/
//Your code should go here:

function getMultipliedArr(arr) {
    return arr.map((x) => x * 2);
}


if (require.main == module) {
    // Title.
    console.log("####  Multiply Every Array Item by Two  ####");
    // Test cases.
    console.log(getMultipliedArr([2, 5, 3])); // [4, 10, 6]
    console.log(getMultipliedArr([1, 86, -5])); // [2, 172, -10]
    console.log(getMultipliedArr([5, 382, 0])); // [10, 764, 0]

    // End of script.
}

// 2-October-2023
// complete.