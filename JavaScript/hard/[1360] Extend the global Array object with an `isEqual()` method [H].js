/*
####  Extend the global Array object with an `isEqual()` method  ####

Extend the global Array object to have an instance method called isEqual(). The method should accept an array as the first argument, and a second optional argument that is a flag to ignore the order of the arrays. This second argument should default to false


[Examples]

___
[1, 2, 3].isEqual([1, 2, 3]) ➞ true

[1, 2, 3].isEqual([1, 3, 2]) ➞ false

[1, 2, 3].isEqual([1, 3, 2], true) ➞ true
_____



[Notes]

This method does not need to compare Arrays, Objects, and non-primitives. It just needs to consider numbers, booleans, and strings.


[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Function Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
Creates a new Function object. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) perfo …
_________
_________
Array Class
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
A global object that is used in the construction of arrays; which are high-level, list-like objects.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________

*/
//Your code should go here:

