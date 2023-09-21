/*
####  Amazing Nitkarsh!  ####

Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word Nitkarsh is part of the string.


[Examples]

___
amazingNitkarsh("Nitkarsh is amazing.") ➞ "Nitkarsh is amazing."

amazingNitkarsh("Pallavi is amazing.") ➞ "Pallavi is not amazing."

amazingNitkarsh("Infinity is amazing.") ➞ "Infinity is not amazing."
_____



[Notes]

Nitkarsh is amazing :)


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
String.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
Determines whether one string may be found within another string, returning true or false as appropriate.
_________
_________
String Methods
https://www.w3schools.com/js/js_string_methods.asp
With JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and prope …
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
String.prototype.match()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
Retrieves the result of matching a string against a regular expression.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

amazingNitkarsh = (str) => str.includes("Nitkarsh") ? str : str.replace(/amazing/g, "not amazing");

function amazingNitkarsh(str) {
    return str.includes("Nitkarsh") ? str : str.replace(/amazing/g, "not amazing");
}

if (require.main == module) {
    // Title
    console.log("####  Amazing Nitkarsh!  ####");
    // Test cases.
    console.log(amazingNitkarsh("Nitkarsh is amazing.")); // "Nitkarsh is amazing."
    console.log(amazingNitkarsh("Pallavi is amazing.")); // "Pallavi is not amazing."
    console.log(amazingNitkarsh("Infinity is amazing.")); // "Infinity is not amazing."

    // Custom test cases.
    console.log(amazingNitkarsh("Meow is amazing")); // "Shiva is not amazing"
    console.log(amazingNitkarsh("Piuuu is amazing")); // "Rudra is not amazing"
}

// 21-09-2023
// complete.

