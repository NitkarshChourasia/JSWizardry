/*
####  Deep Array Count  ####

Create a function that takes an array and returns the number of ALL elements within it (including those within the inner-level array(s)).


[Examples]

___
deepCount([1, 2, 3]) ➞ 3

deepCount([[1], [2], [3]]) ➞ 6

deepCount(["x", "y", ["z"]]) ➞ 4

deepCount(["a", "b", ["c", "d", ["e"]]]) ➞ 7
_____



[Notes]

In the examples above, notice how the sub-arrays within the main array count as an element as well as the elements within that sub-array.


[algorithms] [arrays] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
_________
_________
Array.isArray()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
Determines whether the passed value is an Array.
_________
_________
Deep Count of Elements of an Array
https://www.tutorialspoint.com/deep-count-of-elements-of-an-array-using-javascript
We are required to write a JavaScript function that takes in a nested array of element and return t ...
_________

*/
//Your code should go here:

