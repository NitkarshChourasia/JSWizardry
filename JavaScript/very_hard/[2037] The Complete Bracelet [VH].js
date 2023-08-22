/*
####  The Complete Bracelet  ####

A complete bracelet is an array with at least one subsequence (pattern) repeating at least two times, and completely - the subsequence cannot be cut-off at any point. The subsequence must have length two or greater.
Complete bracelets:
___
[1, 2, 3, 3, 1, 2, 3, 3]  // Pattern: [1, 2, 3, 3]

[1, 2, 1, 2, 1, 2, 1, 2]  // Pattern: [1, 2] or [1, 2, 1, 2]

[1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7]  // Pattern: [1, 1, 6, 1, 1, 7]

[4, 4, 3, 4, 4, 4, 4, 3, 4, 4]  // Pattern: [4, 4, 3, 4, 4]
_____

Incomplete bracelets:
___
[1, 2, 2, 2, 1, 2, 2, 2, 1]  // Incomplete (chopped off)

[1, 1, 6, 1, 1, 7]  // Incomplete (subsequence repeats only once)
_____

Create a function that returns true if a bracelet is complete, and false otherwise.


[Examples]

___
completeBracelet([1, 2, 2, 1, 2, 2]) ➞ true

completeBracelet([5, 1, 2, 2]) ➞ false

completeBracelet([5, 5, 5]) ➞ false
// potential pattern [5, 5] cut-off (patterns >= 2)
_____



[Notes]

___
*) Patterns must be at least two integers in length.
*) See Comments for a hint if you are stuck.
___



[arrays] [loops] [scope] [validation] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of i …
_________
_________
Compare Arrays
https://masteringjs.io/tutorials/fundamentals/compare-arrays
Comparing two arrays in JavaScript can be tricky. Here's what you need to know.
_________

*/
//Your code should go here:

