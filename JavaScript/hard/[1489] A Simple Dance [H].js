/*
####  A Simple Dance  ####

You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".
___
*) If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
*) If the parameter is "women", the women reverse their positions, while men keep their positions.
___



[Examples]

___
dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], men) ➞ [
  [Ana, Tim],
  [Amy, Josh],
  [Lisa, Bob]
]

dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], women) ➞ [
  [Lisa, Bob],
  [Amy, Josh],
  [Ana, Tim]
]
_____



[Notes]

Input arrays will always be the same length.


[arrays] [sorting] 



-------------------------------------------------------------------
[Resources]
_________
Ways of Iterating Over a Array in JavaScript.
https://www.geeksforgeeks.org/ways-iterating-array-javascript/
Arrays in Javascripts, are single variables used to store different kind of elements. There are multiple ways one can iterate over an array in Javascript. The most usef …
_________
_________
for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
Creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defi …
_________
_________
JavaScript Array Iteration / Iterators
https://www.w3schools.com/js/js_array_iteration.asp
Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
_________
_________
Array.prototype.reverse()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
_________

*/
//Your code should go here:

