/*
####  Extend the Array Prototype with a `compact()` Method  ####

Extend the global Array object to have an instance method named compact() which returns a copy of the array without duplicate entries, and falsey values (with the exception of 0 and false).


[Examples]

___
[1, 2, 2, 3, 4, 4, 5].compact() ➞ [1, 2, 3, 4, 5]

[true, false, true, false].compact() ➞ [true, false]

[0, "hello", undefined, 17.2].compact() ➞ [0, "hello", 17.2]

[null, 0, undefined, 1, "h", "", 892].compact() ➞ [0, 1, "h", 892]
_____



[Notes]

This does not need to consider / work with objects, arrays, or non-primitive types as entries. Bonus if it does though!


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Falsy
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
A value that is considered false when encountered in a Boolean context.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Truthy
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
A value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, 0n, "", null, …
_________
_________
Array Class
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
A global object that is used in the construction of arrays; which are high-level, list-like objects.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

