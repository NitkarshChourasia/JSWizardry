/*
####  Bridge Shuffle  ####

Create a function to bridge shuffle two arrays. To bridge shuffle, you interleave the elements from both arrays in an alternating fashion, like so:
___
Array 1 = ["A", "A", "A"]
Array 2 = ["B", "B", "B"]

Shuffled Array = ["A", "B", "A", "B", "A", "B"]
_____

This can still work with two arrays of uneven length. We simply tack on the extra elements from the longer array, like so:
___
Array 1 = ["C", "C", "C", "C"]
Array 2 = ["D"]

Shuffled Array = ["C", "D", "C", "C", "C"]
_____

Create a function that takes in two arrays and returns the bridge-shuffled array.


[Examples]

___
bridgeShuffle(["A", "A", "A"], ["B", "B", "B"]) ➞ ["A", "B", "A", "B", "A", "B"]

bridgeShuffle(["C", "C", "C", "C"], ["D"]) ➞ ["C", "D", "C", "C", "C"]

bridgeShuffle([1, 3, 5, 7], [2, 4, 6]) ➞ [1, 2, 3, 4, 5, 6, 7]
_____



[Notes]

___
*) Elements in both arrays can be strings or integers.
*) If two arrays are of unequal length, add the additional elements of the longer array to the end of the shuffled array.
*) Always start your shuffle with the first element of Array 1.
___



[arrays] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Math.min()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
Returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array.
_________
_________
Destructuring Assignment
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
_________
_________
Spread Syntax
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.shift()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
Removes the first element from an array and returns that removed element. This method changes the length of the array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
String.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat
Concatenates the string arguments to the calling string and returns a new string.
_________
_________
For Loop
http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to …
_________
_________
JavaScript Array Methods
https://www.w3schools.com/js/js_array_methods.asp
List of various array methods used in JavaScript.
_________

*/
//Your code should go here:

