/*
####  Get Max Depth of Object or Array  ####

Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.


[Examples]

___
getDepth([]) ➞ 1

getDepth({ a: 1 }) ➞ 1

getDepth({ a: 1, b: { c: 1 } }) ➞ 2

getDepth([1, [2, [3, [4, [5]]]]]) ➞ 5
_____



[Notes]

An empty object / array counts as a depth of 1.


[arrays] [objects] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of zero or more numbers.
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
_________
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
_________

*/
//Your code should go here:

