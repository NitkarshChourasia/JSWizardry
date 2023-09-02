/*
####  Flat Array Depth Nesting  ####

Create a function that can nest a flat array to represent an incremental depth level sequence.


[Examples]

___
incrementalDepth([1, 2]) ➞ [1, [2]]

incrementalDepth([1, 2, 3, 4, 5]) ➞ [1, [2, [3, [4, [5]]]]]

incrementalDepth([1, 3, 2, 6]) ➞ [1, [3, [2, [6]]]]

incrementalDepth(["dog", "cat", "cow"]) ➞ ["dog", ["cat", ["cow"]]]
_____



[Notes]

___
*) The elements do not matter to the function, you should increment by index.
*) Expect the array length to be from 2-20.
___



[arrays] [loops] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.concat()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Array.prototype.reduceRight()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
_________
_________
Learn and Understand Recursion
https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea
Lets jump right in and take a look at probably the most famous recursion example. This example returns the factorial of a supplied integer: Woah. It’s Okay if that make …
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________

*/
//Your code should go here:

