/*
####  Union and Intersection of Arrays  ####

Create a function that takes in two arrays and returns an intersection array and a union array.

While the input arrays may have duplicate numbers, the returned intersection and union arrays should be set-ified - that is, contain no duplicates. Returned arrays should be sorted in ascending order.
___
Array 1: [5, 6, 6, 6, 8, 9]
Array 2: [3, 3, 4, 4, 5, 5, 8]

Intersection: [5, 8]
// 5 and 8 are the only 2 numbers that exist in both arrays.

Union: [3, 4, 5, 6, 8, 9]
// Each number exists in at least one array.
_____



[Examples]

___
intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) ➞ [[4], [1, 2, 3, 4, 5, 9]]

intersectionUnion([1, 2, 3], [4, 5, 6]) ➞ [[], [1, 2, 3, 4, 5, 6]]

intersectionUnion([1, 1], [1, 1, 1, 1]) ➞ [[1], [1]]
_____



[Notes]

___
*) Order of output should be: [Intersection], [Union].
*) Remember both output arrays should be in ascending order.
*) Each input array will have at least one element.
*) If both arrays are disjoint (share nothing in common), return an empty array [] for the intersection.
___



[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Spread syntax (...)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are …
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Creates a new array with all elements that pass the test implemented by the provided function.
_________
_________
How to compare two arrays and return duplicate values?
https://stackoverflow.com/questions/26343295/compare-two-arrays-and-return-duplicate-values
How may I retrieve an element that exists in two different arrays of the same document. For example. In Posts collection, document has the fields 'interestbycreator' an …
_________
_________
JavaScript Array Distinct()
https://codeburst.io/javascript-array-distinct-5edc93501dc4
Ever wanted to get distinct elements from an array? Or wanted to get distinct objects from an array by a property? This blog post is for you.
_________
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.concat()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
_________

*/
//Your code should go here:

