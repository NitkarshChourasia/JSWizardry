/*
####  Squares and Cubes  ####

Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.


[Examples]

___
checkSquareAndCube([4, 8]) ➞ true

checkSquareAndCube([16, 48]) ➞ false

checkSquareAndCube([9, 27]) ➞ true
_____



[Notes]

___
*) Remember to return either true or false.
*) All arrays contain two positive numbers.
*) If you're stuck, check the Resources for a hint.
___



[arrays] [geometry] [math] [numbers] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Math.cbrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
Returns the cube root of a number.
_________
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number.
_________
_________
Cubes and Cube Roots
https://www.mathsisfun.com/numbers/cube-root.html
To understand cube roots, first we must understand cubes. To cube a number, just use it in a multiplication 3 times ...
_________
_________
JavaScript Arrays
https://www.w3schools.com/js/js_arrays.asp
An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single …
_________
_________
cbrt() Method
https://www.w3schools.com/jsref/jsref_cbrt.asp
Returns the cubic root of a number.
_________
_________
Math.sqrt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
Returns the square root of a number, that is...
_________
_________
Cube Root
https://www.mathsisfun.com/definitions/cube-root.html
The cube root of a number is a special value that, when used in a multiplication three times, gives that number.
_________
_________
Squares and Square Roots
https://www.mathsisfun.com/square-root.html
First learn about Squares, then Square Roots are easy. To square a number: multiply it by itself. "Squared" is often written as a little 2 like this ...
_________

*/
//Your code should go here:

function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}

if (require.main == module) {
    console.log("####  Squares and Cubes Equality  ####");
    // Test cases.
    console.log(checkSquareAndCube([4, 8])); // true
    console.log(checkSquareAndCube([16, 48])); // false
    console.log(checkSquareAndCube([9, 27])); // true
}

// 18-09-2023
// complete.