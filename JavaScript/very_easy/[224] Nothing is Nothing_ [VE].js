/*
####  Nothing is Nothing?  ####

Given any number of parameters, return true if none of the arguments are falsy.


[Examples]

___
nothingIsNothing(0, false, undefined, null) ➞ false

nothingIsNothing(33, "Hello",  true,  []) ➞ true

nothingIsNothing(true, false) ➞ false
_____



[Notes]

You'll have to figure out a way to access the arguments


[data_structures] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Rest Parameters and Spread Syntax
https://javascript.info/rest-parameters-spread
There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.
_________
_________
Falsy Values
https://www.freecodecamp.org/news/falsy-values-in-javascript/
Is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: undefined, null, NaN, 0, "" (empty string) …
_________
_________
isNaN()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
Determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined i …
_________
_________
Arrow Functions
https://www.w3schools.com/js/js_arrow_function.asp
Allow us to write shorter function syntax.
_________
_________
Boolean
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
Is an object wrapper for a boolean value.
_________
_________
Array.prototype.some()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
Tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which th …
_________

*/
//Your code should go here:

