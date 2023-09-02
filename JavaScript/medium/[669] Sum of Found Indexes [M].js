/*
####  Sum of Found Indexes  ####

Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.


[Examples]

___
sumFoundIndexes([0, 3, 3, 0, 0, 3], 3) ➞ 8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

sumFoundIndexes([1, 2, 3, 4, 5, 6], 3) ➞ 2

sumFoundIndexes([100, 100, 100, 100, 100], 100) ➞ 10

sumFoundIndexes([5, 10, 15, 20], 2) ➞ 0
_____



[Notes]

0 can be the result if no number in the array matches or if the only matching element is at index 0.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value
_________
_________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
Is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followe …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.forEach()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Executes a provided function once for each array element.
_________

*/
//Your code should go here:

