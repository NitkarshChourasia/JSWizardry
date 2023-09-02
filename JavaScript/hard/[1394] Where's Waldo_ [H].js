/*
####  Where's Waldo?  ####

Return the coordinates ([row, col]) of the element that differs from the rest.


[Examples]

___
whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
]) ➞ [3, 2]

whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
]) ➞ [2, 4]

whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
]) ➞ [5, 1]
_____



[Notes]

___
*) The given array will always be a square or rectangle.
*) Rows and columns are 1-indexed (not zero-indexed).
___



[arrays] [functional_programming] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
String.prototype.lastIndexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
Returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
_________
_________
JSON.stringify()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
Converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified prope …
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array populated with the results of calling a provided function on every element in the calling array.
_________

*/
//Your code should go here:

