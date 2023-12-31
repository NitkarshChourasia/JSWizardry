/*
####  Double Palindromes  ####

Strings can be segregated into both their letter and digit components.

To illustrate:
___
"cab97ac79" // double-palindrome
// "cabac" and "9779" are both palindromes.

"1abc4de1" // single-palindrome
// "141" is a palindrome.
_____

Write a function that maps double palindromes to the number 2, single palindromes to the number 1, and everything else to the number 0.


[Examples]

___
palindromeSet(["cb77c", "ccc888", "ccc789", "abc89"]) ➞ [2, 2, 1, 0]

palindromeSet(["789", "555", "ccc", "abba"]) ➞ [0, 1, 1, 1]

palindromeSet(["7a", "5f", "6c"]) ➞ [2, 2, 2]
_____



[Notes]

___
*) A string is composed of only letters or only numbers, can be at most a single palindrome (see example #2).
*) All single character components are trivially palindromes (see example #3).
*) All letters will be lower cased.
___



[regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.match() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
The match() method retrieves the result of matching a string against a regular expression.
_________
_________
Array.prototype.reverse() - JavaScript | MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
Regex Tester and Debugger
https://regex101.com/
Online tool for learning, building, & testing Regular Expressions.
_________

*/
//Your code should go here:

