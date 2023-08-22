/*
####  Find the Bug: Annual Price and Deposit Increasement  ####

The annual price increasement needs to be done and we have written a script to migrate a product. An object needs to be returned with the old product and the new migrated product for pricing history records.
All prices need to raised by 15% and the deposit of bottles is increased from $0.15 to $0.20.
During the tests the old product seems to be the new product as well. Something is not working like expected.


[Expected result]

___
migrateProduct({
  product: "Milk",
  price: 1.2,
  containers: [
    { type: "bottle", deposit: 0.15, liters: 1.5 },
    { type: "can", deposit: 0.1, liters: 0.33 },
    { type: "carton", deposit: null, liters: 1 }
  ]
}) ➞ {
  oldProduct: {
    product: "Milk",
    price: 1.2,
    containers: [
      { type: "bottle", deposit: 0.15, liters: 1.5 },
      { type: "can", deposit: 0.1, liters: 0.33 },
      { type: "carton", deposit: null, liters: 1 }
    ]
  },
  newProduct: {
    product: "Milk",
    price: 1.38,
    containers: [
      { type: "bottle", deposit: 0.2, liters: 1.5 },
      { type: "can", deposit: 0.1, liters: 0.33 },
      { type: "carton", deposit: null, liters: 1 }
    ]
  }
}
_____



[Notes]

___
*) JSON object functions may not be used due to performance issues.
*) Check the Resources tab for tips! :)
___



[arrays] [bugs] [data_structures] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Copying Objects in JavaScript
https://scotch.io/bar-talk/copying-objects-in-javascript
Objects are the fundamental blocks of JavaScript. An object is a collection of properties, and a property is an association between a key (or name) and a value. Almost …
_________
_________
Grasp “By Value” and “By Reference” in JavaScript
https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293
JavaScript is an Object-Oriented language: this means that most things in JavaScript are Objects. For example, functions are Objects. The only elements that are not obj …
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
JavaScript Data Types and Data Structures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures …
_________

*/
//Your code should go here:

