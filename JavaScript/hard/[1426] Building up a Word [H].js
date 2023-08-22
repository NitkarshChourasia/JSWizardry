/*
####  Building up a Word  ####

You are given an input array of strings, ordered by ascending length.
Write a function that returns true if, for each pair of consecutive strings, the second string can be formed from the first by adding a single letter either at the beginning or end.


[Examples]

___
canBuild(["a", "at", "ate", "late", "plate", "plates"]) ➞ true

canBuild(["a", "at", "ate", "late", "plate", "plater", "platter"]) ➞ false
// "platter" is formed by adding "t" in the middle of "plater"

canBuild(["it", "bit", "bite", "biters"]) ➞ false
// "biters" is formed by adding two letters - we can only add one

canBuild(["mean", "meany"]) ➞ true
_____



[Notes]

___
*) Return false if a word is NOT formed by adding only one letter.
*) Return false if the letter is added to the middle of the previous word.
*) Letters in tests will all be lower case.
___



[arrays] [strings] [validation] 



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
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________

*/
//Your code should go here:

