/*
####  Sherlock and the Valid String  ####

Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just one character at one index in the string s, and the remaining characters will occur the same number of times.
Given a string, determine if it is valid. If so, return "YES", otherwise return "NO".
___
s= abc
// This is a valid string because frequencies are: {a: 1, b: 1, c: 1}

s = abcc
// This is a valid string because we can remove one c and have one
// of each character in the remaining string.

s = abccc
// This string is not valid as we can only remove one occurrence of c.
// That leaves character frequencies of: {a: 1, b: 1, c: 2}
_____



[Examples]

___
isValid("aabbcd") ➞ "NO"

isValid("aabbccddeefghi") ➞ "NO"

isValid("abcdefghhgfedecba") ➞ "YES"
_____



[Notes]

N/A


[regex] [strings] [validation] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a seco …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. …
_________

*/
//Your code should go here:

