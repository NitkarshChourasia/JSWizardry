/*
####  String and Number Conversions  ####

You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.


[Examples:]

___
intToString(4) ➞ "4"

stringToInt("4") ➞ 4

intToString(29348) ➞ "29348"
_____



[Notes]

You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.


[language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Convert String to Number without Built in Functions
https://stackoverflow.com/questions/54920220/convert-string-into-integer-in-java-script-without-using-any-built-in-functions
Convert string to number without built-in functions.
_________
_________
5 Ways to Convert a Value to String
https://medium.com/dailyjs/5-ways-to-convert-a-value-to-string-in-javascript-6b334b2fc778
5 ways to convert a value to string in JavaScript.
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Convert String to Number
https://stackabuse.com/javascript-convert-string-to-number/
Managing data is one of the fundamental concepts of programming. Converting a Number to a String is a common and simple operation. The same goes for the other way aroun …
_________
_________
Template Literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
Are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
_________
_________
String.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
Returns a string representing the specified object.
_________
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________

*/
//Your code should go here:

// Int to string.

function intToStringLiteralBacktick(num) {
    return `${num}`;
}

function intToStringLiteral(num) {
    return num + "";
}

function intToStringCase(num) {
    return String(num);
}

function intToStringMethod(num) {
    return num.toString();
}

// Separator.

// String to int.

function stringToIntParse(num) {
    return parseInt(num);
}


// This function uses the unary plus operator (+) to convert a string to a number.
function stringToIntUnary(num) {
    return +num;
}

function stringToIntNumberMethod(num) {
    return Number(num);
}

function stringToIntNumberInt(num) {
    return Number.parseInt(num);
}

function stringToIntNumberFloat(num) {
    return Number.parseFloat(num);
}


// Conversion using substraction operator.
function stringToIntSubstraction(num) {
    return num - 0;
}

if (require.main == module){
    console.log(intToStringLiteralBacktick(4));
    console.log(intToStringLiteral(4));
    console.log(intToStringCase(4));
    console.log(intToStringMethod(4));

    console.log(); // Blank line for readability.

    console.log(stringToIntParse("4"));
    console.log(stringToIntUnary("4"));
    console.log(stringToIntNumberMethod("4"));
    console.log(stringToIntNumberInt("4"));
    console.log(stringToIntNumberFloat("4"));
    console.log(stringToIntSubstraction("4"));
}

// 05-09-2023
// complete.