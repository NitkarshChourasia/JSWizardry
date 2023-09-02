/*
####  Expensive Words  ####

Each letter in a sentence is worth its position in the alphabet (i.e. a = 1, b = 2, c = 3, etc...). However, if a word is all in UPPERCASE, the value of that word is doubled.
Create a function which returns the value of a sentence.
___
getSentenceValue("abc ABC Abc") ➞ 24
// a = 1, b = 2, c = 3

// abc = 1 + 2 + 3 = 6
// ABC = (1+2+3) * 2 = 12 (ALL letters are in uppercase)
// Abc = 1 + 2 + 3 = 6 (NOT ALL letters are in uppercase)

// 6 + 12 + 6 = 24
_____



[Examples]

___
getSentenceValue("HELLO world") ➞ 176

getSentenceValue("Edabit is LEGENDARY") ➞ 251

getSentenceValue("Her seaside sea-shelling business is really booming!") ➞ 488
_____



[Notes]

___
*) Ignore spaces and punctuation.
*) Remember that the value of a word isn't doubled unless all the letters in it are uppercase.
___



[algorithms] [strings] 



-------------------------------------------------------------------
[Resources]
_________
String.prototype.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
Returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
String.prototype.toLowerCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
Returns the calling string value converted to lower case.
_________
_________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
String.prototype.toUpperCase()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
Returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
_________

*/
//Your code should go here:

