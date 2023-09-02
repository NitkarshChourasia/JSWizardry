/*
####  Capitalization Families  ####

Write a function that groups words by the number of capital letters and returns an array of object entries whose keys are the number of capital letters and the values are the groups.


[Examples]

___
grouping(["HaPPy", "mOOdy", "yummy", "mayBE"]) ➞ [
  [0, ["yummy"]],
  [2, ["mayBE", "mOOdy"]],
  [3, ["HaPPy"]]
]

grouping(["eeny", "meeny", "miny", "moe"]) ➞ [
  [0, ["eeny", "meeny", "miny", "moe"]]
]

grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"]) ➞ [
  [0, ["lor"]],
  [1, ["sOr"]],
  [2, ["bOR", "MoR", "tOR"]],
  [3, ["FORe"]]
]
_____



[Notes]

___
*) The object entries have to be sorted by the number of capital letters.
*) The groups will be arrays of all words sharing the same number of capital letters.
*) The groups have to be sorted alphabetically (ignoring case).
*) Words will be unique.
___



[arrays] [sorting] [strings] 



-------------------------------------------------------------------
[Resources]
_________
Set.prototype.has()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
Returns a boolean indicating whether an element with the specified value exists in a Set object or not.
_________
_________
String.prototype.localeCompare()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
Returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
_________
_________
Set Object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Lets you store unique values of any type, whether primitive values or object references.
_________
_________
Array.prototype.reduce()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
_________

*/
//Your code should go here:

