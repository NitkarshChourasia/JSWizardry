/*
####  From A to Z  ####

Given a string indicating a range of letters, return a string which includes all the letters in that range, including the last letter. Note that if the range is given in capital letters, return the string in capitals also!


[Examples]

___
gimmeTheLetters("a-z") ➞ "abcdefghijklmnopqrstuvwxyz"

gimmeTheLetters("h-o") ➞ "hijklmno"

gimmeTheLetters("Q-Z") ➞ "QRSTUVWXYZ"

gimmeTheLetters("J-J") ➞ "J"
_____



[Notes]

___
*) A hyphen will separate the two letters in the string.
*) You don't need to worry about error handling in this one (i.e. both letters will be the same case and the second letter will always be after the first alphabetically).
___



[language_fundamentals] [strings] 



-------------------------------------------------------------------
[Resources]
_________
For Loop
https://www.w3schools.com/js/js_loop_for.asp
Loops are handy, if you want to run the same code over and over again, each time with a different value. Often this is the case when working with arrays.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
Returns a string created from the specified sequence of UTF-16 code units.
_________
_________
Array.from()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the …
_________

*/
//Your code should go here:

