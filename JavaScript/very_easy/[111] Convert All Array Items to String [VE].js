/*
####  Convert All Array Items to String  ####

Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.


[Examples]

___
parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

parseArray([]) ➞ []
_____



[Notes]

Return [] if array is empty.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
Returns a string representing the specified array and its elements.
_________
_________
String() Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String
Is used to create a new String object. When called instead as a function, it performs type conversion to a primitive string, which is usually more useful.
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the operand.
_________
_________
toString() Method
https://www.w3schools.com/jsref/jsref_tostring_number.asp
Converts a number to a string.
_________

*/
//Your code should go here:

function parseArray(arr) {
    return arr.map(x => String(x));
}

function parseArray1(arr) {
    return arr.map(String);
}

function parseArray2(arr) {
    return arr.map(x => x.toString());
}

function parseArray3(arr) {
    return arr.map(x => `${x}`);
}

function parseArray4(arr) {
    return arr.map(x => x + "");
}

if (require.main == module) {
    // Test cases.
    console.log("####  Convert All Array Items to String  ####\n")
    console.log("parseArray")
    console.log(parseArray([1, 2, "a", "b"]));
    console.log(parseArray(["abc", 123, "def", 456]));
    console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
    console.log(parseArray([]));

    console.log("parseArray1")
    console.log(parseArray1([1, 2, "a", "b"]));
    console.log(parseArray1(["abc", 123, "def", 456]));
    console.log(parseArray1([1, 2, 3, 17, 24, 3, "a", "123b"]));
    console.log(parseArray1([]));

    console.log("parseArray2")
    console.log(parseArray2([1, 2, "a", "b"]));
    console.log(parseArray2(["abc", 123, "def", 456]));
    console.log(parseArray2([1, 2, 3, 17, 24, 3, "a", "123b"]));
    console.log(parseArray2([]));

    console.log("parseArray3")
    console.log(parseArray3([1, 2, "a", "b"]));
    console.log(parseArray3(["abc", 123, "def", 456]));
    console.log(parseArray3([1, 2, 3, 17, 24, 3, "a", "123b"]));
    console.log(parseArray3([]));

    console.log("parseArray4")
    console.log(parseArray4([1, 2, "a", "b"]));
    console.log(parseArray4(["abc", 123, "def", 456]));
    console.log(parseArray4([1, 2, 3, 17, 24, 3, "a", "123b"]));
    console.log(parseArray4([]));
}

// 12-09-2023
// complete.