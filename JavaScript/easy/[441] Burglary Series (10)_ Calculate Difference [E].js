/*
####  Burglary Series (10): Calculate Difference  ####

The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.


[Examples]

___
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
_____



[Notes]

___
*) The object will always contain items (no empty objects).
*) The sum of the items will always be greater than the limit.
___



[arrays] [loops] [objects] 



-------------------------------------------------------------------
[Resources]
_________
array.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number.
_________

*/
//Your code should go here:

