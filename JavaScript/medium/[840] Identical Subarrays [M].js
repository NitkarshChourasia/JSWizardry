/*
####  Identical Subarrays  ####

Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.


[Examples]

___
countIdentical([
  [1],
  [2],
  [3],
  [4]
]) ➞ 4

// Single-item arrays still count as having identical elements.


countIdentical([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 4]
]) ➞ 1


countIdentical([
  [33, 33],
  [5],
  ["a", "a"],
  [2, 2, 2],
  [1, 2, 2],
  [3, 1]
]) ➞ 4

// 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]


countIdentical([
  ["@", "@", "@", "@"],
  [2, 3], [3, 4], [4, 4]
]) ➞ 2
_____



[Notes]

Single-element arrays count as (trivially) having identical elements.


[arrays] [conditions] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Set Object
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.every()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
_________

*/
//Your code should go here:

