/*
####  Remove Surrounding Duplicate Items  ####

Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.


[Examples]

___
uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
_____



[Notes]

___
*) The initial sequence of items can be either a string or an array.
*) Tests are case sensitive.
___



[formatting] [loops] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new Array instance from an array-like or iterable object.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
String.prototype.split()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
Splits a String object into an array of strings by separating the string into substrings.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
typeof Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________

*/
//Your code should go here:

