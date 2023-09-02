/*
####  Route Tracer  ####

In this challenge, the work area will be a 4x4 matrix containing three types of characters:
___
*) @ Your position.
*) - A blank spot.
*) &, #, $ Collectible items.
___

From your starting point in the grid, you have to trace a route placing a x in every spot visited, following a sequence of letters with the directions to take:
___
*) l Left
*) r Right
*) u Up
*) d Down
___

___
input = "luur"
// left, up, up, right

grid = [
["-", "-", "-", "#"]
["-", "-", "$", "-"]
["-", "-", "-", "@"]
["-", "&", "-", "-"] ]

result = { route = [
["-", "-", "x", "x"],
["-", "-", "x", "-"],
["-", "-", "x", "@"],
["-", "&", "-", "-"] ],
items: "$#" }
_____

When moves are finished, you will have a new grid with the traced given route (a route made of x chars), and a series of items collected along the way.
Given a matrix grid and a string with the directions to take input, implement a function that returns an object literal containing the traced route as a new matrix and the items collected as a string.


[Examples]

___
function routeTracer([
  ["-", "#", "-", "-"],
  ["$", "#", "@", "&"],
  ["-", "#", "$", "&"],
  ["$", "-", "&", "-"]
], "lddr",) ➞ {
  route: [
 ["-", "#", "-", "-"],
  ["$", "x", "@", "&"],
  ["-", "x", "$", "&"],
  ["$", "x", "x", "-"]
  ],
  items: "##&"
}
_____



[Notes]

___
*) The starting position must not be changed in the new matrix.
*) The x will overwite the symbol already present in the spot visited.
*) In the returned string, items have to appear in the order you collected them. Watch out for the blank spots: they're not collectible!
*) Don't worry about "out of bounds" cases, instruction strings contain only valid routes.
*) Instruction strings will have different lengths.
___



[arrays] [data_structures] [formatting] [loops] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
_________
_________
Array.prototype.indexOf()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
Returns the first index at which a given element can be found in the array, or -1 if it is not present.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Executes a reducer function (that you provide) on each element of the array, resulting in single output value.
_________
_________
eval()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
Evaluates JavaScript code represented as a string.
_________
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.findIndex()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
_________
_________
String.prototype.replace()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
Returns a new string with some or all matches of a pattern replaced by a replacement.
_________

*/
//Your code should go here:

