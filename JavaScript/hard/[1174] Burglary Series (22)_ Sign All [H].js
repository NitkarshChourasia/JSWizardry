/*
####  Burglary Series (22): Sign All  ####

You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.
You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.


[Examples]

___
const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

signAll(obj, "Rocky") ➞ {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "Rocky",  // changed
    },
    bathroom: {
      stereo: 220,
      signature: "Rocky",  // changed
    },
    signature: "Rocky",  // changed
}
_____



[Notes]

___
*) If you have suggestions on how to present or further test this challenge please leave a comment.
*) This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
___



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
_________
_________
Object.fromEntries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
Transforms a list of key-value pairs into an object.
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
_________
_________
Recursively List Nested Object Keys
https://www.tutorialspoint.com/recursively-list-nested-object-keys-javascript
Let’s say, we have an object with other objects being its property value, it is nested to 2-3 levels or even ... Our job is to write a function that accepts this objec …
_________

*/
//Your code should go here:

