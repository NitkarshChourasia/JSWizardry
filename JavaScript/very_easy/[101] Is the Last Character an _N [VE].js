/*
####  Is the Last Character an "N"?  ####

Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.


[Examples]

___
isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true

isLastCharacterN("Nitkarsh") ➞ false
_____



[Notes]

The function must return a boolean value ( i.e. true or false).


[conditions] [regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
Regex Tester and Debugger
https://regex101.com
With highlighting for PHP, PCRE, Python, Golang and JavaScript.
_________
_________
slice() Method
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.endsWith()
developer.mozilla.org
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________

*/
//Your code should go here:

function isLastCharacterN(name) {
    return name.endsWith("n");
}

function isLastCharacterNCharAtMet(name) {
    return name.charAt(name.length - 1) === "n";
}

function isLastCharacterNSliceMet(name) {
    return name[name.length - 1] === "n";
}

if (require.main == module) {

    // Test cases.
    console.log(isLastCharacterN("Aiden"));
    console.log(isLastCharacterN("Piet"));
    console.log(isLastCharacterN("Bert"));
    console.log(isLastCharacterN("Dean"));
    console.log(isLastCharacterN("Nitkarsh"));

    console.log(); // Blank line for readability.

    console.log(isLastCharacterNCharAtMet("Aiden"));
    console.log(isLastCharacterNCharAtMet("Piet"));
    console.log(isLastCharacterNCharAtMet("Bert"));
    console.log(isLastCharacterNCharAtMet("Dean"));
    console.log(isLastCharacterNCharAtMet("Nitkarsh"));

    console.log(); // Blank line for readability.

    console.log(isLastCharacterNSliceMet("Aiden"));
    console.log(isLastCharacterNSliceMet("Piet"));
    console.log(isLastCharacterNSliceMet("Bert"));
    console.log(isLastCharacterNSliceMet("Dean"));
    console.log(isLastCharacterNSliceMet("Nitkarsh"));

}


// 10-09-2023
// complete.


