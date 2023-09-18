/*
####  Count the Syllables  ####

Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).


[Examples]

___
countSyllables("Hehehehehehe") ➞ 6

countSyllables("bobobobobobobobo") ➞ 8

countSyllables("NANANA") ➞ 3
_____



[Notes]

___
*) For simplicity, please note that each syllable will consist of two letters only.
*) Your code should accept strings of any case (upper, lower and mixed case).
___



[language_fundamentals] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object contains the length of the string, in UTF-16 code units. length is a read-only data property of string instances.
_________
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________
_________
RegExp.prototype.test()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
Executes a search for a match between a regular expression and a specified string. Returns true or false.
_________
_________
String.prototype.match()
developer.mozilla.org
Retrieves the result of matching a string against a regular expression.
_________

*/
//Your code should go here:

function countSyllablesRegEx(str) {
    return str.match(/[aeiou]/gi).length;
} // Learn regex.

function countSyllablesLowerSplit(str) {
    syllable = str.substring(1, 2).toLowerCase();
    return str.toLowerCase().split(syllable).length - 1;
}


if (require.main == module) {
    console.log("####  Count the Syllables  ####");
    // Test cases.
    console.log("Method 1: Using regex.");
    console.log(countSyllablesRegEx("Hehehehehehe")); // 6
    console.log(countSyllablesRegEx("bobobobobobobobo")); // 8
    console.log(countSyllablesRegEx("NANANA")); // 3

    console.log("Method 2: Using split.");
    console.log(countSyllablesLowerSplit("Hehehehehehe")); // 6
    console.log(countSyllablesLowerSplit("bobobobobobobobo")); // 8
    console.log(countSyllablesLowerSplit("NANANA")); // 3
}

// 17-09-2023
// To learn this.
// Incomplete.