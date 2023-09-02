/*
####  Burglary Series (13): Sort That List  ####

The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".
Given an object with the stolen items, return a new object with the list in reverse alphabetical order.


[Examples]

___
{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }

{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }

{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }
_____



[Notes]

___
*) Please note that one should not rely on property order of an ordinary Object: Although the keys of an ordinary Object are ordered now, they didn't used to be, and the order is complex. As a result, it's best not to rely on property order. MDN Source
___



[arrays] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Array.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Holds key-value pairs and remembers the original insertion order of the keys.
_________
_________
sort() Method
https://www.w3schools.com/jsref/jsref_sort.asp
This works well for strings ("Apple" comes before "Banana"). However, if  numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger  than "1".
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in …
_________
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________
_________
Switch
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow …
_________

*/
//Your code should go here:

