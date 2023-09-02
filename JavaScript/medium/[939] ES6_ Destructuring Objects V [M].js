/*
####  ES6: Destructuring Objects V  ####

___
const user = {
  first: 'James',
  last: 'Baker',
  bestFriend: {
    first: 'Scott',
    last: 'Parkman'
  }
}

function welcomeMsg(user) {
  console.log("Welcome " +  user.first + " " + user.last  )
}

welcomeMsg(user)
// outputs Welcome James Baker
_____

With ES6 object destructuring you make this less terse by destructuring the function parameters which reduces duplication when scaling:
___
function welcomeMsg({ first, last }) {
  console.log("Welcome " + first + " " + last)
}
_____



[Challenge]

Use ES6 object destructuring to unpack the object inside of the function parameters. You will need to assign user.bestFriend.first to the variable name best. Don't remove the parameters { first, last } and don't change the return statement.


[Example]

___
bio(user) ➞ "Hi, my name is James Baker. Scott is my best friend."
_____



[Notes]

If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.


[formatting] [language_fundamentals] [objects] 



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

