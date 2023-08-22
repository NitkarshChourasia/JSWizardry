/*
####  Truthy or Falsy?  ####

A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:
___
*) false
*) null
*) undefined
*) 0
*) NaN
*) ""
___

In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").
Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.


[Examples]

___
isTruthy(0) ➞ 0

isTruthy(false) ➞ 0

isTruthy("") ➞ 0

isTruthy("false") ➞ 1
_____



[Notes]

___
*) You may have to take into account NaN's unique behavior in JavaScript. While other falsey values are equal to themselves, NaN != NaN
*) If you get stuck on a challenge, find help in the Resources tab.
*) If you're really stuck, unlock solutions in the Solutions tab.
___



[conditions] [control_flow] [language_fundamentals] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Truthy and Falsy: When All is Not Equal
https://www.sitepoint.com/javascript-truthy-falsy/
Anything in JavaScript can be considered either truthy or falsy. Craig looks at what these values are and the bizarre rules that apply when they're compared...
_________
_________
Understanding JavaScript Truthy and Falsy
https://stackoverflow.com/questions/35642809/understanding-javascript-truthy-and-falsy
Can someone please explain JavaScript Truthy and Falsy, using the below sample data. I have read other threads but still confused.
_________
_________
Ternary Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________
_________
Truthy and Falsy Values
http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html
Longtime JavaScript developers often toss around the terms "truthy" and "falsy", but for those who are newer to JavaScript these terms can be a bit mystifying.
_________
_________
Use of Double Bangs (!!) in JavaScript
https://medium.com/@pddivine/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054
In Javascript, every value has an associated boolean, true or false, value. For example, a null value has an associated boolean value of false. A string value, such as …
_________
_________
isNaN()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
Determines whether a value is NaN or not. Note, coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined i …
_________

*/
//Your code should go here:

