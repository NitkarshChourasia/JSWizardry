/*
####  Nearest Chapter  ####

Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.


[Examples]

___
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"
_____



[Notes]

___
*) All page numbers in the dictionary will be valid integers.
*) Return the higher page number if ever two pages are equidistant (see last test case).
___



[loops] [math] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important …
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
Returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop …
_________
_________
Object.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then com …
_________
_________
Math.abs()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
Returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.
_________
_________
Set and Set.size()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
How is an object that stores unique values useful to this challenge?
_________

*/
//Your code should go here:

