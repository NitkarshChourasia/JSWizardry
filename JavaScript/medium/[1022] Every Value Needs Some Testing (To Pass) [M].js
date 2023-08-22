/*
####  Every Value Needs Some Testing (To Pass)  ####

In this challenge, you have to verify that every, or some, of the given variables, pass a given test condition. There are seven parameters:
___
*) test A string being the condition to verify.
*) type A string with two possible values:
everybody if every variable has to pass the test;
somebody if at least one of the variables has to pass the test.
*) a, b, c, d, e The variables being integers or booleans.
___

Create a function that returns true or false, depending on the result of the test applied to the variables.


[Examples]

___
everySome(">= 1", "everybody", 1, 1, -1, 1, 1) ➞ false
// Is every variable >= 1?

everySome(">= 1", "somebody", -1, -1, -1, -1, 1) ➞ true
// Is some variable >= 1?

everySome("< 4 / 2", "everybody", 1, 2, 1, 2, 1, 0, -10) ➞ false
// Is every variable < 2?
_____



[Notes]

N/A


[conditions] [validation] 



-------------------------------------------------------------------
[Resources]
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Property Accessors
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
Provide access to an object's properties by using the dot notation or the bracket notation. It works for methods, too.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items i …
_________
_________
The arguments object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
Is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
_________
_________
Destructuring assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
Is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________

*/
//Your code should go here:

