/*
####  Fix the Broken Code  ####

A student learning JavaScript was trying to make a function that sorts all the letters of a word, but their code is broken, and they can't figure out why.
Spot and fix the error(s) in the code to make the function work.


[Examples]

___
sortWord("dcba") ➞ "abcd"

sortWord("Unpredictable") ➞ "Uabcdeeilnprt"

sortWord("pneumonoultramicroscopicsilicovolcanoconiosis") ➞ "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv"
_____



[Notes]

Input is a word.


[bugs] [language_fundamentals] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
Spread Syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________

*/
//Your code should go here:

// Method 1: Using Spread Syntax (...) and Array.prototype.sort() and Array.prototype.join().
function sortWordSpread(word) {
    return [...word].sort().join("");
}

// Method 2 : Using String.prototype.split() and Array.prototype.sort() and Array.prototype.join().
function sortWordSplit(word) {
    return word.split("").sort().join("");
}

if (require.main == module) {
    // Title.
    console.log("####  Fix the Broken Code  ####");
    console.log("### Sort the Letters in a Word ###");
    // Test cases.
    console.log(sortWordSpread("dcba")); // outputs abcd
    console.log(sortWordSplit("Unpredictable")); // outputs Uabcdeeilnprt
    console.log(sortWordSpread("pneumonoultramicroscopicsilicovolcanoconiosis")); // outputs aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv

    // End of script.
}

// 2-October-2023
// complete.