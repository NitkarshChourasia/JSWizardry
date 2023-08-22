/*
####  ES6: Destructuring Objects VII  ####

In normal object literals you can create dynamic property names by using computed values:
___
let key = "name"
let foo = {[key]: "bar"}

console.log(foo.name); // "bar"
_____

However, in object destructuring it works a little different:
___
let key = "foo"
let {[key]: "foo"} = {foo: "Jessie"}

console.log(foo)  // Invalid destructuring assignment target
_____

The error above is caused by the literal string "foo". You cannot rename variables this way. You can read the MDN Docs Computed object property names and destructuring section to find the correct way.
Fix the function so console.log(foo) returns Jessie. Leave all variable names unchanged. Ignore the .toString() function (used for validation).


[Example]

___
console.log(foo) ➞ "Jessie"
_____



[Notes]

If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.


[bugs] [formatting] [language_fundamentals] [objects] 



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

*/
//Your code should go here:

