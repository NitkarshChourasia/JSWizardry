/*
####  Char-to-ASCII  ####

Create a function that returns the ASCII value of the passed in character.


[Examples]

___
ctoa("A") ➞ 65

ctoa("m") ➞ 109

ctoa("[") ➞ 91

ctoa("\") ➞ 92
_____



[Notes]

___
*) Don't forget to return the result.
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[algorithms] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
ASCII Table
https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
ASCII stands for American Standard Code for Information Interchange. Below is the ASCII character table, including descriptions of the first 32 characters. ASCII was or …
_________
_________
String.prototype.codePointAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
Returns a non-negative integer that is the Unicode code point value.
_________
_________
How to Get the Ascii Value of a Character
https://www.hacksparrow.com/javascript/get-ascii-value-of-character-convert-ascii-to-character-in-javascript.html
To get the ASCII value of a character, use the charCodeAt instance method of the String JavaScript object. To convert a string of characters to ASCII values, you can do …
_________

*/
//Your code should go here:

function ctoa(char) {
    return char.charCodeAt(0);
}


if (require.main == module) {
    console.log("####  Char-to-ASCII  ####");
    // Test cases.
    console.log(ctoa("A")); // 65
    console.log(ctoa("m")); // 109
    console.log(ctoa("[")); // 91
    console.log(ctoa("\\")); // 92 // Escaping was to be done, so double backslashes.
}

// 18-09-2023
// complete.