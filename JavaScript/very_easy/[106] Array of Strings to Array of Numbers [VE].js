/*
####  Array of Strings to Array of Numbers  ####

Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
Example:
___
["1", "3", "3.6"] ➞ [1, 3, 3.6]
_____



[Examples]

___
toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

toNumberArray(["91", "44"]) ➞ [91, 44]

toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
_____



[Notes]

Some inputs are floats.


[arrays] [language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Convert an Array of Strings to Numbers
https://www.codegrepper.com/code-examples/javascript/javascript+Convert+an+array+of+strings+to+numbers
JavaScript Array map() Method The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided f …
_________
_________
How to Convert String to Number
https://www.w3docs.com/snippets/javascript/how-to-convert-string-to-number-in-javascript.html
There are several methods of converting a string into a number: parseInt() #; parseFloat() #, Number() #, etc. See examples.
_________
_________
Cast to Number in Javascript using the Unary (+) Operator
https://medium.com/@nikjohn/cast-to-number-in-javascript-using-the-unary-operator-f4ca67c792ce
Unary operators work on single operands. The Unary (+) operator is no different, and it precedes it’s operand. That’s right. So you don’t need to parseInt or parseFloat …
_________

*/
//Your code should go here:

function toNumberArrayWhile(arr) {
    let i = 0;
    let newArr = [];
    while (i < arr.length) {
        newArr.push(Number(arr[i]));
        i++;
    }
    return newArr;
}

function toNumberArrayFor(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Number(arr[i]));
    }
    return newArr;
}

function toNumberArrayForOf(arr) {
    let newArr = [];
    for (let i of arr) {
        newArr.push(Number(i));
    }
    return newArr;
}

// Using map() method.

function toNumberArrayMap(arr) {
    return arr.map(x => Number(x));
}

// Using map() method and arrow function.

function toNumberArrayMapOperator(arr) {
    return arr.map(x => +x);
}

function toNumberArrayMapNumber(arr) {
    return arr.map(Number);
}


if (require.main == module) {
    // Test cases.
    console.log("While loop:");
    console.log(toNumberArrayWhile(["9.4", "4.2"]));
    console.log(toNumberArrayWhile(["91", "44"]));
    console.log(toNumberArrayWhile(["9.5", "8.8"]));

    console.log("For loop:");
    console.log(toNumberArrayFor(["9.4", "4.2"]));
    console.log(toNumberArrayFor(["91", "44"]));
    console.log(toNumberArrayFor(["9.5", "8.8"]));

    console.log("For of loop:");
    console.log(toNumberArrayForOf(["9.4", "4.2"]));
    console.log(toNumberArrayForOf(["91", "44"]));
    console.log(toNumberArrayForOf(["9.5", "8.8"]));

    console.log("Map method:");
    console.log(toNumberArrayMap(["9.4", "4.2"]));
    console.log(toNumberArrayMap(["91", "44"]));
    console.log(toNumberArrayMap(["9.5", "8.8"]));

    console.log("Map method and arrow function:");
    console.log(toNumberArrayMapOperator(["9.4", "4.2"]));
    console.log(toNumberArrayMapOperator(["91", "44"]));
    console.log(toNumberArrayMapOperator(["9.5", "8.8"]));

    console.log("Map method and Number function:");
    console.log(toNumberArrayMapNumber(["9.4", "4.2"]));
    console.log(toNumberArrayMapNumber(["91", "44"]));
    console.log(toNumberArrayMapNumber(["9.5", "8.8"]));

}

// 12-09-2023
// complete.