/*
####  Fix the Error: Mutating Arrays  ####

Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.
___
function minusOne(arr) {
  arr.pop()
  return arr
}
_____



[Examples]

___
x = [1, 2, 3, 4, 5]
minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
minusOne(x) ➞ [1, 2]  // 3rd time function is called.
minusOne(x) ➞ [1]  // 4th time function is called.

// What I want instead:
minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 2nd time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 3rd time function is called.
minusOne(x) ➞ [1, 2, 3, 4]  // 4th time function is called.
_____



[Notes]

N/A


[arrays] [bugs] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
_________
_________
ES6 Way to Clone an Array 🐑
https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array. Pretty nifty, right 🤩
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Spread syntax allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array …
_________
_________
JavaScript Array Methods: Mutating vs. Non-Mutating
https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/
Covers JavaScript array methods for adding, removing, and replacing items. The focus here is on distinguishing between mutating and non-mutating methods.
_________
_________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.pop()
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
Removes the last element from an array and returns that element. This method changes the length of the array.
_________

*/
//Your code should go here:

