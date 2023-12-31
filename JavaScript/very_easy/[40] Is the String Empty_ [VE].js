/*
####  Is the String Empty?  ####

Create a function that returns true if a string is empty and false otherwise.


[Examples]

___
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
_____



[Notes]

___
*) A string containing only whitespaces " " does not count as empty.
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[language_fundamentals] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
How to check empty/undefined/null string in JavaScript?
https://stackoverflow.com/questions/154059/how-to-check-empty-undefined-null-string-in-javascript
I saw this thread, but I didn't see a JavaScript specific example. Is there a simple string. Empty available in JavaScript, or is it just a case of checking for ""?
_________
_________
String Length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
Comparison and Logical Operators
https://www.w3schools.com/js/js_comparisons.asp
If the variable age is a value below 18, the value of the variable voteable 
 will be "Too young", otherwise the value of voteable will be "Old enough".
_________
_________
Arrow Functions
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
String Length Property
https://www.w3schools.com/jsref/jsref_length_string.asp
Returns the length of a string (number of characters). The length of an empty string is 0.
_________
_________
Comparison Table
https://dorey.github.io/JavaScript-Equality-Table/
When using three equals signs for JavaScript equality testing, everything is as is. Nothing gets converted before being evaluated.
_________
_________
Logical NOT (!)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
Takes truth to falsity and vice versa. It is typically used with Boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can …
_________

*/
//Your code should go here:

function isEmpty1(str) {
    return !str;
}

function isEmpty2(str) {
    return str === "";
}

function isEmptyMyWay(str) {
    return str.length === 0;
}

if (require.main == module) {
    console.log(isEmpty1(""));
    console.log(isEmpty1(" "));
    console.log(isEmpty1("a"));

    console.log();

    console.log(isEmpty2(""));
    console.log(isEmpty2(" "));
    console.log(isEmpty2("a"));

    console.log();

    console.log(isEmptyMyWay(""));
    console.log(isEmptyMyWay(" "));
    console.log(isEmptyMyWay("a"));
}


// 4 - 9 - 2023
// complete.
