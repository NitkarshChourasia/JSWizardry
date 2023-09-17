/*
####  Is the Word Singular or Plural?  ####

Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".


[Examples]

___
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false
_____



[Notes]

___
*) Don't forget to return the result.
*) Remember that return true (boolean) is not the same as return "true" (string).
*) This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[conditions] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.endsWith()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
Determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
_________
_________
How to get the last character in a string?
https://stackoverflow.com/questions/7447927/in-javascript-how-can-i-get-the-last-character-in-a-string/7447956
If I have the following variable in javascript var myString = "Test3"; what is the fastest way to parse out the "3" from this string that works in all browsers (back …
_________
_________
String.prototype.substring()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
Returns the part of the string between the start and end indexes, or to the end of the string.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________
_________
String.prototype.charAt()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
_________
_________
string.length
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
The length property of a String object indicates the length of a string, in UTF-16 code units.
_________

*/
//Your code should go here:

// Method 1: endsWith() method using function.
function isPluralEndsWith(word) {
    return word.endsWith("s");
}

// Method 2: substring() using function.
function isPluralSubstr(word) {
    return word.substr(word.length - 1) === "s";
}

// Method 3: slice() method using function.
function isPluralSlice(word) {
    return word.slice(word.length - 1) === "s";
}

// Method 4: charAt() method using function.
function isPluralCharAt(word) {
    return word.charAt(word.length - 1) === "s";
}

// Method 5: Bracket slicing method using function with length check (len > 1).
function isPluralBracketLenCheck(word) {
    return word.length > 1 && word[word.length - 1] === "s";
}

// Method 6: Bracket slicing method using function.
function isPluralBracket(word) {
    return word[word.length - 1] === "s";
}

// Method 7: Possibilities of using different ways using arrow function.
isPluralArrowFunc = word => word.endsWith("s");
// Can do with all kind of different methods.

// Make it OOP based, instead of hardcoding, do it OOP based.

if (require.main == module) {
    console.log("####  Is the Word Singular or Plural?  ####");
    // Test cases.

    console.log("Method 1: endsWith() method using function.");
    console.log(isPluralEndsWith("changes"));
    console.log(isPluralEndsWith("change"));
    console.log(isPluralEndsWith("dudes"));
    console.log(isPluralEndsWith("magic"));

    console.log("Method 2: substring() using function.");
    console.log(isPluralSubstr("changes"));
    console.log(isPluralSubstr("change"));
    console.log(isPluralSubstr("dudes"));
    console.log(isPluralSubstr("magic"));

    console.log("Method 3: slice() method using function.");
    console.log(isPluralSlice("changes"));
    console.log(isPluralSlice("change"));
    console.log(isPluralSlice("dudes"));
    console.log(isPluralSlice("magic"));


    console.log("Method 4: charAt() method using function.");
    console.log(isPluralCharAt("changes"));
    console.log(isPluralCharAt("change"));
    console.log(isPluralCharAt("dudes"));
    console.log(isPluralCharAt("magic"));

    console.log("Method 5: Bracket slicing method using function with length check (len > 1).");
    console.log(isPluralBracketLenCheck("changes"));
    console.log(isPluralBracketLenCheck("change"));
    console.log(isPluralBracketLenCheck("dudes"));
    console.log(isPluralBracketLenCheck("magic"));

    console.log("Method 6: Bracket slicing method using function.");
    console.log(isPluralBracket("changes"));
    console.log(isPluralBracket("change"));
    console.log(isPluralBracket("dudes"));
    console.log(isPluralBracket("magic"));

    console.log("Method 7: Possibilities of using different ways using arrow function.");
    console.log(isPluralArrowFunc("changes"));
    console.log(isPluralArrowFunc("change"));
    console.log(isPluralArrowFunc("dudes"));
    console.log(isPluralArrowFunc("magic"));

    console.log("---------------------------------------------\n");

}

// 17-09-2023
// complete.