/*
####  ES6 Object Methods in ES5  ####

In ES6 JavaScript, there exist two Object methods:



[Examples]

___
const myObject = {
  a: 1,
  b: 2
}

Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
Object.values(myObject) ➞ [1, 2]
_____

Your job is to recreate these Object methods in ES5 JavaScript, creating new methods:
___
*) Object.prototype.entriesNew()
*) Object.prototype.valuesNew()
___

The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. If the object has no properties your methods should return an empty array.


[Examples]

___
Object.valuesNew({ a: 1, b: 2 }) ➞ [1, 2]

Object.entriesNew({ first: 1, second: 2 }) ➞ [ ["first", 1], ["second", 2] ]

Object.valuesNew({}) ➞ []

Object.entiresNew({}) ➞ []
_____



[Notes]

___
*) Do not use ES6 Object methods.
*) Do not use ES6 features like arrow functions or let.
___



[arrays] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
_________
ES5 Object Methods
https://www.w3schools.com/js/js_object_es5.asp
ECMAScript 5 added a lot of new Object Methods to JavaScript.
_________
_________
Java Script Versions
https://www.greycampus.com/blog/programming/java-script-versions
ECMAScript is a widely used standard script language derived mainly from JavaScript. Look into the article to understand the new features for various versions that rele …
_________
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
_________
_________
JavaScript Methods
https://www.w3schools.com/js/js_object_methods.asp
You access an object method with the following syntax: objectName.methodName() You will typically describe fullName() as a method of the person object, and fullName as …
_________

*/
//Your code should go here:

