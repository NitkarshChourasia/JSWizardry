/*
####  Convert Key, Values in an Object to Array  ####

Write a function that converts an object into an array of keys and values.


[Examples]

___
objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
_____



[Notes]

N/A


[arrays] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Object.entries()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
Returns an array of a given object's own enumerable string-keyed property.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Video Solution
https://youtu.be/GrxGAy3ei-o
Video goes over the solution and strategy behind converting objects to arrays for this question.
_________
_________
for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
Iterates over all non-Symbol, enumerable properties of an object.
_________
_________
How to convert an Object {} to an Array [] of key-value pairs in JavaScript?
https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
I want to convert an object like this: {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0} into an array of key-value pairs like this: [[1,5] …
_________
_________
Object​.keys()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
Returns an array of a given object's own property names, in the same order as we get with a normal loop.
_________
_________
Array.from()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
Creates a new, shallow-copied Array instance from an array-like or iterable object.
_________
_________
Array​.prototype​.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
Adds one or more elements to the end of an array and returns the new length of the array
_________

*/
//Your code should go here:

