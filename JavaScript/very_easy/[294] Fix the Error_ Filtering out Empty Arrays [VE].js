/*
####  Fix the Error: Filtering out Empty Arrays  ####

I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:
___
function removeEmptyArrays(arr) {
  return arr.filter(x => x !== [])
}
_____

However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.


[Examples]

___
// What I want:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b"]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, 4]

// What I am getting:
removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]
_____



[Notes]

N/A


[arrays] [bugs] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.length
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Truthy and Falsy: When All is Not Equal in JavaScript
https://www.sitepoint.com/javascript-truthy-falsy/
Anything in JavaScript can be considered either truthy or falsy. Craig looks at what these values are and the bizarre rules that apply when they're compared
_________
_________
typeof
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Returns a string indicating the type of the unevaluated operand.
_________
_________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
_________
_________
Check if an Array Element is Empty
https://www.includehelp.com/code-snippets/javascript-check-if-an-array-element-is-empty.aspx
In this article, we will write a program to check if an array element is empty or not in JavaScript and make sure we have a consistent array of data.
_________

*/
//Your code should go here:

