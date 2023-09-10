/*
####  Less Than, Greater Than  ####

Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.


[Examples]

___
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
_____



[Notes]

N/A


[arrays] [logic] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.filter() method
https://www.w3schools.com/jsref/jsref_filter.asp
Creates an array filled with all array elements that pass a test (provided as a function).
_________
_________
filter() Array Method in JavaScript
https://www.digitalocean.com/community/tutorials/js-filter-array-method
Use filter() on arrays to go through an array and return a new array with the elements that pass the filtering rules.
_________
_________
filter() Method
https://www.w3schools.com/jsref/jsref_filter.asp
Creates an array filled with all array elements that pass a test (provided as a function).
_________
_________
While Loop
https://www.javascripttutorial.net/javascript-while-loop/
The JavaScript while statement creates a loop that executes a block of code as long as the test condition evaluates to true. The following illustrates the syntax of th …
_________

*/
//Your code should go here:

function arrBetween(num1, num2, arr) {
    return arr.filter((x) => x > num1 && x < num2);
}

function arrBetweenWhile(num1, num2, arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > num1 && arr[i] < num2) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

function arrBetweenFor(num1, num2, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1 && arr[i] < num2) {
            result.push(arr[i]);
        }
    }
    return result;
}

function arrBetweenForOf(num1, num2, arr) {
    let result = [];
    for (const x of arr) {
        if (x > num1 && x < num2) {
            result.push(x);
        }
    }
    return result;
}


if (require.main == module) {

    // Test cases.
    console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
    console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
    console.log(arrBetween(7, 32, [1, 2, 3, 78]));

    console.log(); // Blank line for readability.

    console.log(arrBetweenWhile(3, 8, [1, 5, 95, 0, 4, 7]));
    console.log(arrBetweenWhile(1, 10, [1, 10, 25, 8, 11, 6]));
    console.log(arrBetweenWhile(7, 32, [1, 2, 3, 78]));

    console.log(); // Blank line for readability.

    console.log(arrBetweenFor(3, 8, [1, 5, 95, 0, 4, 7]));
    console.log(arrBetweenFor(1, 10, [1, 10, 25, 8, 11, 6]));
    console.log(arrBetweenFor(7, 32, [1, 2, 3, 78]));

    console.log(); // Blank line for readability.

    console.log(arrBetweenForOf(3, 8, [1, 5, 95, 0, 4, 7]));
    console.log(arrBetweenForOf(1, 10, [1, 10, 25, 8, 11, 6]));
    console.log(arrBetweenForOf(7, 32, [1, 2, 3, 78]));

}

// 10-09-2023
// complete.