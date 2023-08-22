/*
####  Robot Path 🤖  ####

Mubashir created a simple robot that is navigated by a series of North, East, South, and West [n, e, s, w] commands. Each command moves the robot one step in the given direction. The robot is designed for only two destinations:
___
*) Destination No. 1: e, n, e, e, n
*) Destination No. 2: w, n, w, n, w, w, n
___

Create a function that takes an array of commands and returns true if the robot reaches any of the destinations, false otherwise.


[Examples]

___
robotPath(["s", "e", "e", "n", "n", "e", "n"]) ➞ true
// Robot will end up at destination no. 1

robotPath(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"]) ➞ false
// Robot will be lost somewhere

robotPath(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"]) ➞ true
_____



[Notes]

N/A


[algorithms] [language_fundamentals] [logic] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and …
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a …
_________

*/
//Your code should go here:

