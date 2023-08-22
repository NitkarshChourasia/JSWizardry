/*
####  Remix the String  ####

Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.


[Examples]

___
remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
_____

The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.
___
remix("PlOt", [1, 3, 0, 2]) ➞ "OPtl"

remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]) ➞ "cmourpte"
_____



[Notes]

Be sure not to change the original case; otherwise no gotchas. Assume you'll be given a string and array of equal length, both containing valid characters (A-Z, a-z, or 0-9).


[arrays] [formatting] [loops] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array.prototype.join()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
Joins all elements of an array (or an array-like object) into a string.
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
_________
_________
arr.findIndex()
https://www.geeksforgeeks.org/javascript-array-findindex-method/
Used to return the index of the first element in a given array that satisfies the provided testing function. Otherwise, -1 is returned. It does not execute the method …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________

*/
//Your code should go here:

