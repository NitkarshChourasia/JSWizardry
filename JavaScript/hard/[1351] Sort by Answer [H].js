/*
####  Sort by Answer  ####

Given an array of math expressions, create a function which sorts the array by their answer. It should be sorted in ascending order.


[Examples]

___
sortByAnswer(["1 + 1", "1 + 7", "1 + 5", "1 + 4"]) ➞ ["1 + 1", "1 + 4", "1 + 5", "1 + 7"]

sortByAnswer(["4 - 4", "2 - 2", "5 - 5", "10 - 10"]) ➞ ["4 - 4", "2 - 2", "5 - 5", "10 - 10"]

sortByAnswer(["2 + 2", "2 - 2", "2 * 1"]) ➞ ["2 - 2", "2 * 1", "2 + 2"]
_____



[Notes]

___
*) If multiple expressions have the same answer, put them in the order of which they appear (see example #2).
*) You won't need to worry about divisions by zero.
*) The symbol used for multiplication is x instead of *.
___



[arrays] [language_fundamentals] [math] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________
_________
eval() Method
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________

*/
//Your code should go here:

