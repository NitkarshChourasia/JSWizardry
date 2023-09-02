/*
####  Repeating Cycle  ####

Below is an example of a repeating cycle.
___
isRepeatingCycle([1, 2, 3, 1, 2], 3) => true
// Since the first two elements of [1, 2, 3] equals [1, 2]
_____

Below is an example of a non-repeating cycle.
___
isRepeatingCycle([1, 2, 3, 1, 3], 3) => false
// Since [1, 2, 3] != [1, 3]
_____

You are tasked with writing a function that takes in two inputs:

Return the boolean value true if the array is a repeating cycle, and false if the array is a non-repeating cycle.


[Examples]

___
isRepeatingCycle([1, 2, 3, 1, 2, 3, 1], 3) ➞ true

isRepeatingCycle([1, 2, 3, 4, 2, 3, 1], 4) ➞ false

isRepeatingCycle([1, 2, 1, 2, 2], 2) ➞ false

isRepeatingCycle([1, 1, 1, 1], 3) ➞ true
_____



[Notes]

___
*) All cycles begin with the first element of the array.
*) Return true if the cycle length is greater than the array length.
___



[arrays] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
_________
_________
For Loop
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
Array Length
https://guide.freecodecamp.org/javascript/standard-objects/array/array-length/
The assignment operator, in conjunction with the length property, can be used to set then number of elements in an array.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array.prototype.splice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
_________

*/
//Your code should go here:

