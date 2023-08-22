/*
####  Burglary Series (09): Filter Values  ####

The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.


[Examples]

___
{ tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }

{ tv: 4999 } ➞ {}

{ guitar: 5000 } ➞ { guitar: 5000 }

{} ➞ {}
_____



[Notes]

N / A


[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________
_________
for...in loop
https://www.programiz.com/javascript/for-in
In this tutorial, you will learn about the JavaScript for...in loop with the help of examples.
_________

*/
//Your code should go here:

