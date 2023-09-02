/*
####  Excel Sheet Column Number  ####

Given a column title as it appears in an Excel sheet return its corresponding column number.
The number is computed in the following way:
___
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
_____



[Examples]

___
titleToNumber("A") ➞ 1

titleToNumber("R") ➞ 18

titleToNumber("AB") ➞ 28
_____



[Notes]

___
*) 1 <= len(s) <= 7
*) s consists only of uppercase English letters.
___



[language_fundamentals] [numbers] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Excel Columns
https://www.youtube.com/watch?v=g-l4UpF62x0
A video explanation.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
Extracts a section of a string and returns it as a new string, without modifying the original string.
_________

*/
//Your code should go here:

