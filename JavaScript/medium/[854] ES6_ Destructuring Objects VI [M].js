/*
####  ES6: Destructuring Objects VI  ####

___
function shirtSize({size = "big"}) {
  return size
}

shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
_____

The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.


[Example]

___
shirtSize( ) ➞ "big"
_____



[Notes]

If you get stuck the answer is in one of the yellow notes on the MDN docs page (link in the Resources tab).


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

