/*
####  Concatenating First and Last Character of a String  ####

Create a function that takes a string and returns the concatenated first and last character.


[Examples]

___
firstLast("ganesh") ➞ "gh"

firstLast("kali") ➞ "ki"

firstLast("shiva") ➞ "sa"

firstLast("vishnu") ➞ "vu"

firstLast("durga") ➞ "da"
_____



[Notes]

There is no empty string.


[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
slice() Method
https://www.w3schools.com/jsref/jsref_slice_string.asp
Extracts parts of a string and returns the extracted parts in a new string.
_________
_________
String.prototype.charAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
How to use Javascript slice to extract first and last letter of a string?
https://stackoverflow.com/questions/19951188/how-to-use-javascript-slice-to-extract-first-and-last-letter-of-a-string
str.split(" "); method splits a String object into an array of strings by separating the string into substrings, where it will find space in string.
_________
_________
How to Do String Interpolation
https://www.w3docs.com/snippets/javascript/how-to-do-string-interpolation-in-javascript.html
Learn the simplest method of doing a string interpolation in JavaScript. Also, read information about string literal and placeholder.
_________
_________
String.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
_________
_________
Get the First and Last Characters of a String
https://bobbyhadz.com/blog/javascript-get-first-and-last-characters-of-string
To get the first and last characters of a string, use the `charAt()` method, e.g. `str.charAt(0)` returns the first character, whereas `str.charAt(str.length - 1)` retu …
_________
_________
String substr() Method
https://www.w3schools.com/jsref/jsref_substr.asp
Extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
_________
_________
String Object
https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
Used to represent and manipulate a sequence of characters.
_________

*/
//Your code should go here:

"use strict";

// Method 1: charAt() method using function.
function firstLastCharAt(word) {
    return word.charAt(0) + word.charAt(word.length - 1);
}

// Method 2: substring() using function.
function firstLastSubStr(word) {
    return word.substr(0, 1) + word.substr(word.length - 1, 1);
}


// Method 3: slice() method using function.
function firstLastSlice(word) {
    return word.slice(0, 1) + word.slice(word.length - 1);
}


// Method 4: Bracket slicing method using function.
function firstLastBracket(word) {
    return word[0] + word[word.length - 1];
}


// Method 5: concat() method using function.
function firstLastConcat(word) {
    return "".concat(word[0], word[word.length - 1]);
}


// Method 6: Interpolation method using function.
function firstLastInterpolation(word) {
    return `${word[0]}${word[word.length - 1]}`;
}


// Method 7: Spread method using function.
function firstLastSpread(word) {
    return [...word][0] + [...word].pop();
    // or
    // return [...word][0] + [...word][word.length - 1];
}


// Method 8: Split method using function.
function firstLastSplit(word) {
    return word.split("")[0] + word.split("").pop();
}


// This all different ways can be done with arrow function.

if (require.main == module) {
    console.log("----------");
    console.log("#### Concatenating First and Last Character of a String  ####");
    // Test cases.

    console.log("Method 1: charAt() method using function.");
    console.log(firstLastCharAt("ganesh"));
    console.log(firstLastCharAt("kali"));
    console.log(firstLastCharAt("shiva"));
    console.log(firstLastCharAt("vishnu"));
    console.log(firstLastCharAt("durga"));


    console.log("Method 2: substring() using function.");
    console.log(firstLastSubStr("ganesh"));
    console.log(firstLastSubStr("kali"));
    console.log(firstLastSubStr("shiva"));
    console.log(firstLastSubStr("vishnu"));
    console.log(firstLastSubStr("durga"));


    console.log("Method 3: slice() method using function.");
    console.log(firstLastSlice("ganesh"));
    console.log(firstLastSlice("kali"));
    console.log(firstLastSlice("shiva"));
    console.log(firstLastSlice("vishnu"));
    console.log(firstLastSlice("durga"));

    console.log("Method 4: Bracket slicing method using function.");
    console.log(firstLastBracket("ganesh"));
    console.log(firstLastBracket("kali"));
    console.log(firstLastBracket("shiva"));
    console.log(firstLastBracket("vishnu"));
    console.log(firstLastBracket("durga"));

    console.log("Method 5: concat() method using function.");
    console.log(firstLastConcat("ganesh"));
    console.log(firstLastConcat("kali"));
    console.log(firstLastConcat("shiva"));
    console.log(firstLastConcat("vishnu"));
    console.log(firstLastConcat("durga"));

    console.log("Method 6: Interpolation method using function.");
    console.log(firstLastInterpolation("ganesh"));
    console.log(firstLastInterpolation("kali"));
    console.log(firstLastInterpolation("shiva"));
    console.log(firstLastInterpolation("vishnu"));
    console.log(firstLastInterpolation("durga"));

    console.log("Method 7: Spread method using function.");
    console.log(firstLastSpread("ganesh"));
    console.log(firstLastSpread("kali"));
    console.log(firstLastSpread("shiva"));
    console.log(firstLastSpread("vishnu"));
    console.log(firstLastSpread("durga"));


    console.log("Method 8: Split method using function.");
    console.log(firstLastSplit("ganesh"));
    console.log(firstLastSplit("kali"));
    console.log(firstLastSplit("shiva"));
    console.log(firstLastSplit("vishnu"));
    console.log(firstLastSplit("durga"));

    console.log("----------");
}


// 17-09-2023
// complete.