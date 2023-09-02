/*
####  Generate N-Size Combinations from an Array  ####

Create a function that returns all combinations of size n from an array. Sort the array in ascending lexicographical order.


[Examples]

___
combo([1, 2, 3, 4], 1) ➞ [[1], [2], [3], [4]]

combo([1, 2, 3, 4], 2) ➞ [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]

combo([1, 2, 3, 4], 5) ➞ []

combo([1, 2, 3, 4], 0) ➞ [[]]
_____



[Notes]

___
*) Lexicographical order: Compare the first element: [1, 2] will be before [2, 4]. If both share the same first element, compare the second element: [1, 2] is before [1, 3], etc.
*) Return an empty array [] if n exceeds the length of the array.
*) Return [[]] if n is 0 (see example #4). (Since there is only one combination of length 0: an empty array).
___



[arrays] [language_fundamentals] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
_________
_________
Combinations
https://rosettacode.org/wiki/Combinations#JavaScript
Given non-negative integers m and n, generate all size m combinations of the integers from 0 (zero) to n-1 in sorted order (each combination is sorted and the entire ta …
_________

*/
//Your code should go here:

