/*
####  Average Date  ####

Create a function that given an array of dates returns the average date in string form.


[Examples]

___
averageDate([]) ➞ null

averageDate([
  new Date(Date.UTC(1970, 0, 1))
]) ➞ "1970-01-01T00:00:00.000Z"

averageDate([
  new Date(Date.UTC(1970, 0, 1)),
  new Date(Date.UTC(1971, 0, 1))
]) ➞ "1970-07-02T12:00:00.000Z"
_____



[Notes]

___
*) For the return value you can use the .toISOString() method.
*) If dates is an empty array return null.
___



[arrays] [dates] [math] 



-------------------------------------------------------------------
[Resources]
_________
Date.prototype.toISOString()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
Returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long.
_________
_________
Array​.prototype​.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Conditional (ternary) Operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
The only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed b …
_________
_________
Array​.prototype​.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Date() Constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
_________
_________
Date.prototype.getTime()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
Returns the number of milliseconds* since the Unix Epoch.
_________

*/
//Your code should go here:

