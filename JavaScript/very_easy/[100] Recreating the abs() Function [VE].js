/*
####  Recreating the abs() Function  ####

The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.
Create a function that recreates this functionality.


[Examples]

___
absolute(-1.217197940) ➞ 1.21719794

absolute(-12.1320) ➞ 12.132
 
absolute(-544.0) ➞ 544

absolute(4666) ➞ 4666

absolute(-3.14) ➞ 3.14

absolute(250) ➞ 250
_____



[Notes]

___
*) Tests will only include valid numbers.
*) Don't use the Math.abs() function (it will defeat the purpose of the challenge).
___



[language_fundamentals] [math] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Check if a Number is Positive or Negative
https://www.samanthaming.com/tidbits/29-check-if-number-is-positive-or-negative/
Check is a number is positive or negative.
_________
_________
Convert a Negative Number to a Positive One
https://stackoverflow.com/a/10012850
Math.abs(x) or if you are certain the value is negative before the conversion just prepend a regular minus sign: x = -x.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

function absolute(num) {
    return num < 0 ? -num : num;
}

if (require.main == module) {
    // Test cases.

    console.log(absolute(-1.217197940));
    console.log(absolute(-12.1320));
    console.log(absolute(-544.0));
    console.log(absolute(4666));
    console.log(absolute(-3.14));
    console.log(absolute(250));
}


// 08-09-2023
// complete.