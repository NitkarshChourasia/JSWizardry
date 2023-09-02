/*
####  Frequency by Level of Nesting  ####

Create a function that takes in a nested array and an element and returns the frequency of that element by nested level.


[Examples]

___
freqCount([1, 4, 4, [1, 1, [1, 2, 1, 1]]], 1)
➞ [[0, 1], [1, 2], [2, 3]]
// The array has one 1 at level 0, 2 1's at level 1, and 3 1's at level 2.

freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5)
➞ [[0, 3], [1, 4], [2, 0]]

freqCount([1, [2], 1, [[2]], 1, [[[2]]], 1, [[[[2]]]]], 2)
➞ [[0, 0], [1, 1], [2, 1], [3, 1], [4, 1]]
_____



[Notes]

___
*) Start the default nesting (an array with no nesting) at 0.
*) Output the nested levels in order (e.g. 0 first, then 1, then 2, etc.).
*) Output 0 for the frequency if that particular level has no instances of that element (see example #2).
___



[arrays] [language_fundamentals] [loops] [recursion] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________
_________
Recursive Function
https://www.javascripttutorial.net/javascript-recursive-function/
Is a function that calls itself until it doesn’t. And this technique is called recursion.
_________
_________
Map
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key o …
_________

*/
//Your code should go here:

