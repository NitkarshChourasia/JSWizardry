/*
####  Burglary Series (08): Remove an Entry  ####

Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.


[Examples]

___
removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }

removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }
_____



[Notes]

___
*) The object will contain at least two items.
*) Preferably, mutate the copy, not the original.
___



[loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
delete operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the delete operator.
_________
_________
Object.assign()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Creates a list of [key,value] pairs from an object. "Opposite" of Object.fromEntries()
_________
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Object.is()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
Determines whether two values are the same value.
_________
_________
Spread Syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
delete operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
Removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
_________

*/
//Your code should go here:

