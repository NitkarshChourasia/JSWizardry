/*
####  Unravel all the Possibilities  ####

Write a function that takes in a string and returns all possible combinations. Return the final result in alphabetical order.


[Examples]

___
unravel("a[b|c]") ➞ ["ab", "ac"]

unravel("a[b|c]de[f|g]") ➞ ["abdef", "acdef", "abdeg", "acdeg"]

unravel("a[b]c[d]") ➞ ["abcd"]

unravel("a[b|c|d|e]f") ➞ ["abf", "acf", "adf", "aef"]

unravel("apple [pear|grape]") ➞ ["apple grape", "apple pear"]
_____



[Notes]

Think of each element in every block (e.g. [a|b|c]) as a fork in the road.


[logic] [regex] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.flatMap()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() i …
_________

*/
//Your code should go here:

