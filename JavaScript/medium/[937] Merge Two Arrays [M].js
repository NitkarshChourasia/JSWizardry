/*
####  Merge Two Arrays  ####

Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
___
*) The arrays may be of different lengths, with at least one character / digit.
*) The first array will contain string characters (lowercase, a-z).
*) The second array will contain integers (all positive).
___



[Examples]

___
mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
➞ ["f", 5, "d", 3, "w", 7, "t", 8]

mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])
➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]

mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])
➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]
_____



[Notes]

N/A


[arrays] [formatting] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.push()
https://developer.mozilla.org/ro/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=example
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Combining JavaScript Arrays
https://davidwalsh.name/combining-js-arrays
Analyzing various techniques for combining/merging JavaScript Arrays.
_________
_________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=control
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=control
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
While Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
_________
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map …
_________

*/
//Your code should go here:

