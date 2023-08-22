/*
####  Tree Photography  ####

Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.
A tree is hidden if it is shorter or the same height as the tree in front.
Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.


[Worked Example]

___
treePhotography([1, 3, 6, 5]) ➞ "left"
// If I stand on the left, I can see trees of heights 1, 3 and 6.
// If I stand on the right, I can see trees of heights 5 and 6.
// Return "left" because I would see more trees.
_____



[Examples]

___
treePhotography([5, 6, 5, 4]) ➞ "right"

treePhotography([1, 2, 3, 3, 3, 3, 3]) ➞ "left"

treePhotography([3, 1, 4, 1, 5, 9, 2, 6]) ➞ "left"
_____



[Notes]

There will always be a best side.


[algorithms] [arrays] [loops] [numbers] 



-------------------------------------------------------------------
[Resources]
_________
Set
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.slice()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items i …
_________
_________
Array.prototype.length
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that …
_________
_________
Expressions and Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
This chapter documents all the JavaScript language operators, expressions and keywords.
_________
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________

*/
//Your code should go here:

