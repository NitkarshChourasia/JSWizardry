/*
####  Making a Sandwich  ####

Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.


[Examples]

___
makeSandwich(["tuna", "ham", "tomato"], "ham") ➞ ["tuna", "bread", "ham", "bread", "tomato"]

makeSandwich(["cheese", "lettuce"], "cheese") ➞ ["bread", "cheese", "bread", "lettuce"]

makeSandwich(["ham", "ham"], "ham") ➞ ["bread", "ham", "bread", "bread", "ham", "bread"]
_____



[Notes]

___
*) You will always get valid inputs.
*) Make two separate sandwiches if two of the same elements are next to each other (see example #3).
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
_________
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Conditional (ternary) operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execu …
_________

*/
//Your code should go here:

