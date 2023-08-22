/*
####  Unique Character Mapping  ####

Write a function that returns a character mapping from a word.


[Examples]

___
characterMapping("abcd") ➞ [0, 1, 2, 3]

characterMapping("abb") ➞ [0, 1, 1]

characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]

characterMapping("hmmmmm") ➞ [0, 1, 1, 1, 1, 1]
_____



[Notes]

___
*) Start your counter at 0, and increment by 1 each time you encounter a new character.
*) Identical characters should share the same number.
___



[data_structures] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Object.prototype.hasOwnProperty()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________

*/
//Your code should go here:

