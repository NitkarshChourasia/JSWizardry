/*
####  Sort By Index of Character  ####

Write a function that sorts an array of characters alphabetically in ascending order (a-z) by the character at the n-th character.


[Examples]

___
sortByCharacter(["az16", "by35", "cx24"], 2) ➞ ["cx24", "by35", "az16"]
// By 2nd character: ["x", "y", "z"] is in alphabetical order.

sortByCharacter(["mayor", "apple", "petal"], 5) ➞ ["apple", "petal", "mayor"]
// By 5th character: ["e", "l", "r"] is in alphabetical order.

sortByCharacter(["mate", "team", "bade"], 3) ➞ ["team", "bade", "mate"]
_____



[Notes]

All inputs will be of same length.


[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
How to Sort Strings in Javascript
https://stackoverflow.com/questions/51165/how-to-sort-strings-in-javascript
I have a list of objects I wish to sort based on a field attr of type string. I tried using - list.sort(function (a, b) { return a.attr - b.attr }) but found that …
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences …
_________
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________

*/
//Your code should go here:

