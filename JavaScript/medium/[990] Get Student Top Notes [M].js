/*
####  Get Student Top Notes  ####

Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.


[Examples]

___
getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]) ➞ [5, 5, 4]
_____



[Notes]

___
*) Try it with Array.prototype.map and Array.prototype.reduce.
*) Alternatively use Math.max instead of Array.prototype.reduce.
___



[arrays] [objects] 



-------------------------------------------------------------------
[Resources]
_________
Array.prototype.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
Creates a new array with the results of calling a provided function on every element in the calling array.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each member of the array resulting in a single output value.
_________
_________
Math.max()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
Returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
_________
_________
Array.prototype.sort()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
Sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then compari …
_________

*/
//Your code should go here:

