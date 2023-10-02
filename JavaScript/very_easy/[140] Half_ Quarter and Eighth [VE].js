/*
####  Half, Quarter and Eighth  ####

Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.


[Examples]

___
halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
_____



[Notes]

The order of the array is: half, quarter, eighth.


[arrays] [math] 



-------------------------------------------------------------------
[Resources]
_________
How To Do Math in JavaScript with Operators
https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators
In this JavaScript tutorial, we will go over arithmetic operators, assignment operators, and the order of operations used with number data types.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds zero or more elements to the end of an array and returns the new length of the array.
_________
_________
Array
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
A global object that's used in the construction of arrays; which are high-level, list-like objects.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

// Method 1: Using push() method in arr.
function halfQuarterEighthPushArr(num) {
    let arr = [];
    arr.push(num / 2);
    arr.push(num / 4);
    arr.push(num / 8);
    return arr;
}

// Method 2: Using function and sq brackets.
function halfQuarterEighthFunc(num) {
    return [(num / 2), (num / 4), (num / 8)];
}

// Method 3: Using arrow function.
halfQuarterEighthArrowFunc = (num) => [(num / 2), (num / 4), (num / 8)];

if (require.main == module) {
    // Title.
    console.log("####  Half, Quarter and Eighth  ####");
    // Test cases.

    // Method 1: Using push() method in arr.
    console.log("Method 1: Using push() method in arr.");
    console.log(halfQuarterEighthPushArr(6)); // [ 3, 1.5, 0.75 ]
    console.log(halfQuarterEighthPushArr(22)); // [ 11, 5.5, 2.75 ]
    console.log(halfQuarterEighthPushArr(25)); // [ 12.5, 6.25, 3.125 ]

    // Method 2: Using function and sq brackets.
    console.log("Method 2: Using function and sq brackets.");
    console.log(halfQuarterEighthFunc(6)); // [ 3, 1.5, 0.75 ]
    console.log(halfQuarterEighthFunc(22)); // [ 11, 5.5, 2.75 ]
    console.log(halfQuarterEighthFunc(25)); // [ 12.5, 6.25, 3.125 ]


    // Method 3: Using arrow function.
    console.log("Method 3: Using arrow function.");
    console.log(halfQuarterEighthArrowFunc(6)); // [ 3, 1.5, 0.75 ]
    console.log(halfQuarterEighthArrowFunc(22)); // [ 11, 5.5, 2.75 ]
    console.log(halfQuarterEighthArrowFunc(25)); // [ 12.5, 6.25, 3.125 ]
}

// 21-09-2023
// complete.