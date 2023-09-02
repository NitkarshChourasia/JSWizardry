/*
####  ES6: Destructuring Objects IX  ####

Given an array of user objects. If we just wanted to get the name of the third object in the array, one way could be to use an array method like:
___
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Jason", email: "jason@example.com" },
  { name: "Jeremy", email: "jeremy@example.com" },
  { name: "Jacob", email: "jacob@example.com" }
]

let thirdUser = users.filter((e, i) => i === 2 )[0].name
console.log(thirdUser)  // "Jeremy"
_____

However, you can combine array and Object destructuring to extract it more declaratively. Use array and object destructuring to extract the name from the third object in the users array and assign it to the variable thirdUser. Provide the solution inside the brackets only. Ignore the .toString() function (used for validation).


[Notes]

N/A


[arrays] [formatting] [language_fundamentals] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
ES6 In Depth: Destructuring
https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/
ES6 In Depth is a series on new features being added to the JavaScript programming language in the 6th Edition of the ECMAScript standard, ES6 for short. Editor’s note: …
_________
_________
Destructuring: Arrays & Objects
https://medium.com/@crypticmick/destructuring-arrays-objects-10e00fddd449
A special JavaScript syntax introduced in ES6 is the Destructuring assignment, which gives us the ability to DO MORE by doing less. Destructuring is used to more easily …
_________

*/
//Your code should go here:

