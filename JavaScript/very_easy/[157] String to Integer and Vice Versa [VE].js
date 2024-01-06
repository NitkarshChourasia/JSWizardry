/*
####  String to Integer and Vice Versa  ####

Write two functions:



[Examples]

___
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532"
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
parseInt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
Parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
_________
_________
JavaScript Number Methods
https://www.w3schools.com/js/js_number_methods.asp
But with JavaScript, methods and properties are also available to primitive 
 values, because JavaScript treats primitive values as objects when executing 
 methods and …
_________
_________
Converting Strings to Numbers
https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
Three different ways of converting a String to a Number including the situations when to use a specific one.
_________
_________
Number.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number/toString
Returns a string representing the specified Number object.
_________
_________
Date.prototype.toString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
Returns a string representing the specified Date object.
_________
_________
parseInt() Method
https://www.techonthenet.com/js/number_parseint.php
Used to parse a string and return its value as an integer number. Because parseInt() is a method of the Number object, it must be invoked through the object called Number.
_________
_________
toString() Method
https://www.geeksforgeeks.org/javascript-tostring-function/
Is used with a number and converts the number to a string. It is used to return a string representing the specified Number object.
_________
_________
Convert String to Number
https://stackabuse.com/javascript-convert-string-to-number/
Managing data is one of the fundamental concepts of programming. Converting a Number to a String is a common and simple operation. The same goes for the other way aroun …
_________
_________
Five Ways to Convert a Number to String
https://dev.to/sanchithasr/5-ways-to-convert-number-to-string-3fhd
In JavaScript, you can represent a number as type number (ex. 12), or as a type string (ex. '12').But...
_________
_________
parseInt()
https://www.w3schools.com/jsref/jsref_parseint.asp
Parses a string and returns an integer.
_________

*/
//Your code should go here:

"use strict";

let toIntArrow = (str) => parseInt(str);
let toStrArrow = (num) => num.toString();

function toIntSFunc(str) {
    return parseInt(str);
}

function toStrSFunc(num) {
    return num.toString();
}



class StringAndNumberConverterUsedConstructor {
    constructor() {
        this.toInt = (str) => parseInt(str);
        this.toStr = (num) => num.toString();
    }
}

class StringAndNumberConverterUsedFunction {

    toInt(str) {
        return parseInt(str);
    }

    toStr(num) {
        return num.toString();
    }
}


if (require.main == module) {
    // Title.
    console.log("####  String to Integer and Vice Versa  ####");
    // Test cases.

    console.log("Test Cases:"); // Test Cases.
    // Arrow functions.
    console.log(toIntArrow("77")); // 77
    console.log(toIntArrow("532")); // 532
    console.log(toStrArrow(77)); // 77
    console.log(toStrArrow(532)); // 532

    // Standard functions.
    console.log(toIntSFunc("77")); // 77
    console.log(toIntSFunc("532")); // 532
    console.log(toStrSFunc(77)); // 77
    console.log(toStrSFunc(532)); // 532


    // Classes.

    // Class 1: Using constructor.

    // obj1 = new StringAndNumberConverterUsedConstructor();

    // console.log(obj1.toInt("77")); // 77
    // console.log(obj1.toInt("532")); // 532
    // console.log(obj1.toStr(77)); // 77
    // console.log(obj1.toStr(532)); // 532

    // Class 2: Using function.

    // obj2 = new StringAndNumberConverterUsedFunction();

    // console.log(obj2.toInt("77")); // 77
    // console.log(obj2.toInt("532")); // 532
    // console.log(obj2.toStr(77)); // 77
    // console.log(obj2.toStr(532)); // 532

    // End of script.
}

// 26-October-2023
// incomplete